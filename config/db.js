const mongoose = require('mongoose');
require('dotenv').config();  // Asegúrate de que dotenv se cargue

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {  // Usa la variable de entorno
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
