
var peliculasPop = [{poster: "resources/fotos/poster1.jpg", 
                    titulo: "The Imitation Game", id:1}]

var productosPop = [{poster: "resources/fotos/poster1.jpg", 
                    titulo: "The Imitation Game", id:1}, 

                    {poster: "resources/fotos/poster2.jpg", 
                    titulo: "The Last of Us", id:1},

                    {poster: "resources/fotos/poster3.jpg", 
                    titulo: "Planeta Tierra", id:1}]
function cargaLanding(){
    for(var i= 0; i<= peliculasPop.length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
        a.id = peliculasPop[i]["id"];
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }
        img.src = peliculasPop[i]["poster"];
        img.classList = "imagen";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
        figcaption.textContent = peliculasPop[i]["titulo"];
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("scroll").appendChild(div)
    }
}

function cargaLandingReg(){
    for(var i= 0; i<= peliculasPop.length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
        a.id = peliculasPop[i]["id"];
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }
        img.src = peliculasPop[i]["poster"];
        img.classList = "imagen";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
        figcaption.textContent = peliculasPop[i]["titulo"];
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("scroll").appendChild(div)
    }
}

function cargaLandingAdmin(){
    for(var i= 0; i< productosPop.length; i++){
        var div = document.createElement("div");
        var a = document.createElement("a");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var figcaption = document.createElement("figcaption");

        div.classList = "contenido";
        a.id = productosPop[i]["id"];
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoAdmin";
        }
        img.src = productosPop[i]["poster"];
        img.classList = "imagen";
        img.alt = "Poster Pelicula";

        figcaption.classList = "titulos";
        figcaption.textContent = productosPop[i]["titulo"];
        

     
        figure.appendChild(img);
        figure.appendChild(figcaption);
        a.appendChild(figure);
        div.appendChild(a);
        document.getElementById("scroll").appendChild(div)
    }
}

