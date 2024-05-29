const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de estadisticas
router.get('/estadisticas', (req, res) => {
    if (req.session.loggedin) {
        res.render('estadisticas', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('estadisticas', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;