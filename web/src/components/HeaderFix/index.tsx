import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';

import './styles.css';

interface HeaderFixProps {
    title: string;
}

const HeaderFix: React.FC<HeaderFixProps> = ({ title }) => {
    return (
        <div className="header-fix">
            <div id="header-content">
                <Link to="/" id="btn-back">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <small>{title}</small>
                <img src={logoImg} alt="Proffy" />
            </div>

        </div>
    );
}

export default HeaderFix;