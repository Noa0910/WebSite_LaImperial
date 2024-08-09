const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    items: [{
        product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        quantity: { type: Number, required: true },
        name: { type: String },
        price: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['solicitada', 'enviada', 'cancelada'], default: 'solicitada' }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);
