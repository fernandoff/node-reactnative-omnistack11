import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register(){
    return (
    <dev className="register-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                
                <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Não tenho cadastro
                </Link>
            </section>
        </div>
        <form>
            <input placeholder="Nome da ONG"/>
            <input type="email" placeholder="E-mail"/>
            <input placeholder="WhatsApp"/>
            <div className="input-group">
                <input placeholder="Cidade"/>
                <input placeholder="UF"/>
            </div>
        </form>
    </dev>
    );
}