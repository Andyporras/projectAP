const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones del carrito, agregar, eliminar, actualizar, mostrar y dirigir a la vista de carrito
router.get('/carrito', (req, res) => {
    if (req.session.loggedin) {
        res.render('carrito', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('carrito', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});



module.exports = router;
