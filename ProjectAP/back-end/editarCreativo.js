const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de editarCreativo
router.get('/editarCreativo', (req, res) => {
    //capturar la sesion
    const sesion = req.session;
    //mostrar en consola la sesion
    console.log(sesion);
    res.render('editarCreativo');
});

module.exports = router;