const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de seriesNoReg
router.get('/pelisNoReg', (req, res) => {
    res.render('pelisNoReg');
});

module.exports = router;