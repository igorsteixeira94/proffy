import React from 'react';
import SucessMsg from '../../components/SucessMsg';

function RegisterSucess (){
    const btn = {
        name:'Fazer Login',
        to:'/'
    };
    return (
    <SucessMsg 
        title="Cadastro concluído" 
        description="Agora você faz parte da plataforma da Proffy. Tenha uma ótima experiência"
        button={btn}
    />);
}

export default RegisterSucess;