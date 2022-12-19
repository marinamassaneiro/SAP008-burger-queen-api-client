import React, { useState, useEffect } from "react";
import { Details } from "../../components/details/details";
import { Ordered, ItensOrdered, Done } from '../../components/ordered/ordered'
import { FooterKitchen, Header } from "../../components/header-footer/header-footer";
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


  function statusPreparing(ordered) {
    updateOrderStatus('preparing', ordered.id)
    .then(() => window.location.reload()); 
  }

  function statusDone(ordered) { 
    updateOrderStatus('done', ordered.id)
    .then(() => window.location.reload()); 
  }

  return (
    <section>
      <Header href1='login' logout={logout} title='Cozinha' href2='salon' logo={logo} />
      <section className="container">
        <Details className='details to-delivery' summary='Pedidos pendentes para preparo'
          product={ allOrdered.map((ordered) => {
            if (ordered.status === 'pending') {
              return <Ordered key={ordered.id} onClick={() => statusPreparing(ordered)} className={'btn-pending'} txtBtn={'Preparar pedido'}
              client={ordered.client_name} table={ordered.table} idOrdered={ordered.id}
                itens={ordered.Products.map((item) => {
                  if (item.flavor !== null && item.complement === null) {
                    return <ItensOrdered key={item.id} name={`${item.name} ${item.flavor}`} qtd={item.qtd} />
                  } else if (item.flavor !== null && item.complement !== null) {
                    return <ItensOrdered key={item.id} name={`${item.name} ${item.flavor} com ${item.complement}`} qtd={item.qtd} />
                  } return <ItensOrdered key={item.id} name={item.name} qtd={item.qtd} />
                })} />
            }
          })} />
        <Details className='details preparing' summary='Pedidos em produção'
          product={ allOrdered.map((ordered) => {
            if (ordered.status === 'preparing') {
              return <Ordered key={ordered.id} onClick={() => statusDone(ordered)} className={'btn-preparing'}  txtBtn={'Pedido pronto'}
              client={ordered.client_name} table={ordered.table} idOrdered={ordered.id}
                itens={ordered.Products.map((item) => {
                  if (item.flavor !== null && item.complement === null) {
                    return <ItensOrdered key={item.id} name={`${item.name} ${item.flavor}`} qtd={item.qtd} />
                  } else if (item.flavor !== null && item.complement !== null) {
                    return <ItensOrdered key={item.id} name={`${item.name} ${item.flavor} com ${item.complement}`} qtd={item.qtd} />
                  } return <ItensOrdered key={item.id} name={item.name} qtd={item.qtd} />
                })} />
            }
          })} />
        <Details className='details closed' summary='Pedidos finalizados'
          product={ allOrdered.map((ordered, index) => {
            if (ordered.status === 'done') {
              return <Done key={index} client={ordered.client_name} table={ordered.table} idOrdered={ordered.id} />
            }
          })} />
      </section>
      <FooterKitchen href1='salon' text1='Ir para pedidos pendentes' href2='salon' />
    </section>
  );
}
