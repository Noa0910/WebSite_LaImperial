// src/context/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex(item => item._id === product._id);

            if (productIndex >= 0) {
                // Product already in cart, update quantity
                const newCart = [...prevCart];
                newCart[productIndex].quantity += 1;
                return newCart;
            } else {
                // New product, add to cart with quantity 1
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => {
            const newCart = prevCart.filter(product => product._id !== productId);
            return newCart;
        });
    };

    const decreaseQuantity = (productId) => {
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex(item => item._id === productId);

            if (productIndex >= 0) {
                const newCart = [...prevCart];
                if (newCart[productIndex].quantity > 1) {
                    newCart[productIndex].quantity -= 1;
                    return newCart;
                } else {
                    // If quantity is 1, remove the product from the cart
                    return prevCart.filter(product => product._id !== productId);
                }
            }
            return prevCart;
        });
    };

    const getCartTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, getCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};
