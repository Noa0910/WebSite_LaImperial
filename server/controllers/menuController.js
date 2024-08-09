// server/controller/menuController.js
const Day = require('../models/Day');

// Obtener el menú diario
// En el archivo server/controller/menuController.js
exports.getDailyMenu = async (req, res) => {
    try {
        const menuItems = await Day.find();
        console.log('Fetched menu items:', menuItems); // Depuración
        res.json(menuItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Agregar un nuevo ítem del menú
exports.addMenuItem = async (req, res) => {
    const { day, firstMenu, secondMenu, price } = req.body;
    try {
        const newItem = new Day({ day, firstMenu, secondMenu, price });
        await newItem.save();
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un ítem del menú
exports.updateMenuItem = async (req, res) => {
    const { id } = req.params;
    const { day, firstMenu, secondMenu, price } = req.body;
    try {
        const updatedItem = await Day.findByIdAndUpdate(
            id,
            { day, firstMenu, secondMenu, price },
            { new: true }
        );
        res.json(updatedItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un ítem del menú
exports.deleteMenuItem = async (req, res) => {
    const { id } = req.params;
    try {
        await Day.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
