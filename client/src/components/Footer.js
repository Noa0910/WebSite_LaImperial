import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="contact-info">
                    <h3>Contactanos</h3>
                    <p>Dirección: Calle Ejemplo #123, Cali, Colombia</p>
                    <p>Teléfono: +57 123 456 789</p>
                    <p>Email: contacto@imperialdelquindio.com</p>
                </div>
                <div className="hours">
                    <h3>Horarios de Atención</h3>
                    <p>Lunes a Viernes: 10:00 AM - 10:00 PM</p>
                    <p>Sábados: 11:00 AM - 11:00 PM</p>
                    <p>Domingos: 12:00 PM - 9:00 PM</p>
                </div>
                <div className="footer-links">
                    <h3>Enlaces</h3>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/menu">Menú</Link></li>
                        <li><Link to="/about">Sobre Nosotros</Link></li>
                        <li><Link to="/contact">Contacto</Link></li>
                        <li><Link to="/visitavirtual">Visita Virtual</Link></li>
                    </ul>
                </div>
                <div className="newsletter">
                    <h3>Inscríbete en nuestro boletín</h3>
                    <form>
                        <input type="email" placeholder="Tu correo electrónico" required />
                        <button type="submit">Suscribirse</button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 La Imperial del Quindío. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
