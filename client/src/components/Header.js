import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import '../styles/Header.css'; 
import logo from '../images/logo.jpg';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            {/* Barra de Navegación */}
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="navbar-brand-container">
                            <img src={logo} alt="Logo" className="logo-img" />
                            <span className="restaurant-name">La imperial del quindio</span>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/menu">Menú</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contacto</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/visitavirtual">Visita Virtual</Link>
                            </li>
                            <li className="nav-item separator"></li>
                            <li className="nav-item">
                                <button className="nav-link cart-button">
                                    <FaShoppingCart size={24} />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
