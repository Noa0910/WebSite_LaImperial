import React from 'react';
import '../styles/Menu.css';

const MenuPage = () => {
    const products = {
        panaderia: [
            { id: 1, image: 'placeholder.png', title: 'Pan de Campo', description: 'Pan fresco con corteza crujiente.', price: 2.00 },
            { id: 2, image: 'placeholder.png', title: 'Pan Integral', description: 'Pan integral con semillas.', price: 2.50 }
        ],
        almuerzos: [
            { id: 1, image: 'placeholder.png', title: 'Ensalada de Pollo', description: 'Ensalada fresca con pollo a la parrilla.', price: 7.00 },
            { id: 2, image: 'placeholder.png', title: 'Sopa de Lentejas', description: 'Sopa caliente de lentejas con vegetales.', price: 5.00 }
        ],
        desayunos: [
            { id: 1, image: 'placeholder.png', title: 'Huevos Revueltos', description: 'Huevos revueltos con tostadas.', price: 4.00 },
            { id: 2, image: 'placeholder.png', title: 'Panqueques', description: 'Panqueques esponjosos con miel.', price: 5.50 }
        ],
        bebidas: [
            { id: 1, image: 'placeholder.png', title: 'Jugo de Naranja', description: 'Jugo fresco de naranja.', price: 3.00 },
            { id: 2, image: 'placeholder.png', title: 'Café', description: 'Café negro recién hecho.', price: 2.00 }
        ],
        otros: [
            { id: 1, image: 'placeholder.png', title: 'Galletas', description: 'Galletas caseras de chocolate.', price: 1.50 },
            { id: 2, image: 'placeholder.png', title: 'Brownie', description: 'Brownie de chocolate con nueces.', price: 2.00 }
        ]
    };

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.title} añadido al carrito`);
    };

    return (
        <div className="menu-container">
            <header className="menu-header">
                <h1 className="menu-title">Menú</h1>
            </header>
            <section className="menu-sections">
                {Object.keys(products).map(section => (
                    <div className="menu-section" key={section}>
                        <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
                        <div className="product-grid">
                            {products[section].map(product => (
                                <div className="product-card" key={product.id}>
                                    <img src={require(`../images/${product.image}`)} alt={product.title} />
                                    <div className="product-info">
                                        <h3 className="product-title">{product.title}</h3>
                                        <p className="product-description">{product.description}</p>
                                        <p className="product-price">${product.price.toFixed(2)}</p>
                                        <button className="add-to-cart-button" onClick={() => addToCart(product)}>Añadir al carrito</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MenuPage;
