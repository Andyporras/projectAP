const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de productoReg
router.get('/productoReg', (req, res) => {
    if (req.session.loggedin) {
        res.render('productoReg', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('productoReg', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});


module.exports = router;