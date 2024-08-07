const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api'); // Asegúrate de que esta ruta sea correcta
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Configuración de Cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.use(cors());
app.use(bodyParser.json()); // Middleware para procesar cuerpos JSON

// Usar las rutas de API
app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log('Error al conectar a la base de datos:', err));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
