import React, { useState } from "react";
import {
  OptionSelect, Inputs,
  FooterAuth
} from '../../components'
import logo from '../../assets/logo.svg';
import '../login/login.css'
import '../../style.css'
import './register.css'
import { createUser } from '../../contexts/auth'

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');

  const teste = createUser(name, email, password, role)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .then((data) => {
      if(!data) return;
      console.log(data.token);
      console.log(data);
    })
    .catch(() => console.log('deu errado'));


    return (
      <section className='div-auth'>
        <img className='logo' src={logo} alt='logo'></img>
        <form>
          <Inputs type='text' onChange={(e) => setName(e.target.value)} placeholder='NOME' class /><br />
          <Inputs type='email' onChange={(e) => setEmail(e.target.value)} placeholder='E-MAIL' class /><br />
          <Inputs type='password' onChange={(e) => setPassword(e.target.value)} placeholder='SENHA' /><br />
          <Inputs type='password' onChange={(e) => setConfirmPassword(e.target.value)} placeholder='CONFIRMAR SENHA' /><br />
          <select className="select-register">
            <OptionSelect value='Sua função' />
            <OptionSelect onChange={(e) => setRole(e.target.value)} value='Atendente' />
            <OptionSelect onChange={(e) => setRole(e.target.value)} value='Cozinheiro(a)' />
          </select>
          <Inputs type='submit' value='CADASTRAR' onClick={console.log(teste)} />
        </form>
        <FooterAuth text1='Já possui uma conta?' text2='Faça login!' href='/login' />
      </section>
    );
  }

// const user = {
//   "name": "Sample Name - optional",
//   "email": "sample@mail.com",
//   "password": "sample",
//   "role": "sample role",
//   "restaurant": "sample restaurant"
// }
