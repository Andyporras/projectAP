
var producto = {
        titulo: "Titulo producto",
        poster: "resources/fotos/poster2.jpg",
        sinopsis: "sinopsis del producto",
        trailer: "https://www.youtube.com/watch?v=yyGetSp7CIc",
        categorias: ["Terror", "Drama"],
        temp: "1T 9EP",
        duracion: 0,
        annio: "2023",
        rating: 3,
        serie: [{episodios: 3}, {episodios: 2}],
        direccio: [{nombre:"Craig Mazin", foto: "resources/fotos/perfil.jpg", titulo: "Director"},
                  {nombre: "Neil Druckmann", foto: "resources/fotos/perfil.jpg", titulo: "Sub Director"}],

        reparto: [{nombre:"Pedro Pascal", foto: "resources/fotos/pascal.jpg", id: 1}],
        escenas: ["resources/fotos/last-of-us-2.jpg"],
        plataformas: ["HBOMax"],
        comentarios: [{usuario: "usuario1", comentario: "comentario producto", rating: 3}],
        id: 1
}


function cargaInfoProducto(){
    document.getElementById("titulo").textContent = producto["titulo"];
    document.getElementById("poster").src = producto["poster"];
    document.getElementById("sinopsis").textContent = producto["sinopsis"];
    document.getElementById("trailer").textContent = producto["trailer"];
    document.getElementById("trailer").href = producto["trailer"];
}

function cargaCategorias(){
    for(var i = 0; i<producto["categorias"].length; i++){
        
    }
}