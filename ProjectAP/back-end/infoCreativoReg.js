const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de infoCreativoReg
router.get('/infoCreativoReg', (req, res) => {
    if (req.session.loggedin) {
        res.render('infoCreativoReg', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('infoCreativoReg', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;