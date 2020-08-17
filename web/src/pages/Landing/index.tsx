import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import exitIcon from '../../assets/images/icons/exit.svg';

import './styles.css';
import api from '../../services/api';
function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, [totalConnections]);

  return (
    <div id="page-landing">
      <div id="page-landing-header">
        <div className="header-user container-landing">
          <div id="profile">
            <img src="https://avatars1.githubusercontent.com/u/47749249?s=460&u=9c6deccd060caa4aa48381692fda430ab15af8de&v=4" alt="Igor" />
            <small>Igor Rodrigues</small>
          </div>
          <Link to="/" id="btn-exit">
            <img src={exitIcon} alt="Sair" />
          </Link>
        </div>

        <div id="title-logo" className="container-landing">
          <div className="logo-container">
            <img src={logoImg} alt="Proffy" />
            <h2>Sua plataforma de estudos online.</h2>
          </div>

          <img src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </div>

      </div>
      <div id="page-landing-content" className="container-landing">
        <h2>Seja bem-vindo.<br /><strong>O que deseja fazer?</strong></h2>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
            </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
            </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões<br /> já realizadas {' '}
            <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>

    </div>

  );
}

export default Landing;