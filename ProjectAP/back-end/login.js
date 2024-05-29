const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta

//funcion para saber si es un usuario o un administrador
var idPerson;
//tabla se llama UserIMDB y las columnas son username, pass
router.post('/auth', async (req, res) => {
    const usuario = req.body.usuario;
    const password = req.body.password;
    if(usuario && password){
        //mostrar en consola los datos
        console.log(usuario);
        console.log(password);
        conexion.query('SELECT * FROM UserIMDB WHERE username = ?', [usuario], async (error, results) => {
            //mostrar en consola los resultados
            console.log("tamaño de resultados: " + results.length);
            /*
            console.log("password: " + results[0].pass);
            console.log("usuario: " + results[0].username);
            console.log(password == results[0].pass);
            console.log(results.length === 0);
            */
            // console.log(results.length == 0 || (await bcryptjs.compare(password, results[0].pass)) )
            if(results.length === 0 || !(password == results[0].pass) ){
                // console.log('Usuario o contraseña incorrectos');
                //mensaje de error en la vista
                res.render('login', {
                    alert: true,
                    alertTitle: 'Error',
                    alertMessage: 'Usuario y/o contraseña incorrectos',
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false,
                    ruta: 'login'
                });
            }else{
                console.log("no hay error")
                console.log(results[0].idPerson)
                // revisar si es un usuario o un administrador
                idPerson = results[0].idPerson;
                console.log("idPerson: " + idPerson);
                conexion.query('SELECT * FROM Administrator WHERE idUser = ?', [idPerson], async (error, results2) => {
                    console.log(results2);
                    if(results2.length === 0){
                        req.session.loggedin = true;
                        req.session.name = usuario;
                        req.session.userId = idPerson;
                        res.render('login', {
                            alert: true,
                            alertTitle: '¡Éxito!',
                            alertMessage: '¡Bienvenido!',
                            alertIcon: 'success',
                            showConfirmButton: false,
                            timer: 1500,
                            ruta: 'landingRegistrado'
                        });
                    }
                    else{
                        req.session.loggedin = true;
                        req.session.name = usuario;
                        res.render('login', {
                            alert: true,
                            alertTitle: '¡Éxito!',
                            alertMessage: '¡Bienvenido!',
                            alertIcon: 'success',
                            showConfirmButton: false,
                            timer: 1500,
                            ruta: 'landingAdmin'
                        });
                    }
                    res.end();
                });
            }
        });
        console.log("login");
        console.log("idPerson: " + idPerson);
        
    }else {
        res.send('Por favor, ingrese usuario y contraseña');
        res.end();
    }
});


router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/');
    });
});




// 12 - Método para controlar que está auth en todas las páginas
/*
router.get('/', (req, res) => {
    console.log("pagina de inicio");
    console.log(req.session.loggedin);
    if (req.session.loggedin) {
        res.render('landingPage', {
            login: true,
            name: req.session.name,
        });
    } else {
        res.render('landingPage', {
            login: false,
            name: 'Debe iniciar sesión',
        });
    }
    res.end();
});
*/
module.exports = router;


    