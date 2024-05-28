const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de agregarCreativo
router.get('/agregarCreativo', (req, res) => {
    if (req.session.loggedin) {
        res.render('agregarCreativo', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('agregarCreativo', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

router.post('/agregarCreativo', async (req, res) => {
    const nombre = req.body.nombre;
    const segundoNombre = req.body.segundoNombre;
    const apellido = req.body.apellido;
    const segundoApellido = req.body.segundoApellido;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const lugar_nacimiento = req.body.lugar_nacimiento;
    const nationality = req.body.nationality;
    const biografía = req.body.biografia;
    const nombre2 = req.body.nombre2;
    const parentesco = req.body.parentesco;
    const altura = req.body.altura;
    const datoTrivia = req.body.datosTrivia;
    const producto = req.body.producto;
    const rol = req.body.rol;
    const foto = req.body.foto;

    //mostrar en consola los datos
    console.log(nombre);
    console.log(apellido);
    console.log(fecha_nacimiento);
    console.log(lugar_nacimiento);
    console.log(nationality);
    console.log(biografía);
    console.log(nombre2);
    console.log(parentesco);
    console.log(altura);
    console.log(datoTrivia);
    console.log(producto);
    console.log(rol);
    console.log(foto);
    //validar que no haya campos vacios

    
});







module.exports = router;