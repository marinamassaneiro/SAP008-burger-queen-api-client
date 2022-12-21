import React, { useState, useEffect } from "react";
import { Details } from "../../components/details/details";
import { Ordered, ItensOrdered, Done, Closed } from '../../components/ordered/ordered'
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
        <Details className='details details-to-do' summary='Pedidos pendentes para preparo'
          product={allOrdered
            .filter(order => order.status === 'pending')
            .map((ordered, index) => {
              return <Ordered key={index} onClick={() => statusPreparing(ordered)} className={'btn-pending'} txtBtn={'Preparar pedido'}
                product={ordered} itens={ordered.Products.map((product) => {
                  return <ItensOrdered key={product.id} product={product} />
                })} />
            })} />
        <Details className='details details-preparing' summary='Pedidos em produção'
          product={allOrdered
            .filter(order => order.status === 'preparing')
            .map((ordered, index) => {
              return <Ordered key={index} onClick={() => statusDone(ordered)} className={'btn-preparing'} txtBtn={'Pedido pronto'}
                product={ordered} itens={ordered.Products.map((product) => {
                  return <ItensOrdered key={product.id} product={product} />
                })} />
            })} />
        <Details className='details details-done' summary='Pedidos prontos'
          product={allOrdered
            .filter(order => order.status === 'done')
            .map((ordered, index) => {
              return <Done key={index} product={ordered} />
            })} />
        <Details className='details details-closed' summary='Pedidos finalizados'
          product={allOrdered
            .filter(order => order.status === 'finished')
            .map((ordered, index) => {
              return <Closed key={index} product={ordered} />
            })} />
      </section>
      <FooterKitchen href1='salon' text1='Ir para pedidos pendentes' />
    </section>
  );
}
