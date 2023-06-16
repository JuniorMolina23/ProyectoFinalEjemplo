const mysql = require('mysql');

// Configurar la conexión a MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'junior23',
  database: 'db_test',
});

// Definir el modelo de datos
const User = {
  create: (userData, callback) => {
    const query = 'INSERT INTO users (name, email) VALUES (?, ?)';
    const values = [userData.name, userData.email];

    connection.query(query, values, (error, results, fields) => {
      if (error) {
        console.error('Error al guardar el usuario:', error);
        callback(error, null);
      } else {
        console.log('Usuario guardado correctamente');
        callback(null, results);
      }
    });
  },
};

module.exports = User;
