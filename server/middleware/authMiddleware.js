const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.verifyToken = (req, res, next) => {
    const token = req.headers['x-auth-token'];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        if (err) return res.status(400).json({ message: 'Invalid token' });
        req.userId = decoded.id;
        next();
    });
};

exports.verifyAdmin = async (req, res, next) => {
    try {
        const user = await User.findById(req.userId);
        if (user.role !== 'admin') return res.status(403).json({ message: 'Access forbidden' });
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error verifying admin' });
    }
};
