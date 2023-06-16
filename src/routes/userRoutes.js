const express = require('express');
const router = express.Router();
const userController = require('..//controllers/userController');

// Ruta para crear un usuario
router.get('/', (req, res) => {
    res.send('Hola amigo');
  });
router.post('/users', userController.createUser);

module.exports = router;
