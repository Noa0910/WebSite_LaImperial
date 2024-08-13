// server/routes/api.js
const express = require('express');
const router = express.Router();
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const productRoutes = require('../routes/productRoutes');
const dayRoutes = require('../routes/days');
const orderRoutes = require('../routes/orderRoutes'); // Importa la nueva ruta

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/days', dayRoutes);
router.use('/orders', orderRoutes); // Añade la nueva ruta

module.exports = router;
