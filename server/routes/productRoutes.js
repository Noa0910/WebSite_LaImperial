// server/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Ruta para obtener todos los productos con paginación y filtrado
router.get('/', async (req, res) => {
    const { page = 1, limit = 10, search = '' } = req.query;
    const query = search ? { name: new RegExp(search, 'i') } : {};

    try {
        const products = await Product.find(query)
            .skip((page - 1) * limit)
            .limit(parseInt(limit));
        const totalProducts = await Product.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / limit);
        res.json({ products, totalPages });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch products' });
    }
});

// Ruta para agregar un nuevo producto
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: 'Failed to add product' });
    }
});

// Ruta para actualizar un producto
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update product' });
    }
});

// Ruta para eliminar un producto
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete product' });
    }
});

module.exports = router;
