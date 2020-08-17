import React from 'react';
import SucessMsg from '../../components/SucessMsg';

function ResetPassSucess (){
    return (
    <SucessMsg 
        title="Redefinição enviada" 
        description="Boa, agora é só checar o e-mail que foi enviado para você
        redefinir sua senha e aproveitar os estudos."
    />);
}

export default ResetPassSucess;