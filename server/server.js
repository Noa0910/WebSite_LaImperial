const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000; // Puedes cambiar el puerto si es necesario

// Middleware para manejar JSON
app.use(express.json());

// Conectar a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/mi-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));

// Definir una ruta simple
app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
