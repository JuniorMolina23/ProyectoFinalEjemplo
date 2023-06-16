const User = require('../models/user');

const userController = {
  createUser: (req, res) => {
    const userData = {
      name: req.body.name,
      email: req.body.email,
    };

    User.create(userData, (error, result) => {
      if (error) {
        // Manejar el error de guardar el usuario
        res.status(500).json({ error: 'Error al guardar el usuario' });
      } else {
        // Usuario guardado correctamente
        res.status(201).json({ message: 'Usuario guardado correctamente' });
      }
    });
  },
};

module.exports = userController;
