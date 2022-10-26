import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { Inputs } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <section className='div-auth'>
      <form>
        <Inputs type='email' placeholder='E-mail'  /><br />
        <Inputs type='password' placeholder='Senha' /><br />
        <Inputs type='submit' value='ENTRAR' />
      </form>
    </section> 
  </React.StrictMode>
);
