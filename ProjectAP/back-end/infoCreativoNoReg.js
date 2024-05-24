const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de infoCreativoNoReg
router.get('/infoCreativoNoReg', (req, res) => {
    if (req.session.loggedin) {
        res.render('infoCreativoNoReg', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('infoCreativoNoReg', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});


module.exports = router;