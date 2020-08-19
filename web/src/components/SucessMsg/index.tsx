import React from 'react';
import './styles.css'
import sucessIcon from '../../assets/images/sucess.svg';
import { Link } from 'react-router-dom';

interface SucessMsgProps{
    title:string,
    description:string,
    button:{
        name:string,
        to:string
    }
}

const SucessMsg:React.FC<SucessMsgProps> = ({title, description,button})=>{
    return(
        <div id="container-sucess" >
            <img src={sucessIcon} alt="Sucesso"/>
            <h1>{title}!</h1>
            <p>{description}</p>
            <Link to={button.to}>{button.name}</Link>
        </div>
        );
};

export default SucessMsg;
