import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

function TeacherItem() {
  return (<article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/47749249?s=460&u=9c6deccd060caa4aa48381692fda430ab15af8de&v=4" alt="Foto perfil" />
      <div>
        <strong>Igor Rodrigues</strong>
        <span>Química</span>
      </div>
    </header>
    <p>Entusiasta das melhores tecnologias de química avançada.
    <br />
      <br />
      Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais 200.000 pessoas já passaram por uma das minhas explosões.
  </p>
    <footer>
      <p>
        Preço/hora
      <strong>R$ 80,00</strong>
      </p>
      <button>
        <img src={whatsappIcon} alt="Whatsapp" />
    Entrar em contato
    </button>

    </footer>
  </article>);
}

export default TeacherItem;