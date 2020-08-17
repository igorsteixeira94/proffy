import React from 'react';
import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import InputLogin from '../../components/InputLogin';
import arrowBack from '../../assets/images/icons/back.svg';
import { Link } from 'react-router-dom';

function Register() {
    return (
        <div id="container-register" >
           
            <Link to="/">
                <img id="back"src={arrowBack} alt="Voltar" />
            </Link>         
            <div id="logo">
                
                <div>
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de <br /> estudos online</h2>
                </div>
            </div>
            <div id="form-register">
                <form action="">
                    <h3>Cadastro</h3>
                    <span>Preencha os dados abaixo <br /> para começar.</span>
                    <div id="inputs">
                        <InputLogin name="name" label="Nome" />
                        <InputLogin name="lastname" label="Sobrenome" />
                        <InputLogin name="mail" label="E-mail" />
                        <InputLogin name="pass" label="Senha" />
                    </div>

                    <button id="register">Concluir cadastro</button>
                </form>
            </div>

        </div>


    );
}

export default Register;