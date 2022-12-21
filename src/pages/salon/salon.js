import React, { useState, useEffect } from "react";
import { Products, ToDelivery } from '../../components/products/products'
import { Details } from '../../components/details/details'
import { Header, FooterSalon } from '../../components/header-footer/header-footer'
import { Check, Itens } from '../../components/check/check'
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.png';
import '../../style.css'
import { allProducts, name, createOrder, orderToKitchen, updateOrderStatus } from '../../contexts/api';
import { Done } from "../../components/ordered/ordered";


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
    // .then(() => window.location.reload()); 
  }

  const productsBreakfast = selectAllProducts.map((product) => {
    if (product.sub_type === 'breakfast') {
      return <Products onClick={() => addProductCount(product)} key={product.id} product={product} />;
    } return;
  });

  const productsHamburguer = selectAllProducts
    .filter((p) => p.sub_type === 'hamburguer')
    .map((product) => (
      <Products onClick={() => addProductCount(product)} key={product.id} product={product} />
    ));

  const productsOthers = selectAllProducts.map((p) => {
    if (p.sub_type === 'side' || p.sub_type === 'drinks') {
      return <Products onClick={() => addProductCount(p)} key={p.id} name={p.name} price={p.price} />;
    }
  });

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
        setClient(''); //não funciona nao sei pq
        setTable('');
        setProductsOrder([]);    
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <section>
      <Header href1='login' logout={logout} title={`Atendente: ${name()}`} href2='salon' logo={logo} />
      <main className="container">
        <Details className='details to-delivery' summary='Pedidos prontos para entrega'
        product={ allOrdered.map((ordered, index) => {
          if (ordered.status === 'done') {
            return <ToDelivery key={index} client={ordered.client_name} table={ordered.table} 
            idOrdered={ordered.id} onClick={() => statusFinished(ordered)}/>
          }
        })} />
        <details className="details new-ordered">
          <summary>Novos pedidos</summary>
          <Details className='detailsMenu breakfast-menu' summary='Café da Manhã' product={productsBreakfast} />
          <Details className='detailsMenu hamburguer-menu' summary='Hamburgueres' product={productsHamburguer} />
          <Details className='detailsMenu others-menu' summary='Acompanhamentos e Bebidas' product={productsOthers} />
          <Check itens={productsOrder.map((product) => {
             return <Itens onClick1={() => deleteProductCount(product)} onClick2={() => addProductCount(product)} key={product.id} 
            product={product} />
          })} client={<input type="text" className="input-order-client" onChange={(e) => setClient(e.target.value)} />}
            table={<input type="number" className="input-order-table" onChange={(e) => setTable(e.target.value)} />} 
            onClick={makeOrder} counter={productsOrder.reduce((result, product) => result + (product.price * product.qtd), 0)}
          >
          </Check>
        </details>
        <Details className='details closed' summary='Pedidos finalizados'
          product={ allOrdered.map((ordered, index) => {
            if (ordered.status === 'finished') {
              return <Done key={index} client={ordered.client_name} table={ordered.table} idOrdered={ordered.id} />
            }
          })} />
      </main>
      <FooterSalon href1='salon' text1='Ir para conta' href2='salon' text2='Ir para produtos prontos' />
    </section>
  );
}


//  <Details className='details new-ordered' text1='Novos pedidos' element1={breakfastMenu} element2={hamburguerMenu} element3={othersMenu} /> 