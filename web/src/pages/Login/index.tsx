import React from 'react';
import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import InputLogin from '../../components/InputLogin';

function Login() {
    return (
        <div id="container-login" className="container">
            <div id="logo">
                <div>
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de <br/> estudos online</h2>
                </div>
            </div>
            <div id="form">
                <div id="title-new">
                    <h3>Fazer Login</h3>
                    <a href="#">Criar uma conta</a>
                </div>
                <form action="">
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