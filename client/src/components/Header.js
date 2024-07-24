import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap
import '../styles/Header.css'; 
import logo from '../images/logo.png' ;


const Header = () => {
    return (
        <>
            {/* Encabezado Superior */}
            <header className="top-bar">
                <div className="icon-container">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                </div>
                <div className="logo-img">
                    <img src={logo} alt="Logo del Restaurante" />
                </div>
                <div className="icon-container">
                    <a href="/cart">
                        <FaShoppingCart />
                    </a>
                </div>
            </header>

            {/* Barra de Navegación */}
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid">
    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
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
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
