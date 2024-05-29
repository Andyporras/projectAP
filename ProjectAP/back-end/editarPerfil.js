const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de editarPefil
router.get('/editarPerfil', (req, res) => {
    if (req.session.loggedin) {
        res.render('editarPefil', {
            login: true,
            name: req.session.name,
        });
    }
    else {
        res.render('editarPerfil', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
});

router.post('/editarPerfil', async (req, res) => {
    const { nombre, segNom, apellido, segAp, cedula, correo, telefono, contrasena, fecha_nacimiento, genero, nacionalidad } = req.body;
    const userId = req.session.userId; 

    // Hash de la contraseña 
    let hashedPassword;
    if (contrasena) {
        hashedPassword = await bcryptjs.hash(contrasena, 8);
    }

     // Actualizar datos en la tabla Person usando el procedimiento 
     const query = 'CALL updatePerson(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
     const params = [userId, nombre, fecha_nacimiento, genero, correo, telefono, nacionalidad, foto, cedula, idDistrict];
 
     conexion.query(query, params, (error, results) => {
         if (error) {
             return res.status(500).send('Error en el servidor');
         }
 
         // Actualizar la contraseña en la tabla UserIMDB 
         if (contrasena) {
             conexion.query('UPDATE UserIMDB SET pass = ? WHERE idPerson = ?', [hashedPassword, userId], (error, results) => {
                 if (error) {
                     return res.status(500).send('Error en el servidor');
                 } else {
                     return res.redirect('/perfil');
                 }
             });
         } else {
             return res.redirect('/perfil');
         }
     });


});

module.exports = router;