import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        console.log('Añadiendo al carrito:', product);  // Para depuración
        setCart((prevCart) => {
            const productIndex = prevCart.findIndex(item => item._id === product._id);

            if (productIndex >= 0) {
                const newCart = [...prevCart];
                newCart[productIndex].quantity += 1;
                return newCart;
            } else {
                // Asegúrate de que el objeto 'product' tenga todas las propiedades necesarias
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
                    return prevCart.filter(product => product._id !== productId);
                }
            }
            return prevCart;
        });
    };

    const getCartTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0);
    };

    const getCartItemCount = () => {
        return cart.reduce((count, product) => count + product.quantity, 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, getCartTotal, getCartItemCount }}>
            {children}
        </CartContext.Provider>
    );
};
