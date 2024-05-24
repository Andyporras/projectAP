// 1 - Invocamos a express
const express = require('express');
const path = require('path');
const app = express();

// 2 - Seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3 - Invocamos a dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './env/.env' });

// 4 - Directorio front-end
app.use('/resources', express.static('public'));
app.use('/resources', express.static(path.join(__dirname, 'public')));

// 5 - Establecemos el motor de plantillas ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public/views'));

// 6 - Invocamos a bcryptjs
const bcryptjs = require('bcryptjs');

// 7 - Configuración de la sesión
const session = require('express-session');
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

// 8 - Invocamos al módulo de conexión de la base de datos
const conexion = require('./back-end/conexion');

// 8.5 - Importamos las rutas
const loginRoutes = require('./back-end/login');
app.use('/', loginRoutes);

const registrarRoutes = require('./back-end/registrar');
app.use('/', registrarRoutes);

const docusNoRegRoutes = require('./back-end/docusNoReg');
app.use('/', docusNoRegRoutes);

const seriesNoRegRoutes = require('./back-end/seriesNoReg');
app.use('/', seriesNoRegRoutes);

const peliculasNoRegRoutes = require('./back-end/pelisNoReg');
app.use('/', peliculasNoRegRoutes);

const productoNoRegRoutes = require('./back-end/productoNoReg');
app.use('/', productoNoRegRoutes);

const agregarCreativoRoutes = require('./back-end/agregarCreativo');
app.use('/', agregarCreativoRoutes);

const agregarProductoRoutes = require('./back-end/agregarProducto');
app.use('/', agregarProductoRoutes);

const carritoRoutes = require('./back-end/carrito');
app.use('/', carritoRoutes);

const docusRegRoutes = require('./back-end/docusReg');
app.use('/', docusRegRoutes);

const editarCreativoRoutes = require('./back-end/editarCreativo');
app.use('/', editarCreativoRoutes);

const editarPerfilRoutes = require('./back-end/editarPerfil');
app.use('/', editarPerfilRoutes);


const landingPageRoutes = require('./back-end/landingPage');
app.use('/', landingPageRoutes);

const estadisticasRoutes = require('./back-end/estadisticas');
app.use('/', estadisticasRoutes);

const historialRoutes = require('./back-end/historial');
app.use('/', historialRoutes);

const infoCreativoAdminRoutes = require('./back-end/infoCreativoAdmin');
app.use('/', infoCreativoAdminRoutes);

const infoCreativoNoRegRoutes = require('./back-end/infoCreativoNoReg');
app.use('/', infoCreativoNoRegRoutes);

const infoCreativoRegRoutes = require('./back-end/infoCreativoReg');
app.use('/', infoCreativoRegRoutes);

const landingAdminRoutes = require('./back-end/landingAdmin');
app.use('/', landingAdminRoutes);




/*
app.get('/landingPage', (req, res) => {
    //capturar la sesion
    const sesion = req.session;
    //mostrar en consola la sesion
    console.log(sesion);
    res.render('landingPage');
});
*/
// 12 - Método para controlar que está auth en todas las páginas
app.get('/', (req, res) => {
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
            name: 'Sesión no iniciada',
        });
    }
    res.end();
});

// Función para limpiar la caché después del logout
app.use((req, res, next) => {
    if (!req.user)
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    next();
});
/*
// Logout: destruye la sesión
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/'); // Siempre se ejecutará después de que se destruya la sesión
    });
});
*/
// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
