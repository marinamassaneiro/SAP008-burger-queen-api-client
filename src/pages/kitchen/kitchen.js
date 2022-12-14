import React from "react";
import { Details } from "../../components/details/details";
import { Footer, Header } from "../../components/header-footer/header-footer";
import logo from '../../assets/logo.svg';
import logout from '../../assets/logout.png';
import '../../style.css'

export const Kitchen = () => {
  return (
    <section>
      <Header href1='login' logout={logout} title='Cozinha' href2='salon' logo={logo} />
      <section className="container">
        <Details className='details to-delivery' summary='Pedidos pendentes para preparo' />
        <Details className='details preparing' summary='Pedidos em produção' />
        <Details className='details closed' summary='Pedidos finalizados' />
      </section>
      <Footer href1='salon' text1='Ir para conta' href2='salon' text2='Ir para produtos prontos' />
    </section>
  );
}

