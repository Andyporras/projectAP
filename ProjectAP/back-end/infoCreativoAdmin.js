const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de infoCreativoAdmin
router.get('/infoCreativoAdmin', (req, res) => {
    if (req.session.loggedin) {
        res.render('infoCreativoAdmin', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('infoCreativoAdmin', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;