import React, { useState, useEffect } from "react";
import { Products } from '../../components/products/products'
import { Details } from '../../components/details/details'
import { Header, Footer } from '../../components/header-footer/header-footer'
import { Check, Itens } from '../../components/check/check'
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.png';
import '../../style.css'
import { allProducts, name, createOrder } from '../../contexts/api';


export const Salon = () => {
  const [selectAllProducts, setSelectAllProducts] = useState([]);
  const [productsOrder, setProductsOrder] = useState([]);
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

  const productsBreakfast = selectAllProducts.map((product) => {
    if (product.sub_type === 'breakfast') {
      return <Products onClick={() => addProductCount(product)} key={product.id} name={product.name} price={product.price} />;
    } return;
  });

  const productsHamburguer = selectAllProducts.map((p) => {
    if (p.sub_type === 'hamburguer') {
      if (p.flavor === null && p.complement === null) {
        return <Products onClick={() => addProductCount(p)} key={p.id} name={p.name} price={p.price} />;
      } else if (p.flavor !== null && p.complement === null) {
        return <Products onClick={() => addProductCount(p)} key={p.id} name={`${p.name} ${p.flavor}`} price={p.price} />;
      } else if (p.flavor !== null && p.complement !== null) {
        return <Products onClick={() => addProductCount(p)} key={p.id} name={`${p.name} ${p.flavor} com ${p.complement}`} price={p.price} />;
      }
    } return;
  });


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
    } else {
      setQtd(productsOrder[productId].qtd += 1);
    }
  }

  function deleteProductCount(p) {
    const productId = productsOrder.findIndex((e) => e.id === p.id);
    setQtd(productsOrder[productId].qtd -= 1);
    if (p.qtd === 0) {
      productsOrder.splice(productId, 1);
    }
  }

  const makeOrder = () => {
    createOrder(client, table, productsOrder)
      .then((response) => response.json())
      .then(() => {
        setProductsOrder([]);
        setTable('');
        setClient('');
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <section>
      <Header href1='login' logout={logout} title={`Atendente: ${name()}`} href2='salon' logo={logo} />
      <main className="container">
        <Details className='details to-delivery' summary='Pedidos prontos para entrega' />
        <details className="details new-ordered">
          <summary>Novos pedidos</summary>
          <Details className='detailsMenu breakfast-menu' summary='Café da Manhã' product={productsBreakfast} />
          <Details className='detailsMenu hamburguer-menu' summary='Hamburgueres' product={productsHamburguer} />
          <Details className='detailsMenu others-menu' summary='Acompanhamentos e Bebidas' product={productsOthers} />
          <Check itens={productsOrder.map((product) => {
            if (product.sub_type === 'hamburguer') {
              if (product.flavor === null && product.complement === null) {
                return <Itens onClick1={() => deleteProductCount(product)} onClick2={() => addProductCount(product)} key={product.id} 
                counter={product.qtd} name={product.name} price={product.price} totalPrice={product.price * product.qtd} />;
              } else if (product.flavor !== null && product.complement === null) {
                return <Itens onClick1={() => deleteProductCount(product)} onClick2={() => addProductCount(product)} key={product.id} 
                counter={product.qtd} name={`${product.name} ${product.flavor}`} price={product.price} totalPrice={product.price * product.qtd} />;
              } else if (product.flavor !== null && product.complement !== null) {
                return <Itens onClick1={() =>deleteProductCount(product)} onClick2={() => addProductCount(product)} key={product.id} 
                counter={product.qtd} name={`${product.name} ${product.flavor} com ${product.complement}`} price={product.price} totalPrice={product.price * product.qtd} />;
              }
            } return <Itens onClick1={() => deleteProductCount(product)} onClick2={() => addProductCount(product)} key={product.id} 
            name={product.name} counter={product.qtd} price={product.price} totalPrice={product.price * product.qtd} />
          })} client={<input type="text" className="input-order-client" onChange={(e) => setClient(e.target.value)} />}
            table={<input type="number" className="input-order-table" onChange={(e) => setTable(e.target.value)} />} 
            onClick={makeOrder} counter={productsOrder.reduce((result, product) => result + (product.price * product.qtd), 0)}
          >
          </Check>
        </details>
        <Details className='details closed' summary='Pedidos finalizados' />
      </main>
      <Footer href1='salon' text1='Ir para conta' href2='salon' text2='Ir para produtos prontos' />
    </section>
  );
}


{/* <Details className='details new-ordered' text1='Novos pedidos' element1={breakfastMenu} element2={hamburguerMenu} element3={othersMenu} /> */ }
// itens={selectAllProducts.map((p) => orderList(p))}