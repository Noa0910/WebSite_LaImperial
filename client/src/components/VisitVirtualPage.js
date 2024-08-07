import React from 'react';
import '../styles/VisitVirtualPage.css'; // Asegúrate de crear este archivo CSS

const VisitVirtualPage = () => {
    return (
        <div className="visit-virtual-page">
            <header className="header">
                <h1>Explora La Imperial</h1>
                <p>Descubre nuestros eventos, restaurante, promociones y emisora.</p>
            </header>
            <section className="sections">
                <div className="section">
                    <h2>Eventos</h2>
                    <p>Conoce nuestros eventos especiales y conciertos.</p>
                </div>
                <div className="section">
                    <h2>Restaurante</h2>
                    <p>Explora nuestro menú y platos destacados.</p>
                </div>
                <div className="section">
                    <h2>Promociones</h2>
                    <p>Entérate de las últimas promociones y ofertas.</p>
                </div>
                <div className="section">
                    <h2>Emisora</h2>
                    <p>Escucha nuestra emisora en vivo y conoce más sobre nosotros.</p>
                </div>
            </section>
        </div>
    );
};

export default VisitVirtualPage;
