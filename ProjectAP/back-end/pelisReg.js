const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de pelisReg
router.get('/pelisReg', (req, res) => {
    if (req.session.loggedin) {
        res.render('pelisReg', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('pelisReg', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});


module.exports = router;