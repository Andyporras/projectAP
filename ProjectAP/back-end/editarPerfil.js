const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de editarPefil
router.get('/editarPefil', (req, res) => {
    if (req.session.loggedin) {
        res.render('editarPefil', {
            login: true,
            name: req.session.name,
        });
    }
    else {
        res.render('editarPefil', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;