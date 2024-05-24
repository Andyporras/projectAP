const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de docusReg
router.get('/docusReg', (req, res) => {
    if (req.session.loggedin) {
        res.render('docusReg', {
            login: true,
            name: req.session.name,
        });
    }
    else {
        res.render('docusReg', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;