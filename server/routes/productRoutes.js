// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const cloudinary = require('cloudinary').v2; // Asegúrate de que Cloudinary esté correctamente configurado

// Ruta para obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para obtener un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Ruta para crear un nuevo producto
router.post('/', async (req, res) => {
    const { title, description, price, image, category } = req.body;

    if (!title || !description || !price || !category) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    // Verifica si se ha enviado una imagen
    let imageUrl = '';
    if (image) {
        try {
            // Subir la imagen a Cloudinary
            const result = await cloudinary.uploader.upload(image, {
                folder: 'products', // Opcional: carpeta en Cloudinary para organizar las imágenes
            });
            imageUrl = result.secure_url; // URL segura de la imagen en Cloudinary
        } catch (error) {
            return res.status(500).json({ message: 'Error al subir la imagen a Cloudinary' });
        }
    }

    try {
        const newProduct = new Product({
            title,
            description,
            price,
            image: imageUrl, // Usar la URL de la imagen subida
            category
        });

        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
