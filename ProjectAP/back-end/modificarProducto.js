const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de modificarProducto
router.get('/modificarProducto', (req, res) => {
    if (req.session.loggedin) {
        res.render('modificarProducto', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('modificarProducto', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});



module.exports = router;