
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
/*
Función para verificar si el usuario y la contraseña son correctos
*/
function logIn(){
    var usuario = document.getElementById("usuario").value;
    console.log(usuario);
    var password = document.getElementById("contraseña").value;
    console.log(password);
    if(usuario == "" || password == ""){
        alert("Por favor, llene todos los campos");
    }
    else{
        //  conectarse a la base de datos(mysql) y verificar si el usuario y la contraseña son correctos
        var con = conectarBaseDatos();
        console.log(con);
        // si el usuario y la contraseña son correctos
        if(usuario == "admin" && password == "admin"){
            location.href = "../../fron-end/archivosHTML/landingAdmin.html";
        }
        else{
            //mensaje de error, usuario o contraseña incorrectos
            alert("Usuario o contraseña incorrectos");
        }   
    }
}



function registraUsuario(){
    if(document.getElementById("usuario").value == "admin"){
        location.href = "../../fron-end/archivosHTML/landingAdmin.html"
    }else{
        location.href = "../../fron-end/archivosHTML/landingRegistrado.html"
    }
    
}



    