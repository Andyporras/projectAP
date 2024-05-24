const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de landingAdmin
router.get('/landingAdmin', (req, res) => {
    if (req.session.loggedin) {
        res.render('landingAdmin', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('landingAdmin', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;