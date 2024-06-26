const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');


// funciones de productoNoReg
router.get('/productoNoReg', (req, res) => {
    if (req.session.loggedin) {
        res.render('productoNoReg', {
            login: true,
            name: req.session.name,
        });
    }
    else {
        res.render('productoNoReg', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;