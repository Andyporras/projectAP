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
});

//funcion para obtener el genero de la persona
function getGenero(genero) {
    var idGenero = 0;
    if (genero === 'Masculino') {
        idGenero = 1;
    } else if (genero === 'Femenino') {
        idGenero = 2;
    } else if (genero === 'Otro') {
        idGenero = 3;
    }
    return idGenero;
}

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
    const contraseña = req.body.contrasena;
    const confirmar_constraseña = req.body.confirmar_contrasena;
    const fecha_nacimiento = req.body.fecha_nacimiento;
    const genero = req.body.genero;
    const foto = req.body.foto;
    const nationality = req.body.nationality;

    //mostrar en consola los datos
    console.log(nombre);
    console.log(apellido);
    console.log(cedula);
    console.log(contraseña);
    console.log(confirmar_constraseña);

    //comprobar que los campos no esten vacios
    if (nombre && apellido && cedula && correo && telefono && usuario && contraseña && confirmar_constraseña && fecha_nacimiento && genero && foto && nationality) {
       console.log("entro");
        //comprobar que las contraseñas sean iguales
        if (contraseña === confirmar_constraseña) {
            //encriptar la contraseña
            let passHash = await bcryptjs.hash(contraseña, 8);
            //insertar los datos en la base de datos
            /*
            CREATE PROCEDURE addPerson (IN nameP VARCHAR(255), IN birth DATE, IN gen INT, IN mailVar VARCHAR(255),
							IN phoneVar VARCHAR(255), IN nationalityVar VARCHAR(255), IN photoVar VARCHAR(255), in identV VARCHAR(255), IN idDistV INT)
            BEGIN
                INSERT INTO Person(name_person, birthdate, gender, mail, phone, nationality, photo, identification, idDistrit, activo)
                Values (nameP, birth, gen, mailVar, phoneVar, nationalityVar, photoVar, identV, idDistV,1);
            END//
            */
           var idGenero = getGenero(genero);
            conexion.query('CALL addPerson(?,?,?,?,?,?,?,?,?)', [nombre, fecha_nacimiento, idGenero, correo, telefono, nationality, foto, cedula, 1], async (error, results) => {
                if (error) {
                    console.log(error);
                }
                console.log(results);
            });
            /*
            CREATE PROCEDURE addUser (IN nameV VARCHAR(255), IN passVar VARCHAR(255))
            BEGIN
                INSERT INTO userIMDB(idPerson, username, pass, activo)
                Values (last_insert_id(), nameV, passVar, 1);
            END//
            */
            conexion.query('CALL addUser(?,?)', [usuario, passHash], async (error, results) => {
                if (error) {
                    console.log(error);
                }
                console.log(results);
            });
            console.log("entro2");
            res.render('registrar', {
                alert: true,
                alertTitle: 'Registration',
                alertMessage: '¡Successful Registration!',
                alertIcon: 'success',
                showConfirmButton: false,
                timer: 1500,
                ruta: ''
            });
            
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