import React from 'react';
import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import InputLogin from '../../components/InputLogin';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div id="container-login" >
            <div id="logo">
                <div>
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de <br/> estudos online</h2>
                </div>
            </div>
            <div id="form">
                <form action="">
                    <div id="title-new">
                        <h3>Fazer Login</h3>
                        <Link to="/register">Criar uma conta</Link>
                    </div>
                    <InputLogin name="email" label="E-mail"/>
                    <InputLogin name="password" label="Senha"/>

                    <div id="remember-pass">
                        <div>
                            <input type="checkbox" id="remember"/>
                            <label htmlFor="remember">Lembrar-me</label>
                        </div>
                        <a href="#">Esqueci minha senha</a>
                    </div>

                    <button>Entrar</button>
                </form>
            </div>
        </div>


    );
}

export default Login;