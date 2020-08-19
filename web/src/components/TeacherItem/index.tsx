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
      <div id="schedule">
        <div id="week-day">
          <h6>Dia</h6>
          <span>Segunda</span>
        </div>
        <div id="hour">
          <h6>Horário</h6>
          <span>08h - 18h</span>
        </div>
      </div>
      <div id="schedule">
        <div id="week-day">
          <h6>Dia</h6>
          <span>Terça</span>
        </div>
        <div id="hour">
          <h6>Horário</h6>
          <span>08h - 18h</span>
        </div>
      </div>
      <div id="schedule">
        <div id="week-day">
          <h6>Dia</h6>
          <span>Quarta</span>
        </div>
        <div id="hour">
          <h6>Horário</h6>
          <span>-</span>
        </div>
      </div>
      <div id="schedule">
        <div id="week-day">
          <h6>Dia</h6>
          <span>Quinta</span>
        </div>
        <div id="hour">
          <h6>Horário</h6>
          <span>14h - 18h</span>
        </div>
      </div>
      <div id="schedule">
        <div id="week-day">
          <h6>Dia</h6>
          <span>Sexta</span>
        </div>
        <div id="hour">
          <h6>Horário</h6>
          <span>-</span>
        </div>
      </div>
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