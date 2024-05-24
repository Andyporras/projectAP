const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de pago
router.get('/pago', (req, res) => {
    if (req.session.loggedin) {
        res.render('pago', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('pago', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;