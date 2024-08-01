// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api'); // Asegúrate de que esta ruta sea correcta
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('PORT:', process.env.PORT);

app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/api', apiRoutes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log('Error al conectar a la base de datos:', err));

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
