const express = require('express');
const router = express.Router();
const Day = require('../models/Day');

// Insertar un nuevo día
router.post('/', async (req, res) => {
    try {
        const newDay = new Day({
            day: req.body.day,
            firstMenu: req.body.firstMenu,
            secondMenu: req.body.secondMenu,
            description: req.body.description,
            price: req.body.price
        });

        const savedDay = await newDay.save();
        res.status(201).json(savedDay);
    } catch (err) {
        res.status(400).json({ message: 'Error al insertar el día: ' + err.message });
    }
});

// Obtener todos los días
router.get('/', async (req, res) => {
    try {
        const days = await Day.find();
        res.json(days);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener los días: ' + err.message });
    }
});

// Actualizar un día específico
router.patch('/:id', async (req, res) => {
    try {
        const day = await Day.findById(req.params.id);
        
        if (!day) {
            return res.status(404).json({ message: 'Día no encontrado' });
        }
        
        if (req.body.firstMenu != null) day.firstMenu = req.body.firstMenu;
        if (req.body.secondMenu != null) day.secondMenu = req.body.secondMenu;
        if (req.body.description != null) day.description = req.body.description;
        if (req.body.price != null) day.price = req.body.price;
        
        const updatedDay = await day.save();
        res.json(updatedDay);
    } catch (err) {
        res.status(400).json({ message: 'Error al actualizar el día: ' + err.message });
    }
});

// Eliminar un día específico
router.delete('/:id', async (req, res) => {
    try {
        const day = await Day.findByIdAndDelete(req.params.id);
        
        if (!day) {
            return res.status(404).json({ message: 'Día no encontrado' });
        }
        
        res.json({ message: 'Día eliminado' });
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar el día: ' + err.message });
    }
});

module.exports = router;
