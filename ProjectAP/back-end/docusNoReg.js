const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de seriesNoReg

router.get('/docusNoReg', (req, res) => {
    if (req.session.loggedin) {
        res.render('docusNoReg', {
            login: true,
            name: req.session.name,
        });
    }
    else {
        res.render('docusNoReg', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;
