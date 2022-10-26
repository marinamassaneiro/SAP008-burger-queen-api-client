import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './assets/logo.svg';
import { Inputs, FooterAuth } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section className='div-auth'>
      <img className='logo' src={ logo } alt='logo image'></img>
      <form>
        <Inputs type='email' placeholder='E-mail' class /><br />
        <Inputs type='password' placeholder='Senha' /><br />
        <Inputs type='submit' value='ENTRAR' />
      </form>
      <FooterAuth text1='Não possui uma conta?'text2='Cadastre-se!' href='#root'/>
    </section> 
  </React.StrictMode>
);
