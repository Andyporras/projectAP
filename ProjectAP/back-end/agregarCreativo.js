const express = require('express');
const router = express.Router();
const bcryptjs = require('bcryptjs');
const conexion = require('./conexion');
const { promisify } = require('util');

const query = promisify(conexion.query).bind(conexion);

// Rutas y Funciones
var nombresParentesco = [];
var listaParentesco = [];
var trabajos = [];
var roles = [];

// Función para almacenar los datos de los trabajos
router.post('/agregarTrabajo', (req, res) => {
    const { producto: trabajo, rol } = req.body;
    trabajos.push(trabajo);
    roles.push(rol);
    console.log(trabajos);
    console.log(roles);
    // res.send({ trabajos, roles });
});

// Ruta para mostrar el formulario de agregar creativo
router.get('/agregarCreativo', async (req, res) => {
    nombresParentesco = [];
    listaParentesco = [];
    trabajos = [];
    roles = [];

    try {
        const results = await new Promise((resolve, reject) => {
            conexion.query('SELECT * FROM productav', (error, results) => {
                if (error) {
                    return reject(error);
                }
                resolve(results);
            });
        });

        const listaProductos = results.map(result => result.title);

        console.log("Lista de productos: ", listaProductos);

        if (req.session.loggedin) {
            res.render('agregarCreativo', {
                login: true,
                name: req.session.name,
                productos: listaProductos
            });
        } else {
            res.render('agregarCreativo', {
                login: false,
                name: 'Sesión no iniciada',
                productos: listaProductos
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener la lista de productos');
    }
});

// Función para agregar el nombre y el parentesco de un familiar
router.post('/agregarFamiliar', (req, res) => {
    const { nombreParentesco: nombre, parentesco } = req.body;
    nombresParentesco.push(nombre);
    listaParentesco.push(parentesco);
    console.log(nombresParentesco);
    console.log(listaParentesco);
    // res.send({ nombresParentesco, listaParentesco });
});

// Función principal para agregar creativo
router.post('/agregarCreativo', async (req, res) => {
    const {
        nombre, segundoNombre, apellido, segundoApellido,
        fecha_nacimiento, lugar_nacimiento, nationality,
        biografia: biografía, altura, datosTrivia: datoTrivia,
        foto
    } = req.body;

    const nombre2 = nombresParentesco;
    const parentesco = listaParentesco;
    const producto = trabajos;
    const rol = roles;

    try {
        // Agregar staff
        await query('CALL addStaff(?,?,?,?,?,?,?,?)', [nombre, fecha_nacimiento, nationality, biografía, altura, datoTrivia, foto, lugar_nacimiento]);

        // Agregar familiares
        for (const nombre of nombre2) {
            const [relative] = await query('SELECT * FROM Relative WHERE relative_name = ?', [nombre]);
            if (!relative) {
                await query('CALL addRelative(?)', [nombre]);
            }
        }

        const idRelativeV = await Promise.all(nombre2.map(async (nombre) => {
            const [relative] = await query('SELECT idRelative FROM Relative WHERE relative_name = ?', [nombre]);
            return relative.idRelative;
        }));

        const [staff] = await query('SELECT idStaff FROM Staff WHERE staff_name = ?', [nombre]);
        const idStaffV = staff.idStaff;

        // Relacionar familiares con el staff
        for (const [index, idRelative] of idRelativeV.entries()) {
            const [relation] = await query('SELECT * FROM RelativexStaff WHERE idStaff = ? AND idRelative = ?', [idStaffV, idRelative]);
            if (!relation) {
                await query('CALL addRelativexStaff(?,?,?)', [idStaffV, idRelative, parentesco[index]]);
            }
        }

        // Agregar roles y relacionarlos con el staff
        for (const rodActual of rol) {
            const [staffType] = await query('SELECT * FROM StaffType WHERE staffT_name = ?', [rodActual]);
            if (!staffType) {
                await query('insert into staffType(staffT_name) values(?)', [rodActual]);
            }
        }

        const idProductV = await Promise.all(producto.map(async (prod) => {
            const [product] = await query('SELECT id FROM productav WHERE title = ?', [prod]);
            return product.id;
        }));
        const idProductV2 =idProductV;
        console.log("idproducto: "+idProductV.length, idProductV);
        console.log("idProductoV2: "+idProductV2.length, idProductV2);
        for (var index = 0; index < idProductV.length; index++) {
            console.log("index: "+index);
            // await query('CALL addRol(?,?,?)', [idProduct, idStaffV, rol[index]]);
            // INSERT INTO ProductxStaff(idProduct, idStaff) Values (idProductV, idStaffV);
            await query('insert into ProductxStaff(idProduct, idStaff) values(?,?)', [idProductV[index], idStaffV]);
            // INSERT INTO ProductxStaffxType(idProdxStaff, idStaffT) Values (idProdxStaffV, idStaffTV);
            await query('insert into ProductxStaffxType(idProdxStaff, idStaffT) values(?,?)', [idProductV[index], idStaffV]);
        }

        res.render('agregarCreativo', {
            alert: true,
            alertTitle: '¡Éxito!',
            alertMessage: '¡Se ha registrado el creativo exitosamente!',
            alertIcon: 'success',
            showConfirmButton: false,
            timer: 1500,
            ruta: 'agregarCreativo'
        });
    } catch (error) {
        console.error(error);
        res.render('agregarCreativo', {
            alert: true,
            alertTitle: 'Error',
            alertMessage: 'Hubo un problema al registrar el creativo.',
            alertIcon: 'error',
            showConfirmButton: true,
            timer: false,
            ruta: 'agregarCreativo'
        });
    }
});

module.exports = router;
