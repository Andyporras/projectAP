var datos = {nombre: "Fernando",
             segundoNombre: "Jose",
             apellido: "Gross",
             segundoApellido: "Hernández",
             identificacion: "118610163",
             correo: "fergross0602@estudiantec.cr",
             numero: "86253351",
             usuario: "fgross06",
             fechaNac: "06/12/2002",
             genero: "Masculino",
             nacionalidad: "Costarricense"
}

function cargaDatos(){
    document.getElementById("nombre").textContent = datos["nombre"]
    document.getElementById("segNombre").textContent = datos["segundoNombre"]
    document.getElementById("apellido").textContent = datos["apellido"]
    document.getElementById("segApellido").textContent = datos["segundoApellido"]
    document.getElementById("id").textContent = datos["identificacion"]
    document.getElementById("correo").textContent = datos["correo"]
    document.getElementById("num").textContent = datos["numero"]
    document.getElementById("usr").textContent = datos["usuario"]
    document.getElementById("nac").textContent = datos["fechaNac"]
    document.getElementById("gen").textContent = datos["genero"]
    document.getElementById("nacion").textContent = datos["nacionalidad"]
}

function cargaPlaceholders(){
    document.getElementById("nombre").placeholder = datos["nombre"]
    document.getElementById("segNom").placeholder = datos["segundoNombre"]
    document.getElementById("apellido").placeholder = datos["apellido"]
    document.getElementById("segAp").placeholder = datos["segundoApellido"]
    document.getElementById("id").placeholder = datos["identificacion"]
    document.getElementById("correo").placeholder = datos["correo"]
    document.getElementById("num").placeholder = datos["numero"]
    document.getElementById("usr").placeholder = datos["usuario"]
    document.getElementById("nac").placeholder = datos["fechaNac"]
    document.getElementById("nacion").placeholder = datos["nacionalidad"]
}

