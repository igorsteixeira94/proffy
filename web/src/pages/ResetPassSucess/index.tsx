import React from 'react';
import SucessMsg from '../../components/SucessMsg';

function ResetPassSucess (){
    const btn = {
        name:'Fazer Login',
        to:'/'
    };
    return (
    <SucessMsg 
        title="Redefinição enviada" 
        description="Boa, agora é só checar o e-mail que foi enviado para você
        redefinir sua senha e aproveitar os estudos."
        button={btn}
    />);
}

export default ResetPassSucess;