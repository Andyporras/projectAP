const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de editarCreativo
router.get('/editarCreativo', (req, res) => {
    if(req.session.loggedin){
        res.render('editarCreativo', {
            login: true,
            name: req.session.name,
        });
    }
    else{
        res.render('editarCreativo', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

module.exports = router;