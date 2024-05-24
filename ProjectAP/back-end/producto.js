const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de producto
router.get('/producto', (req, res) => {
    if (req.session.loggedin) {
        res.render('producto', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('producto', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});


module.exports = router;