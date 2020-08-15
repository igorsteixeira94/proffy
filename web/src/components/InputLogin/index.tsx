import React from 'react';
import './styles.css';
import { InputProps } from '../Input';


const InputLogin: React.FC<InputProps> = ({name,label,...rest}) =>{
    return(

        <div className="input-login">
            <input type="text" id={name} placeholder=" " {...rest}></input>
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default InputLogin;