const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// Middleware para proteger las rutas
router.use(authMiddleware.verifyToken);

// Rutas para perfil de usuario
router.get('/profile', userController.getProfile); // Obtener perfil de usuario
router.put('/profile', userController.updateProfile); // Actualizar perfil de usuario

// Rutas protegidas para administradores
router.get('/users', authMiddleware.verifyAdmin, userController.getUsers); // Obtener lista de usuarios (admin)
router.delete('/users/:id', authMiddleware.verifyAdmin, userController.deleteUser); // Eliminar usuario (admin)
router.put('/users/:id', authMiddleware.verifyAdmin, userController.updateUser); // Actualizar usuario (admin)

module.exports = router;
