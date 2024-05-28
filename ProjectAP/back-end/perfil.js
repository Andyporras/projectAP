const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de pefil
router.get('/perfil', (req, res) => {
    if (req.session.loggedin) {
        res.render('pefil', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('perfil', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;