//funcion para registrarse en la base de datos
function registrar(){
    var nombre = document.getElementById("nombre").value;
    console.log(nombre);
    var segundoNombre = document.getElementById("segundoNombre").value;
    console.log(segundoNombre);
    var apellido = document.getElementById("apellido").value;
    console.log(apellido);
    var cedula = document.getElementById("cedula").value;
    console.log(cedula);
    var correo = document.getElementById("correo").value;
    console.log(correo);
    var telefono = document.getElementById("telefono").value;
    console.log(telefono);
    var usuario = document.getElementById("usuario").value;
    console.log(usuario);
    var contraseña = document.getElementById("contraseña").value;
    console.log(contraseña);
    var confirmarContraseña = document.getElementById("confirmar_contraseña").value;
    console.log(confirmarContraseña);
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value;
    console.log(fechaNacimiento);
    var genero = document.getElementById("genero").value;
    console.log(genero);
    var nationality = document.getElementById("nationality");
    console.log(nationality);

    console.log("entra");

    if(nombre == "" || apellido == "" || cedula == "" || correo == "" || telefono == "" || usuario == "" || contraseña == "" || confirmarContraseña == "" || fechaNacimiento == "" || genero == "" || national == ""){
        alert("Por favor, llene todos los campos");
    }   
    else{
        if(contraseña != confirmarContraseña){
            alert("Las contraseñas no coinciden");
        }
        else{
            //conectarse a la base de datos y registrar al usuario
            var con = conectarBaseDatos();
            console.log(con);
            location.href = "../../fron-end/archivosHTML/logIn.html";
        }
    }
}