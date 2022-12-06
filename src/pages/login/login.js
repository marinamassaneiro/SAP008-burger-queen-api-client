import React, { useState } from "react";
import { FooterAuth } from '../../components/footerAuth/footerAuth'
import { Inputs } from "../../components/inputs/inputs";
import logo from '../../assets/logo.svg';
import './login.css'
import '../../style.css'
import { createToken, saveToken, saveName } from '../../contexts/api'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    createToken(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      }).then((data) => {
        console.log(data.token);
        saveToken(data.token);
        saveName(data.name);
        if (data.role === 'atendente') {
          navigate('/salon');
        } else {
          navigate('/kitchen');
        }
        // if (!data) return;
        // 		console.log(data);
      })
      .catch((erro) => console.log(erro));
  }

  return (
    <section className="body-auth">
      <div className='div-auth'>
        <figure>
          <img className='logo' src={logo} alt='logo'></img>
        </figure>
        <form>
          <Inputs type='email' onChange={(e) => setEmail(e.target.value)} placeholder='E-MAIL' class /><br />
          <Inputs type='password' onChange={(e) => setPassword(e.target.value)} placeholder='SENHA' /><br />
          <Inputs type='submit' value='ENTRAR' onClick={loginUser} />
        </form>
        <FooterAuth text1='Não possui uma conta?' text2='Cadastre-se!' href='register' />
      </div>
    </section>
  );
};
