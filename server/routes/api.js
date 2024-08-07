const express = require('express');
const router = express.Router();
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const productRoutes = require('../routes/productRoutes');
const dayRoutes = require('../routes/days'); // Asegúrate de que esta ruta sea correcta

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/days', dayRoutes);

module.exports = router;
