import React, { useState, useEffect } from "react";
import { ToDelivery } from '../../components/products/products'
import { Details, DetailsByType } from '../../components/details/details'
import { Header, FooterSalon } from '../../components/header-footer/header-footer'
import { Check, Itens } from '../../components/check/check'
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.png';
import '../../style.css'
import { allProducts, name, createOrder, orderToKitchen, updateOrderStatus } from '../../contexts/api';
import { Closed } from "../../components/ordered/ordered";
import { Inputs } from "../../components/inputs/inputs";


export const Salon = () => {
  const [selectAllProducts, setSelectAllProducts] = useState([]);
  const [productsOrder, setProductsOrder] = useState([]);
  const [allOrdered, setAllOrdered] = useState([]);

  const [qtd, setQtd] = useState(1);
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');

  useEffect(() => {
    allProducts()
      .then((response) => response.json())
      .then((data) => {
        setSelectAllProducts(data);
      });
  }, []);

  useEffect(() => {
    orderToKitchen()
      .then((response) => response.json())
      .then((data) => {
        setAllOrdered(data);
      });
  }, []);

  function statusFinished(ordered) {
    updateOrderStatus('finished', ordered.id)
      .then(() => window.location.reload());
  }

  const breakfastFilter = product => product.sub_type === 'breakfast';
  const hamburguerFilter = product => product.sub_type === 'hamburguer';
  const othersFilter = product => product.sub_type === 'side' || product.sub_type === 'drinks';

  function addProductCount(product) {
    const productId = productsOrder.findIndex((e) => e.id === product.id);
    if (productId === -1) {
      return setProductsOrder([...productsOrder, {
        "id": product.id,
        "qtd": 1,
        "name": product.name,
        "price": product.price,
        "sub_type": product.sub_type,
        "flavor": product.flavor,
        "complement": product.complement
      }]);
    } return setQtd(productsOrder[productId].qtd += 1);
  }

  function deleteProductCount(p) {
    const productId = productsOrder.findIndex((e) => e.id === p.id);
    setQtd(productsOrder[productId].qtd -= 1);
    if (p.qtd === 0) {
      return productsOrder.splice(productId, 1);
    }
  }

  const makeOrder = () => {
    createOrder(client, table, productsOrder)
      .then((response) => response.json())
      .then(() => {
        setClient('');
        setTable('');
        setProductsOrder([]);
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <section>
      <Header href1='login' logout={logout} title={`Atendente: ${name()}`} href2='salon' logo={logo} />
      <main className="container">
        <Details className='details details-to-delivery' summary='Pedidos prontos para entrega'
          product={allOrdered
            .filter((order) => order.status === 'done')
            .map((ordered, index) => (
              <ToDelivery key={index} ordered={ordered} onClick={() => statusFinished(ordered)} />
            ))} />
        <details className="details details-new-ordered">
          <summary>Novos pedidos</summary>
          <DetailsByType addProductCount={addProductCount} className='detailsMenu breakfast-menu' summary='Café da Manhã' productList={selectAllProducts} filterFunc={breakfastFilter} />
          <DetailsByType addProductCount={addProductCount} className='detailsMenu hamburguer-menu' summary='Hamburgueres' productList={selectAllProducts} filterFunc={hamburguerFilter} />
          <DetailsByType addProductCount={addProductCount} className='detailsMenu others-menu' summary='Acompanhamentos e Bebidas' productList={selectAllProducts} filterFunc={othersFilter} />
          <Check itens={productsOrder.map((product) => (
            <Itens onClickDelete={() => deleteProductCount(product)} onClickAdd={() => addProductCount(product)} key={product.id}
              product={product} />))} client={<Inputs type='text' onChange={(e) => setClient(e.target.value)} className='input-check input-check-client' />} 
              table={<Inputs type='number' onChange={(e) => setTable(e.target.value)} className='input-check input-check-table' />}
            onClick={makeOrder} counter={productsOrder.reduce((result, product) => result + (product.price * product.qtd), 0)} >
          </Check>
        </details>
        <Details className='details details-closed' summary='Pedidos finalizados'
          product={allOrdered
            .filter((order) => order.status === 'finished')
            .map((ordered, index) => (
              <Closed key={index} ordered={ordered} />
            ))} />
      </main>
      <FooterSalon href1='salon' text1='Ir para conta' href2='salon' text2='Ir para produtos prontos' />
    </section>
  );
}