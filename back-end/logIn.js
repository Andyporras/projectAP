function registraUsuario(){
    if(document.getElementById("usuario").value == "admin"){
        location.href = "../../fron-end/archivosHTML/landingAdmin.html"
    }else{
        location.href = "../../fron-end/archivosHTML/landingRegistrado.html"
    }
    
}