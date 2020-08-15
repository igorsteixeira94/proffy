import React from 'react';
import './styles.css';

function Login() {
    return (
        <div id="container-login">
            <div className="input-submit">
                <input type="text" id="mail" placeholder=" " required/>
                <label>E-mail</label>
            </div>
            <div className="input-submit">
                <input type="text" id="senha" placeholder=" " required/>
                <label>Senha</label>
            </div>
        </div>


    );
}

export default Login;