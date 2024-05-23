const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');


// funciones de productoNoReg
router.get('/productoNoReg', (req, res) => {
    res.render('productoNoReg');
});

module.exports = router;