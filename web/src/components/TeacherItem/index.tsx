import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import "./styles.css";
import api from '../../services/api';

export interface Teacher {
  id: number,
  avatar: string,
  bio: string,
  cost: number,
  name: string,
  subject: string,
  whatsapp: string

};

interface TeacherItemProps {
  teacher: Teacher;
}


const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>
      <p>
        {teacher.bio}
      </p>
      <footer>
        <p>
          Preço/hora
      <strong>{teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/55${teacher.whatsapp}?text=Olá%20${teacher.name}%20gostaria%20de%20contratar%20a%20aula%20de%20${teacher.subject}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>

      </footer>
    </article>);
}

export default TeacherItem;