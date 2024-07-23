import React from 'react';

const MainPage = () => {
    return (
        <div className="main-page">
            <section className="hero">
                <h1>Bienvenidos a Nuestro Restaurante</h1>
                <p>Descubre nuestros platos exquisitos y promociones especiales.</p>
                <button>Ver Menú</button>
            </section>
            <section className="featured-dishes">
                <h2>Platos Destacados</h2>
                <div className="dishes-list">
                    {/* Aquí puedes mapear los platos destacados */}
                </div>
            </section>
            <section className="promotions">
                <h2>Promociones Actuales</h2>
                <div className="promotions-list">
                    {/* Aquí puedes mapear las promociones actuales */}
                </div>
            </section>
        </div>
    );
};

export default MainPage;
