// routes/api.js
const express = require('express');
const router = express.Router();
const authRoutes = require('../routes/authRoutes');
const userRoutes = require('../routes/userRoutes');
const productRoutes = require('../routes/productRoutes');

router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);

module.exports = router;
