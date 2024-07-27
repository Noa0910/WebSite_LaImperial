import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MainPage.css';
import image1 from '../images/carrusel/carrusel_1.jpg';
import image2 from '../images/carrusel/carrusel_2.jpg';
import image3 from '../images/carrusel/carrusel_3.jpg';

const MainPage = () => {
    return (
        <div className="main-page">
            <div className="central-content">
                <h1>Bienvenido a La Imperial del Quindío</h1>
                <p>
                    En La Imperial del Quindío, ofrecemos una experiencia culinaria única
                    con una variedad de platos tradicionales de la región del Quindío. 
                    Nuestra historia comenzó con el deseo de traer los sabores auténticos
                    de nuestra tierra a cada mesa, y hoy nos enorgullece compartir nuestra
                    pasión por la gastronomía con todos ustedes.
                </p>
                <Link to="/menu" className="menu-button">Ver Menú</Link>
            </div>
            <div className="placeholder-section">
                <h2>Galería de Imágenes</h2>
                <div id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={image1} className="d-block w-100" alt="Imagen 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={image2} className="d-block w-100" alt="Imagen 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={image3} className="d-block w-100" alt="Imagen 3" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="main-content">
                <div className="testimonials-section">
                    <h2>Testimonios de Clientes</h2>
                    <div className="testimonial">
                        <p>"¡Una experiencia maravillosa! La comida es auténtica y deliciosa. El servicio es excelente. Volveré pronto." - Ana María</p>
                    </div>
                    <div className="testimonial">
                        <p>"El mejor lugar para disfrutar de la gastronomía del Quindío. Recomiendo probar el plato del día." - Luis Fernando</p>
                    </div>
                    <div className="testimonial">
                        <p>"Ambiente acogedor y comida espectacular. Me encantó la visita y la atención del personal." - Marta Gómez</p>
                    </div>
                </div>
                <div className="map-section">
                    <h2>Nuestras Sedes</h2>
                    {/* Aquí puedes agregar un iframe o un componente de mapa */}
                    <iframe
                        title="Mapa de Sedes"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.715336685792!2d-76.52116158468226!3d3.4373860973577435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4a34d9f2b3d33d%3A0xf83308cfa2ef0f6c!2sCali%2C%20Valle%20del%20Cauca%2C%20Colombia!5e0!3m2!1ses!2sus!4v1656551512598!5m2!1ses!2sus"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
