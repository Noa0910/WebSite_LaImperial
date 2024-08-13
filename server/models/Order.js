// server/models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    items: [{
        type: Object,
        required: true
    }],
    total: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: 'Solicitado'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Order', orderSchema);
