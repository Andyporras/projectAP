const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de wislist
router.get('/wishlist', (req, res) => {
    if (req.session.loggedin) {
        res.render('wislist', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('wishlist', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});


module.exports = router;