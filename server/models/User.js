// server/models/User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    phone: { type: String },
    role: { 
        type: String, 
        enum: ['admin', 'client'], 
        default: 'client'  // Por defecto, los usuarios son clientes
    }
});

module.exports = mongoose.model('User', userSchema);
