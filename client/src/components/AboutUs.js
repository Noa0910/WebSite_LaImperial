import React from 'react';
import '../styles/AboutUs.css'; // Asegúrate de que este archivo CSS existe
import valores from '../images/valores.jpg';
import overlayImg from '../images/AboutUs/fondo_about.png'; // Añade la ruta de la imagen sobrepuesta

const AboutUs = () => {
    return (
        <div className="main-container">
            <div className="about-us-container">
                <img src={overlayImg} alt="Imagen sobrepuesta" className="overlay-image" />
                <header className="about-us-header">
                    <h1>Sobre Nosotros</h1>
                    <p>Conoce nuestra historia, filosofía y el equipo detrás de la cocina.</p>
                </header>
                <section className="about-us-content">
                    <div className="about-us-section">
                        <div className="about-us-text-container">
                            <h2>Nuestros Valores</h2>
                            <p>En nuestro restaurante, nos enorgullece ofrecer un servicio excelente, utilizando ingredientes frescos y locales. Valoramos la tradición y la autenticidad en cada plato que servimos.</p>
                        </div>
                        <div className="about-us-image">
                            <img src={valores} alt="Nuestros Valores" />
                        </div>
                    </div>
                    <div className="about-us-section reversed">
                        <div className="about-us-text-container">
                            <h2>Nuestra Historia</h2>
                            <p>Desde nuestros humildes comienzos hasta convertirnos en un referente de la gastronomía colombiana, nuestra historia está llena de pasión y dedicación.</p>
                        </div>
                        <div className="about-us-image">
                            <img src={valores} alt="Nuestra Historia" />
                        </div>
                    </div>
                </section>
                <div className="about-us-radio">
                    <h2>Escucha Nuestra Emisora</h2>
                    <div className="radio-content">
                        <a href="https://radio.example.com" className="radio-link">Escuchar Ahora</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
