import React from 'react';
import SucessMsg from '../../components/SucessMsg';

function TeacherFormSucess (){
    const btn = {
        name:'Voltar',
        to:'/landing'
    }
    return (
    <SucessMsg 
        title="Cadastro salvo" 
        description="Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp."
        button={btn}
    />);
}

export default TeacherFormSucess;