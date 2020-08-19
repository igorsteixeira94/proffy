import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg';

import "./styles.css";
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';
import HeaderFix from '../../components/HeaderFix';
import { phoneMask, moneyMask } from '../../utils/mask';

function TeacherForm() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [bio, setBio] = useState('');
  const [whatsapp, setWhatsapp] = useState('(  ) _  ____ - ____');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('R$ 0,00');


  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      alert('Cadastro realizado com sucesso!');

      history.push('/');

    }).catch(() => {
      alert('Erro no cadastro!');
    });
  }

  function handleChangeWhatsapp(value: string) {
    setWhatsapp(phoneMask(value));
  }
  function handleChangeCost(value: string) {
    setCost(moneyMask(value));
  }

  function setScheduleItemValue(position: number, field: string, value: string) {
    const newArray = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });

    setScheduleItems(newArray);
  }

  return (
    <div id="page-teacher-form" className="container">
      <HeaderFix title="Dar aula" />
      <PageHeader
        title="Que incrível que você quer dar aulas"
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Seus dados</legend>

            <section id="profile">
              <div id="profile-avatar">
                <img src="https://avatars1.githubusercontent.com/u/47749249?s=460&u=9c6deccd060caa4aa48381692fda430ab15af8de&v=4" alt="Igor" />
                <div>
                  <h3>Igor Rodrigues</h3>
                  <small>Programação</small>
                </div>
              </div>
              <div>
                <Input
                  name="whatsapp"
                  label="Whatsapp"
                  value={whatsapp}
                  onChange={(e) => { handleChangeWhatsapp(e.target.value) }}
                />
              </div>
            </section>


            <Textarea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => { setBio(e.target.value) }}
            />

          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name="subject"
              label="Matéria"
              value={subject}
              onChange={(e) => { setSubject(e.target.value) }}
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
            <Input
              name="cost"
              label="Custo da sua hora por aula"
              value={cost}
              onChange={(e) => { handleChangeCost(e.target.value) }}
            />

          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className="schedule-item">
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    value={scheduleItem.week_day}
                    onChange={e => { setScheduleItemValue(index, 'week_day', e.target.value) }}
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
                    name="from"
                    label="Das"
                    value={scheduleItem.from}
                    onChange={e => { setScheduleItemValue(index, 'from', e.target.value) }}

                  />
                  <Input
                    type="time"
                    name="to"
                    label="Até"
                    value={scheduleItem.to}
                    onChange={e => { setScheduleItemValue(index, 'to', e.target.value) }}

                  />

                </div>
              )
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>

    </div>
  );
}

export default TeacherForm;