// /mnt/data/app.js

const mysql = require('mysql');

// Configuración de la conexión
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "IMDB2024"
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos con ID', connection.threadId);
});


// Cerrar la conexión
connection.end();
