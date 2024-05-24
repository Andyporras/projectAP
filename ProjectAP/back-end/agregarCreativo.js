const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de agregarCreativo
router.get('/agregarCreativo', (req, res) => {
    if (req.session.loggedin) {
        res.render('agregarCreativo', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('agregarCreativo', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;