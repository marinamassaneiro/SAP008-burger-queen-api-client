import React, { useState, useEffect } from "react";
import { Details } from "../../components/details/details";
import { Ordered, ItensOrdered } from '../../components/ordered/ordered'
import { Footer, Header } from "../../components/header-footer/header-footer";
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.png';
import '../../style.css'
import { orderToKitchen, updateOrderStatus } from '../../contexts/api';

export const Kitchen = () => {
  const [allOrdered, setAllOrdered] = useState([]);

  useEffect(() => {
    orderToKitchen()
      .then((response) => response.json())
      .then((data) => {
        setAllOrdered(data);
      });
  }, []);

  const attOrder = (ordered) => {
    updateOrderStatus(ordered.status, ordered.id)
      .then((response) => response.json())
      .then((data) => {
      console.log(data)
      })
      .catch((erro) => console.log(erro));
    }

  const printOrdered = allOrdered.map((ordered) => {
    if (ordered.status === 'pending') {
      return <Ordered key={ordered.id} onclick={() => attOrder(ordered)} client={ordered.client_name} table={ordered.table} idOrdered={ordered.id}
        itens={ordered.Products.map((item) => {
          if (item.flavor !== null && item.complement === null) {
            return <ItensOrdered key={item.id} name={`${item.name} ${item.flavor}`} qtd={item.qtd} />
          } else if (item.flavor !== null && item.complement !== null) {
            return <ItensOrdered key={item.id} name={`${item.name} ${item.flavor} com ${item.complement}`} qtd={item.qtd} />
          } return <ItensOrdered key={item.id} name={item.name} qtd={item.qtd} />
        })} />
    }
  })



  return (
    <section>
      <Header href1='login' logout={logout} title='Cozinha' href2='salon' logo={logo} />
      <section className="container">
        <Details className='details to-delivery' summary='Pedidos pendentes para preparo'
          product={printOrdered} />
        <Details className='details preparing' summary='Pedidos em produção' />
        <Details className='details closed' summary='Pedidos finalizados' />
      </section>
      <Footer href1='salon' text1='Ir para conta' href2='salon' text2='Ir para produtos prontos' />
    </section>
  );
}
