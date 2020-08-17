import React from 'react';
import './styles.css'
import sucessIcon from '../../assets/images/sucess.svg';
import { Link } from 'react-router-dom';

interface SucessMsgProps{
    title:string,
    description:string
}

const SucessMsg:React.FC<SucessMsgProps> = ({title, description})=>{
    return(
        <div id="container-sucess" >
            <img src={sucessIcon} alt="Sucesso"/>
            <h1>{title}!</h1>
            <p>{description}</p>
            <Link to="/">Fazer login</Link>
        </div>
        );
};

export default SucessMsg;
/*
<h1>Cadastro concluído!</h1>
            <p>Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência</p>
        */