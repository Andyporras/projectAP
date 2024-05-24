const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de historial
router.get('/historial', (req, res) => {
    if (req.session.loggedin) {
        res.render('historial', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('historial', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});


module.exports = router;