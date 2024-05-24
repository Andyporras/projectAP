const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');



router.get('/registrar', (req, res) => {
    if (req.session.loggedin) {
        res.render('registrar', {
            login: true,
            name: req.session.name,
        });
    }
    else {
        res.render('registrar', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
    res.render('registrar');
});

//funcion para registrarse en la base de datos
router.post('/registrar', async (req, res) => {
    const nombre = req.body.nombre;
    const segundoNombre = req.body.segundoNombre;
    const apellido = req.body.apellido;
    const segundoApellido = req.body.segundoApellido;
    const cedula = req.body.cedula;
    const correo = req.body.correo;
    const telefono = req.body.telefono;
    const usuario = req.body.usuario;
    const constraseña = req.body.constrasena;
    const confirmar_constraseña = req.body.confirmar_constrasena;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const genero = req.body.genero;
    const foto = req.body.foto;
    const nationality = req.body.nationality;

    //mostrar en consola los datos
    console.log(nombre);
    console.log(apellido);
    console.log(cedula);
    console.log(constraseña);
    console.log(confirmar_constraseña);

    //comprobar que los campos no esten vacios
    if (nombre && apellido && cedula && correo && telefono && usuario && constraseña && confirmar_constraseña && fecha_nacimiento && genero && foto && nationality) {
        //comprobar que las contraseñas sean iguales
        if (constraseña == confirmar_constraseña) {
            
        } else {
            res.render('registrar', {
                alert: true,
                alertTitle: 'Error',
                alertMessage: 'Las contraseñas no coinciden',
                alertIcon: 'error',
                showConfirmButton: true,
                timer: false,
                ruta: 'registrar'
            });
        }
    }
    res.end();
});



    


module.exports = router;