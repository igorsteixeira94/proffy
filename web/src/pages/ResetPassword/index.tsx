import React from 'react';
import './styles.css';

import logoImg from '../../assets/images/logo.svg';
import InputLogin from '../../components/InputLogin';
import arrowBack from '../../assets/images/icons/back.svg';
import { Link } from 'react-router-dom';

function ResetPassword() {
    return (
        <div id="container-reset-password" >
           
            <Link to="/">
                <img id="back"src={arrowBack} alt="Voltar" />
            </Link>         
            <div id="logo">
                
                <div>
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de <br /> estudos online</h2>
                </div>
            </div>
            <div id="form-reset">
                <form action="">
                    <h3>Eita, esqueceu <br/> sua senha?</h3>
                    <span>Não esquenta, vamos dar um jeito nisso.</span>
                    <InputLogin name="mail" label="E-mail" />
                    <button id="btn-reset-password">Enviar</button>
                </form>
            </div>

        </div>


    );
}

export default ResetPassword;