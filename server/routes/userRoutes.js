// server/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Asegúrate de que este archivo existe

// Middleware para proteger las rutas
router.use(authMiddleware.verifyToken);

// Rutas para gestión de usuarios
router.get('/profile', userController.getProfile); // Obtener perfil de usuario
router.put('/profile', userController.updateProfile); // Actualizar perfil de usuario

// Rutas protegidas para administradores
router.get('/users', (req, res, next) => {
    if (req.userRole !== 'admin') return res.status(403).json({ message: 'Access denied' });
    next();
}, userController.getUsers); // Obtener lista de usuarios (admin)

router.delete('/users/:id', (req, res, next) => {
    if (req.userRole !== 'admin') return res.status(403).json({ message: 'Access denied' });
    next();
}, userController.deleteUser); // Eliminar usuario (admin)

router.put('/users/:id', (req, res, next) => {
    if (req.userRole !== 'admin') return res.status(403).json({ message: 'Access denied' });
    next();
}, userController.updateUser); // Actualizar usuario (admin)

module.exports = router;
