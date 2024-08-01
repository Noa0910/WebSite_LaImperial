import React from 'react';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
    // Obtener el carrito de compras desde localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Calcular el total del carrito
    const getTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="shopping-cart-container">
            <header className="shopping-cart-header">
                <h1>Carrito de Compras</h1>
                <a href="/">Volver al Menú</a>
            </header>
            <section className="shopping-cart-items">
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito.</p>
                ) : (
                    <ul>
                        {cart.map(item => (
                            <li key={item.id} className="shopping-cart-item">
                                {/* Usa una imagen de marcador de posición si no tienes una imagen específica */}
                                <img src={item.image ? `/images/${item.image}` : '/images/placeholder.png'} alt={item.title} />
                                <div className="item-details">
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <p>${item.price.toFixed(2)} x {item.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                <div className="cart-total">
                    <h2>Total: ${getTotal()}</h2>
                </div>
                <button className="checkout-button">Realizar Pedido</button>
            </section>
        </div>
    );
};

export default ShoppingCart;
