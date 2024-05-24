const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de pefil
router.get('/pefil', (req, res) => {
    if (req.session.loggedin) {
        res.render('pefil', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('pefil', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;