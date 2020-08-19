import React, { useState, FormEvent } from 'react';


import "./styles.css";
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';
import HeaderFix from '../../components/HeaderFix';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeek_day] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);

  }


  return (
    <div id="page-teacher-list" className="container">
      <HeaderFix title="Estudar"/>
      <PageHeader 
      title="Estes são os proffys disponíveis"
      emoji="&#129299;"
      message={[0,' ','Proffys !']}
      >
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciência', label: 'Ciência' },
              { value: 'Física', label: 'Física' },
              { value: 'História', label: 'História' },
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Geografia', label: 'Geografia' },

            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={e => setWeek_day(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={e => setTime(e.target.value)}
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>
      <main>
        {
          teachers.length !== 0 ? teachers.map((teacher: Teacher) => {
             return <TeacherItem key={teacher.id} teacher={teacher}></TeacherItem>
          }) :  <p id="teacher-zero">Nenhum professor encontrado com sua pesquisa.</p>

        }

      </main>
    </div>
  );
}

export default TeacherList;