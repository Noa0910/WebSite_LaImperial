const express = require('express');
const router = express.Router();
const authRoutes = require('../routes/authRoutes'); // Asegúrate de que esta ruta sea correcta
const userRoutes = require('../routes/userRoutes');

router.use('/auth', authRoutes);  // Esto monta las rutas de autenticación en /api/auth
router.use('/users', userRoutes); // Esto monta las rutas de usuarios en /api/users

module.exports = router;
