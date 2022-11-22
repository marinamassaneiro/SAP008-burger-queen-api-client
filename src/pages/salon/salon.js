import React, { useState, useEffect } from "react";
import {
  Header,
  Details,
  Products,
  Check,
  Footer
} from '../../components'
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.png';
import './salon.css'
import '../../style.css'
import { allProducts, name, createOrder } from '../../contexts/api';


export const Salon = () => {
  const [selectProducts, setSelectProducts] = useState([]);
  const [products, setProduct] = useState([]);
  const [qtd, setQtd] = useState(1);

  // console.log(products);
  // const [order, setOrder] = useState('');
  const [client, setClient] = useState('');
  const [table, setTable] = useState('');
  // const [order, setOrder] = useState('');

  function teste(p) {
    const teste2 = products.findIndex((e)=> e.id === p.id);
    if (teste2 === -1){
      return setProduct([...products, {
        "id": p.id,
        "qtd": 1
      }])
    } else {
      return setQtd(products[teste2].qtd += 1)
    }
    }


  useEffect(() => {
    allProducts()
      .then((response) => response.json())
      .then((data) => {
        setSelectProducts(data);
      });
  }, []);

  const makeOrder = () => {
      createOrder(client, table, products)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((erro) => console.log(erro));
  }

  // console.log(selectProducts);

  const productsBreakfast = selectProducts.map((p) => {
    if (p.sub_type === 'breakfast') {
      return <Products onClick={ () => teste(p) } key={p.id} name={p.name} price={p.price} />;
    };
  });

  const productsHamburguer = selectProducts.map((p) => {
    if (p.sub_type === 'hamburguer') {
      if (p.flavor === null && p.complement === null) {
        return <Products key={p.id} name={p.name} price={p.price} />;
      } else if (p.flavor !== null && p.complement === null) {
        return <Products key={p.id} name={p.name + ' ' +  p.flavor} price={p.price} />;
      } else if (p.flavor !== null && p.complement !== null) {
      return <Products key={p.id} name={p.name + ' ' + p.flavor + ' com ' + p.complement} price={p.price} />;
      }
    }
  });

  const productsOthers = selectProducts.map((p) => {
    if (p.sub_type === 'side' || p.sub_type === 'drinks') {
      return <Products key={p.id} name={p.name} price={p.price} />;
    };
  });
  
  return (
    <section>
      <Header href1='login' logout={logout} user={name()} href2='salon' logo={logo} />
      <section className="container-salon">
        <Details className='details to-delivery' text1='Pedidos prontos para entrega' />
        <details className="details new-ordered">
          <summary>Novos pedidos</summary>
          <Details className='detailsMenu breakfast-menu' text1='Café da Manhã' product={productsBreakfast} />
          <Details className='detailsMenu hamburguer-menu' text1='Hamburgueres' product={productsHamburguer} />
          <Details className='detailsMenu others-menu' text1='Acompanhamentos e Bebidas' product={productsOthers} />
          <Check onClick={makeOrder} client={<input type="text" className="input-order-client" onChange={(e) => setClient(e.target.value)} />} 
          table={<input type="number" className="input-order-table" onChange={(e) => setTable(e.target.value)} />} >
</Check>
        </details>
        <Details className='details closed' text1='Pedidos finalizados' />
      
      </section>
      <Footer href1='salon' text1='Ir para conta' href2='salon' text2='Ir para produtos prontos' />
    </section>
  );
}


{/* <Details className='details new-ordered' text1='Novos pedidos' element1={breakfastMenu} element2={hamburguerMenu} element3={othersMenu} /> */}
