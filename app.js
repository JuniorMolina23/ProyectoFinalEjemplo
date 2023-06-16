const express = require('express');
const app = express();
const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());

// Rutas de usuario
app.use('/api', userRoutes);
app.use('/', userRoutes);

// Resto de la configuración de tu aplicación

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor en funcionamiento en el puerto 3000');
});