const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta

function temp(){
    location.href = "landingRegistrado"
}

//tabla se llama UserIMDB y las columnas son username, pass
app.post('/auth', async (req, res) => {
    const usuario = req.body.usuario;
    const password = req.body.password;
    if(usuario && password){
        //mostrar en consola los datos
        console.log(usuario);
        console.log(password);
        conexion.query('SELECT * FROM UserIMDB WHERE username = ?', [usuario], async (error, results) => {
            //mostrar en consola los resultados
            console.log("tamaño de resultados: " + results.length);
            console.log("password: " + results[0].pass);
            console.log("usuario: " + results[0].username);
            console.log(password == results[0].pass);
            console.log(results.length === 0);
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
                req.session.name = results[0].username;
                res.render('login', {
                    alert: true,
                    alertTitle: 'Conexión exitosa',
                    alertMessage: 'Login correcto',
                    alertIcon: 'success',
                    showConfirmButton: true,
                    timer: 1500,
                    ruta: ''
                });
            }
            res.end();
        });
    }else {
        res.send('Por favor, ingrese usuario y contraseña');
        res.end();
    }
});


module.exports = router;


    