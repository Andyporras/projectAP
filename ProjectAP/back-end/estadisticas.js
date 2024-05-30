const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de estadisticas
router.get('/estadisticas', (req, res) => {
    conexion.query('SELECT tableName as TABLA, modification as ACCION, oldValue AS VALORES_ANTIGUOS, newValue AS VALORES_NUEVOS, modificationDate FROM records order by id desc', (error, results) => {
        if (error) {
          console.error('Error en la consulta: ', error);
          return res.status(500).json({ error: 'Error en la consulta' });
        }
  
        res.render('estadisticas', {datosBi: datosBi});

    });

});

module.exports = router;