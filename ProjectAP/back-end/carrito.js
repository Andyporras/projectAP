const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones del carrito, agregar, eliminar, actualizar, mostrar y dirigir a la vista de carrito
router.get('/carrito', (req, res) => {
    //capturar la sesion
    const sesion = req.session;
    //mostrar en consola la sesion
    console.log(sesion);
    res.render('carrito');
});



module.exports = router;
