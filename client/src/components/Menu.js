import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Slider from 'react-slick';
import '../styles/Menu.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Menu = () => {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [dayMenu, setDayMenu] = useState({});
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

    useEffect(() => {
        const fetchDayMenu = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/days');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const menuByDay = data.reduce((acc, item) => {
                    acc[item.day] = item;
                    return acc;
                }, {});
                setDayMenu(menuByDay);
            } catch (error) {
                console.error('Error al obtener el menú del día:', error);
                setError('Error al obtener el menú del día.');
            }
        };
        fetchDayMenu();
    }, []);

    const getSliderSettings = () => {
        return {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            centerMode: false,
            variableWidth: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
    };

    const daysOfWeek = [
        { day: 'Lunes', menu: dayMenu['Lunes'] },
        { day: 'Martes', menu: dayMenu['Martes'] },
        { day: 'Miercoles', menu: dayMenu['Miercoles'] },
        { day: 'Jueves', menu: dayMenu['Jueves'] },
        { day: 'Viernes', menu: dayMenu['Viernes'] },
        { day: 'Sabado', menu: dayMenu['Sabado'] },
        { day: 'Domingo', menu: dayMenu['Domingo'] }
    ];

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1 className="menu-title">Menú</h1>
            </header>
            <section className="days-of-week">
                {daysOfWeek.map((item, index) => (
                    <div className="day-card" key={index}>
                        <h3>{item.day}</h3>
                        <p>{item.menu ? `Primer menú: ${item.menu.firstMenu}` : 'Menú no disponible'}</p>
                        <p>{item.menu && item.menu.secondMenu ? `Segundo menú: ${item.menu.secondMenu}` : ''}</p>
                        <p>{item.menu && item.menu.description ? `Descripción: ${item.menu.description}` : ''}</p>
                        <p>{item.menu ? `Precio: $${item.menu.price.toFixed(2)}` : ''}</p>
                        {item.menu && (
                            <button
                                className="add-to-cart-button"
                                onClick={() => addToCart(item.menu)}
                            >
                                Añadir al carrito
                            </button>
                        )}
                    </div>
                ))}
            </section>
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
                            return (
                                <div className="menu-section" key={section}>
                                    <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
                                    <Slider {...getSliderSettings()}>
                                        {productList.map(product => (
                                            <div className="product-card" key={product._id}>
                                                <div className="product-image">
                                                    <img src={product.image || '/path/to/placeholder.png'} alt={product.title || 'Producto'} />
                                                </div>
                                                <div className="product-info">
                                                    <h3 className="product-title">{product.title || 'Título del producto'}</h3>
                                                    <p className="product-description">{product.description || 'Descripción del producto'}</p>
                                                    <p className="product-price">${(product.price || 0).toFixed(2)}</p>
                                                    <button className="add-to-cart-button" onClick={() => addToCart(product)}>Añadir al carrito</button>
                                                </div>
                                            </div>
                                        ))}
                                    </Slider>
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