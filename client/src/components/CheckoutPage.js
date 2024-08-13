// src/components/CheckoutPage.js
import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/authContext';
import '../styles/CheckoutPage.css';

const CheckoutPage = () => {
    const { cart, getCartTotal } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        name: user ? user.name : '',
        phone: user ? user.phone : '',
        address: user ? user.address : '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Lógica para enviar el pedido al backend
        try {
            const response = await fetch('/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    items: cart,
                    total: getCartTotal(),
                    ...formData,
                }),
            });

            if (response.ok) {
                alert('Pedido realizado con éxito');
                // Redirigir al usuario o limpiar el carrito
            } else {
                alert('Error al realizar el pedido');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="phone">Teléfono</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="address">Dirección</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Realizar Pedido</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
