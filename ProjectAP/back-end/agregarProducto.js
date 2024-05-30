const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');
const { promisify } = require('util');

const query = promisify(conexion.query).bind(conexion);

// Rutas y Funciones
var listStaff = [];
var roles = [];

// Función para almacenar los datos de los staff
router.post('/agregarStaff', (req, res) => {
    // se almacenan los datos de los staff en un arreglo y se muestran en consola
    const { creativo, rol } = req.body;
    listStaff.push(creativo);
    roles.push(rol);
    console.log(listStaff);
    console.log(roles);
    // res.send({ listStaff, roles });
});


// funciones de agregarProducto
router.get('/agregarProducto', async (req, res) => {
    // se carga la lista de staff
    try {
        const results = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM staff', (error, results) => {
                if (error) {
                    return reject(error);
                }
                // console.log(results);
                resolve(results);
            });
        });

        const listaStaff = results.map(result => result);

        console.log("Lista de staff: ", listaStaff.map(staff => staff.idStaff));

        if (req.session.loggedin) {
            res.render('agregarProducto', {
                login: true,
                name: req.session.name,
                staff: listaStaff
            });
        } else {
            res.render('agregarProducto', {
                login: false,
                name: 'Sesión no iniciada',
                staff: listaStaff
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la lista de staff');
    }
});

// Función para almacenar los datos de los trabajos
router.post('/agregarProducto', async (req, res) => {
    const { titutlo, Sinopsis, duracion, categorias, nombre, rol,reparto,poster, escenas,estreno,plataformas, trailer,tipo, temporadas,episodios } = req.body;
    console.log(titutlo);
    console.log(Sinopsis);
    console.log(duracion);
    console.log(categorias);
    console.log(nombre);
    console.log(rol);
    console.log(reparto);
    console.log(poster);
    console.log(escenas);
    console.log(estreno);
    console.log(plataformas);
    console.log(trailer);
    console.log(tipo);
    console.log(temporadas);
    console.log(episodios);
    
        
        
        try {
        /*
        -- 	crud
        -- añade media en general titulo link(no se a que se refiere pero ahi esta) estreno, duracion, photo, sinopsis, trailer precio tipo(un id que hace referencia a serie, pelicula documental, etc)
        -- el reparto, categoria plataformas se hace por aparte ya que como antes son iteraciones de una lista 
        -- los updates de las tablas que tengan datos asi (iterativos, como reparto, categorias) hay dos opciones 1. mas sencilla para la base borra la lista de lo que se va a actualizar y se vuelven a añadir los 
        -- "nuevos"(me refiero a que si antes habian 3 categorias(terror, drama, comedia) y se quieren cambiar se eliminan las tres y se añaden de nuevo(supenso, drama)
        CREATE PROCEDURE addProduct (IN titleV varchar(255), IN linkV varchar(255), IN releaseV DATE,
        IN durationV time, IN photoV VARCHAR(255), IN synopsisV VARCHAR(255),
        IN trailerV VARCHAR(255), IN priceV DOUBLE, in tipo int)
        BEGIN
        INSERT INTO ProductAV(title, link, releaseDate, duration, photo, synopsis, trailer, price, review, idMediaType, activo)
        Values (titleV, linkV, releaseV, durationV, photoV, synopsisV, trailerV, priceV, 0.0, tipo, 1);
        END//
        */
        //insertar los datos en la base de datos
        
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al agregar el producto');
    }
});




module.exports = router;