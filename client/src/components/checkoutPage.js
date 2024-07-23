import React, { useState } from 'react';

const CheckoutPage = () => {
    const [form, setForm] = useState({
        name: '',
        address: '',
        phone: '',
        items: []
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = `Pedido de ${form.name}\nDirección: ${form.address}\nTeléfono: ${form.phone}\n\nItems:\n${form.items.join('\n')}`;
        window.open(`https://wa.me/<YOUR_PHONE_NUMBER>?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div>
            <h1>Checkout</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
                <input type="text" name="address" placeholder="Dirección" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange} required />
                <button type="submit">Hacer Pedido</button>
            </form>
        </div>
    );
};

export default CheckoutPage;
