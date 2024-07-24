import React from 'react';
import '../styles/App.css'; // Importa el archivo CSS

const MainPage = () => {
    return (
        <div className="main-page">
            <section className="hero">
                <h1>Bienvenidos a Nuestro Restaurante</h1>
                <p>Disfruta de los mejores platos y experiencias.</p>
                <button>Descubre Más</button>
            </section>
            {/* Agregar más secciones aquí */}
        </div>
    );
};

export default MainPage;
