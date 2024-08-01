// server/controllers/authController.js

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Registro de usuario
exports.register = async (req, res) => {
    const { username, password, name, phone, role } = req.body; // Añadido 'role'

    try {
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuario ya existe' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear nuevo usuario con rol proporcionado o por defecto
        const newUser = new User({
            username,
            password: hashedPassword,
            name,
            phone,
            role: role && ['admin', 'client'].includes(role) ? role : 'client'  // Usa el rol proporcionado si es válido, o 'client' por defecto
        });
        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el registro' });
    }
};

// Inicio de sesión
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Verificar usuario
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Verificar contraseña
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Crear y asignar un token JWT, incluyendo el rol en el payload
        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el inicio de sesión' });
    }
};
