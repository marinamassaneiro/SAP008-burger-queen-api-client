import React, { useState } from "react";
import { OptionSelect, Inputs } from '../../components/inputs/inputs'
import logo from '../../assets/logo.svg';
import '../login/login.css'
import '../../style.css'
import { createUser } from '../../contexts/api'
import { errorMessage } from "../../errors/error";
import { useNavigate, Link } from 'react-router-dom';

export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const error = errorMessage.error;
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    const tagErrorMessage = document.querySelector('#error-message');
    if (password !== confirmPassword) {
      tagErrorMessage.innerHTML = 'As senhas devem combinar'
    } else {
      createUser(name, email, password, role)
        .then((response) => {
          if (response.status === 200) {
            navigate('/login');
            return response.json();
          }
          tagErrorMessage.innerHTML = error[0].register[response.status];
        })
        .then((data) => {
          if (!data) return;
          console.log(data.token);
          console.log(data);
        })
        .catch((erro) => console.log(erro));
    }
  }

  return (
    <section className="body-auth">
      <div className='div-auth'>
        <img className='logo' src={logo} alt='logo'></img>
        <form>
          <Inputs type='text' onChange={(e) => setName(e.target.value)} placeholder='NOME' class /><br />
          <Inputs type='email' onChange={(e) => setEmail(e.target.value)} placeholder='E-MAIL' class /><br />
          <Inputs type='password' onChange={(e) => setPassword(e.target.value)} placeholder='SENHA' /><br />
          <Inputs type='password' onChange={(e) => setConfirmPassword(e.target.value)} placeholder='CONFIRMAR SENHA' /><br />
          <select className="select-register" onChange={(e) => setRole(e.target.value)}  >
            <OptionSelect value='Sua função' />
            <OptionSelect value='Atendente' />
            <OptionSelect value='Cozinheiro(a)' />
          </select>
          <p id='error-message'></p>
          <Inputs type='submit' value='CADASTRAR' onClick={registerUser} />
        </form>
        <footer> 
          <p className="footer-auth">Já possui uma conta?<Link to="/register">Faça login</Link></p>
        </footer>
      </div>
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