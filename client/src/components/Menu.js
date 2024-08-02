import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Slider from 'react-slick'; // Importa el componente Slider de react-slick
import '../styles/Menu.css';
import 'slick-carousel/slick/slick.css'; // Estilos de slick-carousel
import 'slick-carousel/slick/slick-theme.css'; // Estilos del tema de slick-carousel

const Menu = () => {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useContext(CartContext);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const productsByCategory = data.reduce((acc, product) => {
                    if (!acc[product.category]) {
                        acc[product.category] = [];
                    }
                    acc[product.category].push(product);
                    return acc;
                }, {});
                setProducts(productsByCategory);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
                setError('Error al obtener los productos.');
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    // Configuración del carrusel
    const getSliderSettings = (productCount) => {
        const slidesToShow = Math.min(productCount, 6);
        return {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: slidesToShow < 6 ? slidesToShow : 6, // Muestra hasta 6 productos
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
        };
    };

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1 className="menu-title">Menú</h1>
            </header>
            {loading ? (
                <p>Cargando productos...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <section className="menu-sections">
                    {Object.keys(products).length === 0 ? (
                        <p>No hay productos disponibles</p>
                    ) : (
                        Object.keys(products).map(section => {
                            const productList = products[section];
                            const productCount = productList.length;
                            return (
                                <div className="menu-section" key={section}>
                                    <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
                                    {productCount >= 2 ? (
                                        <Slider {...getSliderSettings(productCount)}>
                                            {productList.slice(0, 6).map(product => (
                                                <div className="product-card" key={product._id}>
                                                    <div className="product-image">
                                                        <img src={product.image} alt={product.title} />
                                                    </div>
                                                    <div className="product-info">
                                                        <h3 className="product-title">{product.title}</h3>
                                                        <p className="product-description">{product.description}</p>
                                                        <p className="product-price">${product.price.toFixed(2)}</p>
                                                        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Añadir al carrito</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>
                                    ) : (
                                        <div className="product-list">
                                            {productList.map(product => (
                                                <div className="product-card" key={product._id}>
                                                    <div className="product-image">
                                                        <img src={product.image} alt={product.title} />
                                                    </div>
                                                    <div className="product-info">
                                                        <h3 className="product-title">{product.title}</h3>
                                                        <p className="product-description">{product.description}</p>
                                                        <p className="product-price">${product.price.toFixed(2)}</p>
                                                        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Añadir al carrito</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })
                    )}
                </section>
            )}
        </div>
    );
};

export default Menu;
