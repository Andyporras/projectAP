const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de landingPage
router.get('/landingPage', (req, res) => {
    if (req.session.loggedin) {
        res.render('landingPage', {
            login: true,
            name: req.session.name,
        });
    }
    else {
        res.render('landingPage', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;