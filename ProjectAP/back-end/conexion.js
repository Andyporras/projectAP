const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
conexion.connect((error) => {
    if (error) {
        console.log('El error de conexión es: ' + error);
        return;
    }
    console.log('¡Conectado a la base de datos!');
});

// seccion de consultas a la base de datos

// 1 - Consulta para obtener todos los usuarios
conexion.query('SELECT * FROM UserIMDB', (error, results) => {
    if (error) {
        throw error;
    }
    console.log(results);
});

// obtener los genero de las personas
conexion.query('SELECT * FROM gender', (error, results) => {
    if (error) {
        throw error;
    }
    console.log(results);
});


module.exports = conexion;