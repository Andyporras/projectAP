const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');



function getTipo(tipo) {
    var idTipo = 0;
    if (genero === 'Pelicula') {
        idTipo = 1;
    } else if (genero === 'Serie') {
        idTipo = 2;
    } else if (genero === 'Documental') {
        idTipo = 3;
    }
    return idTipo;
}
// funciones de agregarProducto
router.get('/agregarProducto', async (req, res) => {
    const title = req.body.title;
    const link = req.body.link;
    const releaseDate = req.body.releaseDate;
    const duration = req.body.duration;
    const photo = req.body.photo;
    const synopsis = req.body.synopsis;
    const trailer = req.body.trailer;
    const price = req.body.price;
    const tipo = req.body.tipo;
    const categories = req.body.categories;
    const platforms = req.body.platforms;
    // const titulo = req.body.nombre;
    // const link = req.body.segundoNombre;
    // const FechaEstreno = req.body.apellido;
    // const duracion = req.body.segundoApellido;
    // const foto = req.body.cedula;
    // const sinopsis = req.body.correo;
    // const trailer = req.body.telefono;
    // const precio = req.body.usuario;
    // const tipo = req.body.contrasena;
    

// CREATE PROCEDURE addProduct (IN titleV varchar(255), IN linkV varchar(255), IN releaseV DATE,
// 							IN durationV datetime, IN photoV VARCHAR(255), IN synopsisV VARCHAR(255),
//                             IN trailerV VARCHAR(255), IN priceV DOUBLE, in tipo int)

    var idTipo = getTipo(tipo);
    conexion.query('CALL addProduct(?,?,?,?,?,?,?,?,?);', [title, link, releaseDate, duration, photo, synopsis, trailer, price, idTipo], async (error, results) => {
        if (error) {
            console.log(error);
        }
        console.log(results);
    });


    // CREATE PROCEDURE addProductxPlatform(IN idProductV INT, IN idPlatformV INT)
    // BEGIN
    //   INSERT INTO ProductxPlatform(idProduct, idPlatform)
    //   Values (idProductV, idPlatformV);
    // END//
    const [idPro] = await query('SELECT last_insert_id();', []);

    for (let i = 0; i < platforms.length; i++) {
        conexion.query('CALL addProductxPlatform(?,?);', [idPro, platforms[i]], async (error, results) => {
            if (error) {
                console.log(error);
            }
            console.log(results);
        });
    }    



//     -- relaciona n productos con n categorias
// CREATE PROCEDURE addProductxCategory(IN idProductV INT, IN idCategoryV INT)
//    BEGIN
// 	 INSERT INTO ProductxCategory(idProduct, idCategory)
//      Values (idProductV, idCategoryV);
//    END//
    for (let i = 0; i < categories.length; i++) {
        conexion.query('CALL addProductxCategory(?,?);', [idPro, categories[i]], async (error, results) => {
            if (error) {
                console.log(error);
            }
            console.log(results);
        });
    }  


    //probar
    // if (tipo == "Serie") {
    //     for (let i = 0; i < seasons; i++) {
    //         conexion.query('CALL addSeason(?,?);', [idPro, "noLink"], async (error, results) => {
    //             if (error) {
    //                 console.log(error);
    //             }
    //             console.log(results);
    //         });
    //         var idSeason = 0;
    //         conexion.query('SELECT last_insert_id() as id;', [], async (error, results) => {
    //             idSeason = results[0].id;
    //         });
    //         for (let j = 0; j < seasons[i]; j++) {
    //             conexion.query('CALL addEpisode(?,?);', [idSeason, "noLink"], async (error, results) => {
    //                 if (error) {
    //                     console.log(error);
    //                 }
    //                 console.log(results);
    //             });
    //         }  
    //     }  
    // }

    //FALTA lo de añadir staff(creativos) al producto

    
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

});




module.exports = router;