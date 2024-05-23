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

// const landingPageRoutes = require('./back-end/landingPage');
// app.use('/', landingPageRoutes);
// 9 - Establecemos las rutas para las vistas
// const registrarRoutes = require('./back-end/registrar');
// app.use('/', registrarRoutes);


app.get('/landingPage', (req, res) => {
     res.render('landingPage');
});

// app.get('/docusNoReg', (req, res) => {
//     res.render('docusNoReg');
// });

// app.get('/productoNoReg', (req, res) => {
//     res.render('productoNoReg');
// });

// app.get('/pelisNoReg', (req, res) => {
//     res.render('pelisNoReg');
// });

// app.get('/seriesNoReg', (req, res) => {
//     res.render('seriesNoReg');
// });

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

// Logout: destruye la sesión
app.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/'); // Siempre se ejecutará después de que se destruya la sesión
    });
});

// Inicia el servidor
app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
