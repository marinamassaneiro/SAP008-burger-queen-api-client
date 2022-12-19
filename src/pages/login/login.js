import React, { useState } from "react";
import { Inputs } from "../../components/inputs/inputs";
import logo from '../../assets/logo.svg';
import './login.css'
import '../../style.css'
import { createToken, saveToken, saveName } from '../../contexts/api'
import { useNavigate, Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    createToken(email, password)
      .then((response) => response.json())
      .then((data) => {
        if (data.code === 400) {
          return setError(data.message)
        } return data
      }).then((data) => {
        saveToken(data.token);
        saveName(data.name);
        if (data.role === 'atendente') {
          navigate('/salon');
        } navigate('/kitchen');
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
          <p className="error-msg">{error}</p>
        </form>
        <footer>
          <p className="footer-auth">Não possui uma conta?<Link to="/register">Cadastre-se</Link></p>
        </footer>
      </div>
    </section>
  );
};
