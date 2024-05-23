const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de seriesNoReg

router.get('/seriesNoReg', (req, res) => {
    res.render('seriesNoReg');
});

module.exports = router;
