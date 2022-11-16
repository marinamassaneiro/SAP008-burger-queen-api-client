import React, { useState } from "react";
import {
  Inputs,
  FooterAuth
} from '../../components'
import logo from '../../assets/logo.svg';
import './login.css'
import '../../style.css'
import { createToken, saveToken } from '../../contexts/api'
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
			}).then ((data) => {
        saveToken(data.token);
        if (data.role === 'atendente'){
					navigate('/salon');
        } else {
					navigate('/kitchen');
        }
		if (!data) return;
				console.log(data);
			})
			.catch((erro) => console.log(erro));
	}

	return (
		<section className='div-auth'>
			<img className='logo' src={logo} alt='logo'></img>
			<form>
        <Inputs type='email' onChange={(e) => setEmail(e.target.value)} placeholder='E-MAIL' class /><br />
        <Inputs type='password' onChange={(e) => setPassword(e.target.value)} placeholder='SENHA' /><br />
        <Inputs type='submit' value='ENTRAR' onClick={loginUser} />
			</form>
			<FooterAuth text1='Não possui uma conta?' text2='Cadastre-se!' href='register' />
		</section>
	);
};
