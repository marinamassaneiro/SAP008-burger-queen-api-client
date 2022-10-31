import React from "react";
import { OptionSelect, Inputs, 
  FooterAuth} from '../../components'
import logo from '../../assets/logo.svg';
import '../login/login.css'
import '../../style.css'
import './register.css'

export const Register = () => {
  return (
    <section className='div-auth'>
			<img className='logo' src={logo} alt='logo'></img>
			<form>
        <Inputs type='text' placeholder='NOME' class /><br />
				<Inputs type='email' placeholder='E-MAIL' class /><br />
				<Inputs type='password' placeholder='SENHA' /><br />
        <Inputs type='password' placeholder='CONFIRMAR SENHA' /><br />
        <select className="select-register">
          <OptionSelect value='Sua função' />
          <OptionSelect value='Atendente' />
          <OptionSelect value='Cozinheiro(a)' />
		    </select> 
				<Inputs type='submit' value='CADASTRAR' />
			</form>
			<FooterAuth text1='Já possui uma conta?' text2='Faça login!' href='/login' />
		</section> 
  );
}
