import React from 'react';
import '../styles/Contact.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import local1 from '../images/Contact/local.jpg';
import local2 from '../images/Contact/local.jpg';
import local3 from '../images/Contact/local.jpg';

const Contact = () => {
    return (
        <div className="contact-container">
            <h1>Contacto</h1>
            <p>Estamos aquí para atenderte. Puedes contactarnos a través de los siguientes medios:</p>

            <div className="contact-info">
                <div className="contact-item phone">
                    <h2>Teléfono</h2>
                    <p>(+57) 123 456 7890</p>
                </div>
                <div className="contact-item email">
                    <h2>Email</h2>
                    <p>contacto@imperialquindio.com</p>
                </div>
                <div className="contact-item address">
                    <h2>Dirección</h2>
                    <p>Calle Falsa 123, Cali, Colombia</p>
                </div>
            </div>

            <div className="locations">
                <h2>Nuestras Sedes</h2>
                <div className="locations-container">
                    <div className="location-card">
                        <img src={local1} alt="Sede 1" />
                        <h3>Sede 1</h3>
                        <p>Calle Real 456, Cali</p>
                    </div>
                    <div className="location-card">
                        <img src={local2} alt="Sede 2" />
                        <h3>Sede 2</h3>
                        <p>Avenida 123, Cali</p>
                    </div>
                    <div className="location-card">
                        <img src={local3} alt="Sede 3" />
                        <h3>Sede 3</h3>
                        <p>Plaza Central 789, Cali</p>
                    </div>
                </div>
            </div>

            <div className="social-media">
                <h2>Síguenos en nuestras redes sociales</h2>
                <a href="https://www.facebook.com" className="social-icon facebook" aria-label="Facebook"><FaFacebookF /></a>
                <a href="https://www.twitter.com" className="social-icon twitter" aria-label="Twitter"><FaTwitter /></a>
                <a href="https://www.instagram.com" className="social-icon instagram" aria-label="Instagram"><FaInstagram /></a>
                <a href="https://wa.me/1234567890" className="social-icon whatsapp" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>

            <div className="contact-form">
                <h2>Envíanos un mensaje</h2>
                <form action="/send" method="post">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    <input type="submit" value="Enviar" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
