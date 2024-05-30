const express = require('express');
const router = express.Router();
const conexion = require('./conexion'); // Asegúrate de que la ruta es correcta
const { post } = require('./login');

// funciones de wislist
router.get('/wishlist', (req, res) => {
    if (req.session.loggedin) {
        const usuario = req.session.usuario; // Asegúrate de que 'usuario' esté definido

        conexion.query('call getFavoritos(?);', [usuario], async (error, results) => {
            if (error) {
                console.error("Error en la consulta: ", error);
                return res.status(500).json({ error: "Error en la consulta" });
            }
            
            console.log("tamaño de resultados: " + results.length);

            let productos = [];
            for (let i = 0; i < results.length; i++) {
                let fila = {
                    id: results[i].id,
                    title: results[i].title,
                    synopsis: results[i].synopsis,
                    photo: results[i].photo
                };
                productos.push(fila);
            }

            console.log(results.length === 0);

            // Si quieres devolver JSON, utiliza esta línea
            res.json(productos);

            // Si quieres renderizar una vista, utiliza estas líneas
            res.render('wishlist', {
                login: true,
                name: req.session.name,
                productos: productos
            });
        });
    } else {
        res.render('wishlist', {
            login: false,
            name: 'Sesión no iniciada',
        });
    }
    

});


module.exports = router;