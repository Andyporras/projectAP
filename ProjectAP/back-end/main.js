//conexion a la base de datos
// function conectarBaseDatos(){
function conectarBaseDatos(){
    var mysql = require('mysql');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "IMDB2024"
    });
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    return con;
}


function pagar(){
    
    location.href = "../../fron-end/archivosHTML/pago.html"
}

function volverPagar(){
    location.href = "../../fron-end/archivosHTML/carrito.html"
}

function volverPerfil(){
    console.log("entra")
    
    location.href = "../../fron-end/archivosHTML/perfil.html"
}


function editarPerfil(){
    location.href = "../../fron-end/archivosHTML/editarPerfil.html"
}

function estrella(valor){
    console.log("estrella " + valor)
}

function editarProducto(){
    location.href = "../../fron-end/archivosHTML/modificarProducto.html"
}

function editarCreativo(){
    location.href = "../../fron-end/archivosHTML/editarCreativo.html"
}
