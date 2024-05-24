const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de productoAdmin
router.get('/productoAdmin', (req, res) => {
    if (req.session.loggedin) {
        res.render('productoAdmin', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('productoAdmin', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;