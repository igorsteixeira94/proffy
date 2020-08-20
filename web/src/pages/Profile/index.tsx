import React, { useState } from 'react';
import HeaderFix from '../../components/HeaderFix';
import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Textarea from '../../components/TextArea';

import warningIcon from '../../assets/images/icons/warning.svg';
import cameraIcon from '../../assets/images/icons/camera.svg';

import './styles.css'
import { phoneMask, moneyMask } from '../../utils/mask';
function Profile() {
    const [img, setImg] = useState("https://avatars1.githubusercontent.com/u/47749249?s=460&u=9c6deccd060caa4aa48381692fda430ab15af8de&v=4");
    const [whatsapp, setWhatsapp] = useState('(  ) _  ____ - ____');
    const [cost, setCost] = useState('R$ 0,00');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {
        setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }])
    }
    function handleChangeWhatsapp(value: string) {
        setWhatsapp(phoneMask(value));
    }
    function handleChangeCost(value: string) {
        setCost(moneyMask(value));
    }

    function handleImageProfile(e: React.ChangeEvent<HTMLInputElement> | any) {
        e.preventDefault();
        const file = e?.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => { setImg(e.target?.result as string) };

            reader.readAsDataURL(file);
        }

    }
    return (
        <div id="page-profile-form" className="container">
            <HeaderFix title="Meu Perfil" />
            <PageHeader>
                <div id="profile">
                    <div id="profile-avatar">
                        <img src={img} alt="Foto do Perfil" />
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={(e) => handleImageProfile(e)}
                        />
                        <label htmlFor="image"><img src={cameraIcon} alt="Camera" /></label>
                    </div>
                    <h3>Igor Rodrigues</h3>
                    <span>Geografia</span>
                </div>
            </PageHeader>

            <main>
                <form >
                    <fieldset>
                        <legend>Seus dados</legend>

                        <section id="profile">
                            <Input
                                name="nome"
                                label="Nome"
                            />
                            <Input
                                name="sobrenome"
                                label="Sobrenome"
                            />
                            <Input
                                name="email"
                                label="E-mail"
                            />
                            <Input
                                name="whatsapp"
                                label="Whatsapp"
                                value={whatsapp}
                                onChange={(e) => { handleChangeWhatsapp(e.target.value) }}
                            />
                        </section>


                        <Textarea
                            name="bio"
                            label="Biografia"

                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
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
                                <div className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"

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


                                    />
                                    <Input
                                        type="time"
                                        name="to"
                                        label="Até"


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

    )
}

export default Profile;