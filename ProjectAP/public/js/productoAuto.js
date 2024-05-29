
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
        serie: [{episodios: 3}, {episodios: 5}],
        direccion: [{nombre:"Craig Mazin", foto: "resources/fotos/perfil.jpg", titulo: "Director", id:2},
                  {nombre: "Neil Druckmann", foto: "resources/fotos/perfil.jpg", titulo: "Sub Director", id:3}],

        reparto: [{nombre:"Pedro Pascal", foto: "resources/fotos/pascal.jpg", id: 1}],
        escenas: ["resources/fotos/last-of-us-2.jpg"],
        plataformas: ["HBOMax"],
        comentarios: [{usuario: "usuario1", annio:"06/12/2002", comentario: "comentario producto", rating: 3}],
        id: 1
}


function cargaInfoProducto(){
    document.getElementById("titulo").textContent = producto["titulo"];
    document.getElementById("poster").src = producto["poster"];
    document.getElementById("sinopsis").textContent = producto["sinopsis"];
    document.getElementById("trailer").textContent = producto["trailer"];
    document.getElementById("trailer").href = producto["trailer"];

    for(var i = 0; i<producto["categorias"].length; i++){
        var label  = document.createElement("label");
        label.classList = "textosCat categorias temporadas"
        label.textContent =producto["categorias"][i]
        document.getElementById("categorias").appendChild(label)
    }

    if(producto["temp"] === 0){
        var label = document.createElement("label");
        label.classList = "textosCat categorias horas"
        label.textContent = producto["duracion"]
        document.getElementById("categorias").appendChild(label)
    }else{
        var label = document.createElement("label");
        label.classList = "textosCat categorias temporadas"
        label.textContent = producto["temp"]
        document.getElementById("categorias").appendChild(label)
    }

    var label = document.createElement("label");
    label.classList = "textosCat categorias año"
    label.textContent = producto["annio"]
    document.getElementById("categorias").appendChild(label)

    for(var j = 0; j<5; j++ ){
        var span = document.createElement("span")
        if(j<producto["rating"]){
            span.classList = "fa fa-star checked"
        }else{
            span.classList = "fa fa-star unchecked"
        }
        document.getElementById("rating").appendChild(span)
    }

    if(producto["serie"] !== 0){
       
        for(var i = 0; i<producto["serie"].length; i++){
            var li = document.createElement("li");
            var a = document.createElement("a");
            
            a.classList = "dropdown-item"
            a.id = i
            a.href = "#"
            a.onclick = function(){
                localStorage.setItem("temp", this.id);
               //document.getElementById("capitulos").remove(li)
                
               document.getElementById("capitulos").innerHTML = "";
                for(var x = 0; x<producto["serie"][this.id]["episodios"]; x++){
                    var li2 = document.createElement("li");
                    var a2 = document.createElement("a");

                    a2.classList = "dropdown-item"
                    a2.href = "#"
                    a2.textContent = "Capitulo " + (x+1)
                    a2.id = "Temporada"+(this.id+1)
                    li2.appendChild(a2)
                    document.getElementById("capitulos").appendChild(li2)
                }
            
            }
            a.textContent = "Temporada " + (i+1)

            li.appendChild(a)
            
            document.getElementById("temporadas").appendChild(li)
        }
    }

    for(var i = 0; i<producto["direccion"].length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
        a.id = producto["direccion"][i]["id"];
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "infoCreativoNoReg";
        }
        img.src = producto["direccion"][i]["foto"];
        img.classList = "imagenPerfil";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
        figcaption.textContent = producto["direccion"][i]["titulo"] + ": "+ producto["direccion"][i]["nombre"];
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("direccion").appendChild(div)
    }

    for(var i = 0; i<producto["reparto"].length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
        a.id = producto["reparto"][i]["id"];
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "infoCreativoNoReg";
        }
        img.src = producto["reparto"][i]["foto"];
        img.classList = "imagenPerfil";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
        figcaption.textContent = producto["reparto"][i]["nombre"];
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("reparto").appendChild(div)
    }

    for(var i = 0; i<producto["escenas"].length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
       
      
        
        img.src = producto["escenas"][i];
        img.classList = "imagenPerfil";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
       
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("escenas").appendChild(div)
    }

    for(var i = 0; i<producto["plataformas"].length; i++){
        var label  = document.createElement("label");
        label.classList = "textos categorias "
        label.textContent =producto["plataformas"][i]
        document.getElementById("plataformas").appendChild(label)
    }

    for(var i = 0; i<producto["comentarios"].length; i++){
        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var div3 = document.createElement("div")
        var label  = document.createElement("label");
        var div4 = document.createElement("div")


        div.classList = "cont contComentarios"
        div2.classList = "textos titulo usr"
        div2.textContent = producto["comentarios"][i]["usuario"] + " - " + producto["comentarios"][i]["annio"]

        div.appendChild(div2)
        label.classList = "textos"
        label.textContent = producto["comentarios"][i]["comentario"]
        
        div3.appendChild(label)
        
        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<producto["comentarios"][i]["rating"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div4.appendChild(span)
        }

        div3.appendChild(div4)
        div.appendChild(div3)
        
        document.getElementById("comentarios").appendChild(div)
    }

}
function cargaInfoProductoReg(){
    document.getElementById("titulo").textContent = producto["titulo"];
    document.getElementById("poster").src = producto["poster"];
    document.getElementById("sinopsis").textContent = producto["sinopsis"];
    document.getElementById("trailer").textContent = producto["trailer"];
    document.getElementById("trailer").href = producto["trailer"];

    for(var i = 0; i<producto["categorias"].length; i++){
        var label  = document.createElement("label");
        label.classList = "textosCat categorias temporadas"
        label.textContent =producto["categorias"][i]
        document.getElementById("categorias").appendChild(label)
    }

    if(producto["temp"] === 0){
        var label = document.createElement("label");
        label.classList = "textosCat categorias horas"
        label.textContent = producto["duracion"]
        document.getElementById("categorias").appendChild(label)
    }else{
        var label = document.createElement("label");
        label.classList = "textosCat categorias temporadas"
        label.textContent = producto["temp"]
        document.getElementById("categorias").appendChild(label)
    }

    var label = document.createElement("label");
    label.classList = "textosCat categorias año"
    label.textContent = producto["annio"]
    document.getElementById("categorias").appendChild(label)

    for(var j = 0; j<5; j++ ){
        var span = document.createElement("span")
        if(j<producto["rating"]){
            span.classList = "fa fa-star checked"
        }else{
            span.classList = "fa fa-star unchecked"
        }
        document.getElementById("rating").appendChild(span)
    }

    if(producto["serie"] !== 0){
       
        for(var i = 0; i<producto["serie"].length; i++){
            var li = document.createElement("li");
            var a = document.createElement("a");
            
            a.classList = "dropdown-item"
            a.id = i
            a.href = "#"
            a.onclick = function(){
                localStorage.setItem("temp", this.id);
               //document.getElementById("capitulos").remove(li)
                
               document.getElementById("capitulos").innerHTML = "";
                for(var x = 0; x<producto["serie"][this.id]["episodios"]; x++){
                    var li2 = document.createElement("li");
                    var a2 = document.createElement("a");

                    a2.classList = "dropdown-item"
                    a2.href = "#"
                    a2.textContent = "Capitulo " + (x+1)
                    a2.id = "Temporada"+(this.id+1)
                    li2.appendChild(a2)
                    document.getElementById("capitulos").appendChild(li2)
                }
            
            }
            a.textContent = "Temporada " + (i+1)

            li.appendChild(a)
            
            document.getElementById("temporadas").appendChild(li)
        }
    }

    for(var i = 0; i<producto["direccion"].length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
        a.id = producto["direccion"][i]["id"];
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "infoCreativoReg";
        }
        img.src = producto["direccion"][i]["foto"];
        img.classList = "imagenPerfil";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
        figcaption.textContent = producto["direccion"][i]["titulo"] + ": "+ producto["direccion"][i]["nombre"];
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("direccion").appendChild(div)
    }

    for(var i = 0; i<producto["reparto"].length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
        a.id = producto["reparto"][i]["id"];
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "infoCreativoReg";
        }
        img.src = producto["reparto"][i]["foto"];
        img.classList = "imagenPerfil";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
        figcaption.textContent = producto["reparto"][i]["nombre"];
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("reparto").appendChild(div)
    }

    for(var i = 0; i<producto["escenas"].length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
       
      
        
        img.src = producto["escenas"][i];
        img.classList = "imagenPerfil";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
       
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("escenas").appendChild(div)
    }

    for(var i = 0; i<producto["plataformas"].length; i++){
        var label  = document.createElement("label");
        label.classList = "textos categorias "
        label.textContent =producto["plataformas"][i]
        document.getElementById("plataformas").appendChild(label)
    }

    for(var i = 0; i<producto["comentarios"].length; i++){
        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var div3 = document.createElement("div")
        var label  = document.createElement("label");
        var div4 = document.createElement("div")


        div.classList = "cont contComentarios"
        div2.classList = "textos titulo usr"
        div2.textContent = producto["comentarios"][i]["usuario"] + " - " + producto["comentarios"][i]["annio"]

        div.appendChild(div2)
        label.classList = "textos"
        label.textContent = producto["comentarios"][i]["comentario"]
        
        div3.appendChild(label)
        
        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<producto["comentarios"][i]["rating"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div4.appendChild(span)
        }

        div3.appendChild(div4)
        div.appendChild(div3)
        
        document.getElementById("comentarios").appendChild(div)
    }

}
function cargaInfoProductoAdmin(){
    document.getElementById("titulo").textContent = producto["titulo"];
    document.getElementById("poster").src = producto["poster"];
    document.getElementById("sinopsis").textContent = producto["sinopsis"];
    document.getElementById("trailer").textContent = producto["trailer"];
    document.getElementById("trailer").href = producto["trailer"];

    for(var i = 0; i<producto["categorias"].length; i++){
        var label  = document.createElement("label");
        label.classList = "textosCat categorias temporadas"
        label.textContent =producto["categorias"][i]
        document.getElementById("categorias").appendChild(label)
    }

    if(producto["temp"] === 0){
        var label = document.createElement("label");
        label.classList = "textosCat categorias horas"
        label.textContent = producto["duracion"]
        document.getElementById("categorias").appendChild(label)
    }else{
        var label = document.createElement("label");
        label.classList = "textosCat categorias temporadas"
        label.textContent = producto["temp"]
        document.getElementById("categorias").appendChild(label)
    }

    var label = document.createElement("label");
    label.classList = "textosCat categorias año"
    label.textContent = producto["annio"]
    document.getElementById("categorias").appendChild(label)

    for(var j = 0; j<5; j++ ){
        var span = document.createElement("span")
        if(j<producto["rating"]){
            span.classList = "fa fa-star checked"
        }else{
            span.classList = "fa fa-star unchecked"
        }
        document.getElementById("rating").appendChild(span)
    }

    if(producto["serie"] !== 0){
       
        for(var i = 0; i<producto["serie"].length; i++){
            var li = document.createElement("li");
            var a = document.createElement("a");
            
            a.classList = "dropdown-item"
            a.id = i
            a.href = "#"
            a.onclick = function(){
                localStorage.setItem("temp", this.id);
               //document.getElementById("capitulos").remove(li)
                
               document.getElementById("capitulos").innerHTML = "";
                for(var x = 0; x<producto["serie"][this.id]["episodios"]; x++){
                    var li2 = document.createElement("li");
                    var a2 = document.createElement("a");

                    a2.classList = "dropdown-item"
                    a2.href = "#"
                    a2.textContent = "Capitulo " + (x+1)
                    a2.id = "Temporada"+(this.id+1)
                    li2.appendChild(a2)
                    document.getElementById("capitulos").appendChild(li2)
                }
            
            }
            a.textContent = "Temporada " + (i+1)

            li.appendChild(a)
            
            document.getElementById("temporadas").appendChild(li)
        }
    }

    for(var i = 0; i<producto["direccion"].length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
        a.id = producto["direccion"][i]["id"];
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "infoCreativoAdmin";
        }
        img.src = producto["direccion"][i]["foto"];
        img.classList = "imagenPerfil";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
        figcaption.textContent = producto["direccion"][i]["titulo"] + ": "+ producto["direccion"][i]["nombre"];
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("direccion").appendChild(div)
    }

    for(var i = 0; i<producto["reparto"].length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
        a.id = producto["reparto"][i]["id"];
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "infoCreativoAdmin";
        }
        img.src = producto["reparto"][i]["foto"];
        img.classList = "imagenPerfil";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
        figcaption.textContent = producto["reparto"][i]["nombre"];
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("reparto").appendChild(div)
    }

    for(var i = 0; i<producto["escenas"].length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
       
      
        
        img.src = producto["escenas"][i];
        img.classList = "imagenPerfil";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
       
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("escenas").appendChild(div)
    }

    for(var i = 0; i<producto["plataformas"].length; i++){
        var label  = document.createElement("label");
        label.classList = "textos categorias "
        label.textContent =producto["plataformas"][i]
        document.getElementById("plataformas").appendChild(label)
    }

    for(var i = 0; i<producto["comentarios"].length; i++){
        var div = document.createElement("div")
        var div2 = document.createElement("div")
        var div3 = document.createElement("div")
        var label  = document.createElement("label");
        var div4 = document.createElement("div")


        div.classList = "cont contComentarios"
        div2.classList = "textos titulo usr"
        div2.textContent = producto["comentarios"][i]["usuario"] + " - " + producto["comentarios"][i]["annio"]

        div.appendChild(div2)
        label.classList = "textos"
        label.textContent = producto["comentarios"][i]["comentario"]
        
        div3.appendChild(label)
        
        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<producto["comentarios"][i]["rating"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div4.appendChild(span)
        }

        div3.appendChild(div4)
        div.appendChild(div3)
        
        document.getElementById("comentarios").appendChild(div)
    }

}
function cargaCategorias(){
    

    var label
}