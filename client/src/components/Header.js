// client/src/components/Header.js

import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Header.css'; 
import logo from '../images/logo.jpg';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { AuthContext } from '../context/authContext';
import { CartContext } from '../context/CartContext';

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const { getCartItemCount } = useContext(CartContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        try {
            logout();
            navigate('/login');
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-brand-container">
                        <img src={logo} alt="Logo" className="logo-img" />
                        <span className="restaurant-name">La Imperial del Quindío</span>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/menu">Menú</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">Quienes Somos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contacto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/visitavirtual">Visita Virtual</Link>
                        </li>
                        <li className="nav-item separator"></li>
                        <li className="nav-item">
                            <Link className="nav-link cart-button" to="/cart">
                                <FaShoppingCart size={24} />
                                {getCartItemCount() > 0 && (
                                    <span className="cart-count">{getCartItemCount()}</span>
                                )}
                            </Link>
                        </li>
                        <li className="nav-item">
                            {user ? (
                                <div className="nav-link user-info">
                                    <FaUser 
                                        size={24} 
                                        className={`user-icon ${user ? 'user-icon-logged' : ''}`}
                                    />
                                    <span>Hola, {user.name}</span>
                                    <div className="dropdown-content">
                                        <button onClick={handleLogout}>Cerrar sesión</button>
                                    </div>
                                </div>
                            ) : (
                                <Link className="nav-link user-button" to="/login">
                                    <FaUser size={24} />
                                </Link>
                            )}
                        </li>
                        {user && user.role === 'admin' && (
                            <li className="nav-item">
                                <Link className="nav-link admin-button" to="/admin">
                                    Panel de Admin
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
