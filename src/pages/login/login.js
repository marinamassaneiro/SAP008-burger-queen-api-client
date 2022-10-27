import React from "react";
import { Inputs, FooterAuth } from '../../components';
import logo from '../../assets/logo.svg';
import './login.css'
import '../../style.css'

export const Login = () => {
	return (
		<section className='div-auth'>
			<img className='logo' src={logo} alt='logo'></img>
			<form>
				<Inputs type='email' placeholder='E-mail' class /><br />
				<Inputs type='password' placeholder='Senha' /><br />
				<Inputs type='submit' value='ENTRAR' />
			</form>
			<FooterAuth text1='Não possui uma conta?' text2='Cadastre-se!' href='#root' />
		</section> 
	);
};
