import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';
import mainImage from '../images/mainPage/fondo_principal3.png';

const MainPage = () => {
    return (
        <div className="main-page" style={{backgroundImage: `url(${mainImage})`}}>
            <div className="content">
                <h1 className="title">Gastronomía colombiana</h1>
                <p className="description">
                    En La Imperial del Quindío, ofrecemos una experiencia culinaria única con una variedad de platos tradicionales de la región del Quindío. Nuestra historia comenzó con el deseo de traer los sabores auténticos de nuestra tierra a cada mesa, y hoy nos enorgullece compartir nuestra pasión por la gastronomía con todos ustedes.
                </p>
            </div>
            <div className="button-container">
                <Link to="/menu" className="button">
                    <i className="fas fa-utensils"></i> Menú
                </Link>
                <Link to="/contacto" className="button">
                    <i className="fas fa-envelope"></i> Contacto
                </Link>
                <Link to="/otro" className="button">
                    <i className="fas fa-info-circle"></i> Otra Sección
                </Link>
            </div>
        </div>
    );
};

export default MainPage;