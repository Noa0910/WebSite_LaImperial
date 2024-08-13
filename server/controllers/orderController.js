// server/controller/orderController.js
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            ...req.body,
            status: 'Solicitado', // Establece el estado inicial del pedido
            date: new Date()
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error al crear el pedido:', error);
        res.status(500).json({ error: 'Error al crear el pedido' });
    }
};
