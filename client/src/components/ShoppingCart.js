// src/components/ShoppingCart.js
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import '../styles/ShoppingCart.css';

const ShoppingCart = () => {
    const { cart, removeFromCart, decreaseQuantity, addToCart, getCartTotal } = useContext(CartContext);
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    if (cart.length === 0) {
        return (
            <div className="shopping-cart-container">
                <h1>Carrito de Compras</h1>
                <div className="empty-cart-message">
                    <FaShoppingCart className="empty-cart-icon" />
                    <p>El carrito está vacío</p>
                    <p>Añade productos a tu carrito para verlos aquí.</p>
                </div>
                <button className="checkout-button" disabled>Realizar Pedido</button>
            </div>
        );
    }

    return (
        <div className="shopping-cart-container">
            <h1>Carrito de Compras</h1>
            <ul className="cart-items">
                {cart.map(product => (
                    <li key={product._id} className="cart-item">
                        <h3>{product.title || 'Menú del Día'}</h3>
                        <p>${product.price.toFixed(2)}</p>
                        <p>{product.description || 'Deliciosa comida colombiana'}</p>
                        <div className="quantity-controls">
                            <button onClick={() => decreaseQuantity(product._id)}>-</button>
                            <span className="quantity">{product.quantity}</span>
                            <button onClick={() => addToCart(product)}>+</button>
                        </div>
                        <button className="remove-button" onClick={() => removeFromCart(product._id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
            <div className="cart-total">
                <h2>Total: ${getCartTotal().toFixed(2)}</h2>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>Realizar Pedido</button>
        </div>
    );
};

export default ShoppingCart;
