import React from 'react';
import '../styles/AboutUs.css'; // Asegúrate de crear este archivo CSS

const AboutUs = () => {
    return (
        <div className="about-us-container">
            <header className="about-us-header">
                <h1>Sobre Nosotros</h1>
                <p>Conoce nuestra historia, filosofía y el equipo detrás de la cocina.</p>
            </header>
            <section className="about-us-content">
                <div className="about-us-section">
                    <div className="about-us-text">
                        <h2>Nuestros Valores</h2>
                        <p>En nuestro restaurante, nos enorgullece ofrecer un servicio excelente, utilizando ingredientes frescos y locales. Valoramos la tradición y la autenticidad en cada plato que servimos.</p>
                    </div>
                    <div className="about-us-image">
                        <img src="/path/to/values-image.jpg" alt="Nuestros Valores" />
                    </div>
                </div>
                <div className="about-us-section reversed">
                    <div className="about-us-text">
                        <h2>Nuestra Historia</h2>
                        <p>Desde nuestros humildes comienzos hasta convertirnos en un referente de la gastronomía colombiana, nuestra historia está llena de pasión y dedicación por la cocina tradicional.</p>
                    </div>
                    <div className="about-us-image">
                        <img src="/path/to/history-image.jpg" alt="Nuestra Historia" />
                    </div>
                </div>
                <div className="about-us-section">
                    <div className="about-us-text">
                        <h2>Nuestra Filosofía</h2>
                        <p>Creemos en ofrecer comida de calidad con ingredientes frescos y un servicio cálido. Cada plato es preparado con amor y cuidado para ofrecer una experiencia culinaria auténtica.</p>
                    </div>
                    <div className="about-us-image">
                        <img src="/path/to/philosophy-image.jpg" alt="Nuestra Filosofía" />
                    </div>
                </div>
                <div className="about-us-section reversed">
                    <div className="about-us-text">
                        <h2>Conoce al Equipo</h2>
                        <p>Nuestro equipo está compuesto por chefs experimentados y personal dedicado que trabaja juntos para ofrecerte lo mejor de nuestra cocina.</p>
                    </div>
                    <div className="about-us-image">
                        <img src="/path/to/team-image.jpg" alt="Conoce al Equipo" />
                    </div>
                </div>
            </section>
            <section className="about-us-radio">
                <h2>Escúchanos en la Radio</h2>
                <div className="radio-content">
                    <p>¡No te pierdas nuestro programa en la emisora local! Hablamos de recetas, eventos y todo lo relacionado con nuestra pasión por la cocina.</p>
                    <a href="https://link-a-la-emisora.com" target="_blank" rel="noopener noreferrer" className="radio-link">Escucha nuestra emisora</a>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
