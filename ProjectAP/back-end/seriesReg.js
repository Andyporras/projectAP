const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de seriesReg
router.get('/seriesReg', (req, res) => {
    if (req.session.loggedin) {
        res.render('seriesReg', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('seriesReg', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});


module.exports = router;