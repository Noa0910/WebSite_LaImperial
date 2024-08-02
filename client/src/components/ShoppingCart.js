// src/components/ShoppingCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
    const { cart, removeFromCart, decreaseQuantity, addToCart, getCartTotal } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="shopping-cart-container">
                <h1>Carrito de Compras</h1>
                <p>El carrito está vacío</p>
            </div>
        );
    }

    return (
        <div className="shopping-cart-container">
            <h1>Carrito de Compras</h1>
            <ul className="cart-items">
                {cart.map(product => (
                    <li key={product._id} className="cart-item">
                        <h3>{product.title}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <div className="quantity-controls">
                            <button onClick={() => decreaseQuantity(product._id)}>-</button>
                            <span className="quantity">{product.quantity}</span>
                            <button onClick={() => addToCart(product)}>+</button>
                        </div>
                        <button onClick={() => removeFromCart(product._id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <h2>Total: ${getCartTotal().toFixed(2)}</h2>
            </div>
        </div>
    );
};

export default ShoppingCart;
