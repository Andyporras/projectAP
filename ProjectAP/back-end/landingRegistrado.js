const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de landingRegistrado
router.get('/landingRegistrado', (req, res) => {
    if (req.session.loggedin) {
        res.render('landingRegistrado', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('landingRegistrado', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;