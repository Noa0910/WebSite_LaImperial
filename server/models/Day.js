const mongoose = require('mongoose');

const daySchema = new mongoose.Schema({
    day: { type: String, required: true },
    firstMenu: { type: String, required: true },
    secondMenu: { type: String },
    price: { type: Number, required: true }
}, { collection: 'menu' }); // Especifica el nombre de la colección

module.exports = mongoose.model('Day', daySchema);
