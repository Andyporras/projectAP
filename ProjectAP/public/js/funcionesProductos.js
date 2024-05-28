var series = [{poster: "resources/fotos/poster2.jpg",
                titulo: "The Last of Us",
                sinopsis: "Sinopsis de la serie",
                estrellas: 4,
                categorias: ["Terror", "Drama"],
                temporadas: "1T 9EP",
                annio: 2023,
                id: 1}];

var pelis = [{poster: "resources/fotos/poster1.jpg",
                titulo: "The Imitation Game",
                sinopsis: "Sinopsis de la pelicula",
                estrellas: 3,
                categorias: ["Historico", "Drama"],
                duracion: "1h 35min",
                annio: 2014,
                id: 1}];

var docus = [{poster: "resources/fotos/poster3.jpg",
                titulo: "Planeta Tierra",
                sinopsis: "Sinopsis del documental",
                estrellas: 4,
                categorias: ["Natural"],
                duracion: "1h 35min",
                annio: 2006,
                id: 1}];

var compras = [{poster: "resources/fotos/poster3.jpg",
                titulo: "Planeta Tierra",
                sinopsis: "Sinopsis del documental",
                estrellas: 4,
                categorias: ["Natural"],
                duracion: "1h 35min",
                temporadas: 0,
                annio: 2006,
                id: 1,
                fecha: "12/06/2024",
                coste: "$5.99"},
                
                {poster: "resources/fotos/poster1.jpg",
                titulo: "The Imitation Game",
                sinopsis: "Sinopsis de la pelicula",
                estrellas: 3,
                categorias: ["Historico", "Drama"],
                duracion: "1h 35min",
                temporadas: 0,
                annio: 2014,
                id: 1,
                fecha: "12/06/2024",
                coste: "$5.99"},

                {poster: "resources/fotos/poster2.jpg",
                titulo: "The Last of Us",
                sinopsis: "Sinopsis de la serie",
                estrellas: 4,
                categorias: ["Terror", "Drama"],
                temporadas: "1T 9EP",
                annio: 2023,
                id: 1,
                fecha: "12/06/2024",
                coste: "$5.99"}]

var carrito = [{poster: "resources/fotos/poster3.jpg",
                titulo: "Planeta Tierra",
                sinopsis: "Sinopsis del documental",
                estrellas: 4,
                categorias: ["Natural"],
                duracion: "1h 35min",
                temporadas: 0,
                annio: 2006,
                id: 1,
                coste: "$5.99"},
                
                {poster: "resources/fotos/poster1.jpg",
                titulo: "The Imitation Game",
                sinopsis: "Sinopsis de la pelicula",
                estrellas: 3,
                categorias: ["Historico", "Drama"],
                duracion: "1h 35min",
                temporadas: 0,
                annio: 2014,
                id: 1,
                coste: "$5.99"},

                {poster: "resources/fotos/poster2.jpg",
                titulo: "The Last of Us",
                sinopsis: "Sinopsis de la serie",
                estrellas: 4,
                categorias: ["Terror", "Drama"],
                temporadas: "1T 9EP",
                annio: 2023,
                id: 1,
                coste: "$5.99"}]

var productos = [{poster: "resources/fotos/poster3.jpg",
                titulo: "Planeta Tierra",
                sinopsis: "Sinopsis del documental",
                estrellas: 4,
                categorias: ["Natural"],
                duracion: "1h 35min",
                temporadas: 0,
                annio: 2006,
                id: 1},
                
                {poster: "resources/fotos/poster1.jpg",
                titulo: "The Imitation Game",
                sinopsis: "Sinopsis de la pelicula",
                estrellas: 3,
                categorias: ["Historico", "Drama"],
                duracion: "1h 35min",
                temporadas: 0,
                annio: 2014,
                id: 1},

                {poster: "resources/fotos/poster2.jpg",
                titulo: "The Last of Us",
                sinopsis: "Sinopsis de la serie",
                estrellas: 4,
                categorias: ["Terror", "Drama"],
                temporadas: "1T 9EP",
                annio: 2023,
                id: 1}]

var wishlist = [{poster: "resources/fotos/poster3.jpg",
                titulo: "Planeta Tierra",
                sinopsis: "Sinopsis del documental",
                estrellas: 4,
                categorias: ["Natural"],
                duracion: "1h 35min",
                temporadas: 0,
                annio: 2006,
                id: 1},
                
                {poster: "resources/fotos/poster1.jpg",
                titulo: "The Imitation Game",
                sinopsis: "Sinopsis de la pelicula",
                estrellas: 3,
                categorias: ["Historico", "Drama"],
                duracion: "1h 35min",
                temporadas: 0,
                annio: 2014,
                id: 1},

                {poster: "resources/fotos/poster2.jpg",
                titulo: "The Last of Us",
                sinopsis: "Sinopsis de la serie",
                estrellas: 4,
                categorias: ["Terror", "Drama"],
                temporadas: "1T 9EP",
                annio: 2023,
                id: 1}]

function cargaSeriesNoReg(){

    
    for(var i = 0; i<series.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
    
       

        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = series[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = series[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }
       

        a2.id = series[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }

        a3.id = series[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }

        label5.classList = "textos"
        label5.textContent = series[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = series[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<series[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
        console.log(series[i]["categorias"].length)
        for(var j =0; j<series[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + series[i]["categorias"][j].toLowerCase();
            label.textContent = series[i]["categorias"][j];
            console.log(series[i]["categorias"][j])

            div6.appendChild(label)
        }
        
        
        label2.classList = "textos categorias temporadas"
        label2.textContent = series[i]["temporadas"]

        label3.classList = "textos categorias año"
        label3.textContent = series[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}
function cargaPelisNoReg(){

    
    for(var i = 0; i<pelis.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
    
       

        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = pelis[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = pelis[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }
       

        a2.id = pelis[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }

        a3.id = pelis[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }

        label5.classList = "textos"
        label5.textContent = pelis[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = pelis[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<pelis[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
        console.log(pelis[i]["categorias"].length)
        for(var j =0; j<pelis[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + pelis[i]["categorias"][j].toLowerCase();
            label.textContent = pelis[i]["categorias"][j];
         

            div6.appendChild(label)
        }
        
        
        label2.classList = "textos categorias horas"
        label2.textContent = pelis[i]["duracion"]

        label3.classList = "textos categorias año"
        label3.textContent = pelis[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}
function cargaDocusNoReg(){

    
    for(var i = 0; i<docus.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
    
       

        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = docus[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = docus[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }
       

        a2.id = docus[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }

        a3.id = docus[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoNoReg";
        }

        label5.classList = "textos"
        label5.textContent = docus[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = docus[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<docus[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
  
        for(var j =0; j<docus[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + docus[i]["categorias"][j].toLowerCase();
            label.textContent = docus[i]["categorias"][j];
   

            div6.appendChild(label)
        }
        
        
        label2.classList = "textos categorias horas"
        label2.textContent = docus[i]["duracion"]

        label3.classList = "textos categorias año"
        label3.textContent = docus[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}

function cargaSeriesReg(){

    
    for(var i = 0; i<series.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
        var div7 = document.createElement("div")
        var button = document.createElement("button")
        var button2 = document.createElement("button")

        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = series[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = series[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }
       

        a2.id = series[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        a3.id = series[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        label5.classList = "textos"
        label5.textContent = series[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = series[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<series[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
        console.log(series[i]["categorias"].length)
        for(var j =0; j<series[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + series[i]["categorias"][j].toLowerCase();
            label.textContent = series[i]["categorias"][j];
            console.log(series[i]["categorias"][j])

            div6.appendChild(label)
        }
        
        
        label2.classList = "textos categorias temporadas"
        label2.textContent = series[i]["temporadas"]

        label3.classList = "textos categorias año"
        label3.textContent = series[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        div7.classList = "col derecha"
        button.classList = "boton botonesDerecha"
        button.textContent = "+"

        button2.classList = "boton botonesDerecha"
        var i = document.createElement("i")
        i.classList = "fa fa-heart"

        button2.appendChild(i)
        div7.appendChild(button)
        div7.appendChild(button2)
        div3.appendChild(div7)
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}
function cargaPelisReg(){

    
    for(var i = 0; i<pelis.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
        var div7 = document.createElement("div")
        var button = document.createElement("button")
        var button2 = document.createElement("button")

        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = pelis[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = pelis[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }
       

        a2.id = pelis[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        a3.id = pelis[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        label5.classList = "textos"
        label5.textContent = pelis[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = pelis[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<pelis[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
        console.log(pelis[i]["categorias"].length)
        for(var j =0; j<pelis[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + pelis[i]["categorias"][j].toLowerCase();
            label.textContent = pelis[i]["categorias"][j];
         

            div6.appendChild(label)
        }
        
        
        label2.classList = "textos categorias horas"
        label2.textContent = pelis[i]["duracion"]

        label3.classList = "textos categorias año"
        label3.textContent = pelis[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        div7.classList = "col derecha"
        button.classList = "boton botonesDerecha"
        button.textContent = "+"

        button2.classList = "boton botonesDerecha"
        var i = document.createElement("i")
        i.classList = "fa fa-heart"

        button2.appendChild(i)
        div7.appendChild(button)
        div7.appendChild(button2)
        div3.appendChild(div7)
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}
function cargaDocusReg(){

    
    for(var i = 0; i<docus.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
    
        var div7 = document.createElement("div")
        var button = document.createElement("button")
        var button2 = document.createElement("button")
        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = docus[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = docus[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }
       

        a2.id = docus[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        a3.id = docus[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        label5.classList = "textos"
        label5.textContent = docus[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = docus[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<docus[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
  
        for(var j =0; j<docus[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + docus[i]["categorias"][j].toLowerCase();
            label.textContent = docus[i]["categorias"][j];
   

            div6.appendChild(label)
        }
        
        
        label2.classList = "textos categorias horas"
        label2.textContent = docus[i]["duracion"]

        label3.classList = "textos categorias año"
        label3.textContent = docus[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        div7.classList = "col derecha"
        button.classList = "boton botonesDerecha"
        button.textContent = "+"

        button2.classList = "boton botonesDerecha"
        var i = document.createElement("i")
        i.classList = "fa fa-heart"

        button2.appendChild(i)
        div7.appendChild(button)
        div7.appendChild(button2)
        div3.appendChild(div7)
        div2.appendChild(div3)
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}

function cargaWishlist(){

    
    for(var i = 0; i<wishlist.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
    
        var div7 = document.createElement("div")
        var button = document.createElement("button")
        var button2 = document.createElement("button")
        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = wishlist[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = wishlist[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }
       

        a2.id = wishlist[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        a3.id = wishlist[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        label5.classList = "textos"
        label5.textContent = wishlist[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = wishlist[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<wishlist[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
  
        for(var j =0; j<wishlist[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + wishlist[i]["categorias"][j].toLowerCase();
            label.textContent = wishlist[i]["categorias"][j];
   

            div6.appendChild(label)
        }
        
        if(wishlist[i]["temporadas"] === 0){
            label2.classList = "textos categorias horas"
            label2.textContent = wishlist[i]["duracion"]
        }else{
            label2.classList = "textos categorias temporadas"
            label2.textContent = wishlist[i]["temporadas"]
        }
        

        label3.classList = "textos categorias año"
        label3.textContent = wishlist[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        div7.classList = "col derecha"
        

        button2.classList = "boton botonesDerecha"
        var o = document.createElement("i")
        o.classList = "fa fa-heart"

        button2.appendChild(o)
     
        div7.appendChild(button2)
        div3.appendChild(div7)
        div2.appendChild(div3)
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}

function cargaHistorial(){

    
    for(var i = 0; i<compras.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
    
        var div7 = document.createElement("div")
        var button = document.createElement("button")
        var button2 = document.createElement("button")
        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = compras[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = compras[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }
       

        a2.id = compras[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        a3.id = compras[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        label5.classList = "textos"
        label5.textContent = compras[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = compras[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<compras[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
  
        for(var j =0; j<compras[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + compras[i]["categorias"][j].toLowerCase();
            label.textContent = compras[i]["categorias"][j];
   

            div6.appendChild(label)
        }
        
        if(compras[i]["temporadas"] === 0){
            label2.classList = "textos categorias horas"
            label2.textContent = compras[i]["duracion"]
        }else{
            label2.classList = "textos categorias temporadas"
            label2.textContent = compras[i]["temporadas"]
        }
        

        label3.classList = "textos categorias año"
        label3.textContent = compras[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        div7.classList = "col derecha"
        
        var label7 = document.createElement("label")
        var label8 = document.createElement("label")
        label7.classList = "textoDerecha"
        label7.textContent = compras[i]["fecha"]

        label8.classList = "textoDerecha abajo"
        label8.textContent = compras[i]["coste"]
        var o = document.createElement("i")
        o.classList = "fa fa-heart"

        button2.appendChild(o)
     
        div7.appendChild(label7)
        div7.appendChild(label8)
        div3.appendChild(div7)
        div2.appendChild(div3)
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}

function cargaCarrito(){

    
    for(var i = 0; i<carrito.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
    
        var div7 = document.createElement("div")
        var button = document.createElement("button")
        var button2 = document.createElement("button")
        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = carrito[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = carrito[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }
       

        a2.id = carrito[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        a3.id = carrito[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoReg";
        }

        label5.classList = "textos"
        label5.textContent = carrito[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = carrito[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<carrito[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
  
        for(var j =0; j<carrito[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + carrito[i]["categorias"][j].toLowerCase();
            label.textContent = carrito[i]["categorias"][j];
   

            div6.appendChild(label)
        }
        
        if(carrito[i]["temporadas"] === 0){
            label2.classList = "textos categorias horas"
            label2.textContent = carrito[i]["duracion"]
        }else{
            label2.classList = "textos categorias temporadas"
            label2.textContent = carrito[i]["temporadas"]
        }
        

        label3.classList = "textos categorias año"
        label3.textContent = carrito[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        div7.classList = "col derecha"
        
        var label7 = document.createElement("label")
        var label8 = document.createElement("label")
        label7.classList = "textoDerecha"
        label7.textContent = carrito[i]["fecha"]

        label8.classList = "textoDerecha abajo"
        label8.textContent = carrito[i]["coste"]
        var o = document.createElement("i")
        o.classList = "fa fa-heart"

        button2.appendChild(o)
        button.textContent = "X"
        button.classList = "boton botonesDerecha"
        div7.appendChild(button)
        div7.appendChild(label8)
        div3.appendChild(div7)
        div2.appendChild(div3)
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}

function cargaProductos(){

    
    for(var i = 0; i<productos.length; i++){
        var div = document.createElement("div");
        var div2 = document.createElement("div");
        var div3 = document.createElement("div");
        var div4 = document.createElement("div");
        var a = document.createElement("a");
        var img = document.createElement("img");
        var div5 = document.createElement("div");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
       
    
        var div7 = document.createElement("div")
        var button = document.createElement("button")
        var button2 = document.createElement("button")
        var div6 = document.createElement("div");

        
        var label2 = document.createElement("label");
        var label3 = document.createElement("label");
        var label4 = document.createElement("label");
        var label5 = document.createElement("label");
        var label6 = document.createElement("label");

        div.classList = "producto"
        div2.classList = "container text-center"
       
        div3.classList = "row"
        div4.classList = "col"
        a.href = ""
        img.classList = "imagen"
        img.src = productos[i]["poster"]
        img.alt = "Poster Serie"
        div5.classList = "col centro"

        a.id = productos[i]["id"]
        a.href = "#"
        a.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoAdmin";
        }
       

        a2.id = productos[i]["id"]
        a2.href = "#"
        a2.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoAdmin";
        }

        a3.id = productos[i]["id"]
        a3.href = "#"
        a3.onclick = function(){
            localStorage.setItem("peli", this.id);
            location.href = "productoAdmin";
        }

        label5.classList = "textos"
        label5.textContent = productos[i]["sinopsis"]

        label6.classList = "textos titulo"
        label6.textContent = productos[i]["titulo"]
    




        label4.classList = "textos rating"
        label4.textContent = "Rating: "




      
        div3.appendChild(div4)
        a.appendChild(img)
        div4.appendChild(a)

        a2.appendChild(label6)
        div5.appendChild(a2)
        
        a3.appendChild(label5)
        div5.appendChild(a3)
        div5.appendChild(label4)
       

        for(var j = 0; j<5; j++ ){
            var span = document.createElement("span")
            if(j<productos[i]["estrellas"]){
                span.classList = "fa fa-star checked"
            }else{
                span.classList = "fa fa-star unchecked"
            }
            div5.appendChild(span)
        }
  
        for(var j =0; j<productos[i]["categorias"].length; j++){
            var label = document.createElement("label");
            label.classList = "textos categorias " + productos[i]["categorias"][j].toLowerCase();
            label.textContent = productos[i]["categorias"][j];
   

            div6.appendChild(label)
        }
        
        if(productos[i]["temporadas"] === 0){
            label2.classList = "textos categorias horas"
            label2.textContent = productos[i]["duracion"]
        }else{
            label2.classList = "textos categorias temporadas"
            label2.textContent = wishlist[i]["temporadas"]
        }
        

        label3.classList = "textos categorias año"
        label3.textContent = productos[i]["annio"]

        div6.appendChild(label2)
        div6.appendChild(label3)
        div5.appendChild(div6)
        div3.appendChild(div5)

        div7.classList = "col derecha"
        
        var label7 = document.createElement("label")
        var label8 = document.createElement("label")
        label7.classList = "textoDerecha"
        label7.textContent = compras[i]["fecha"]

        label8.classList = "textoDerecha abajo"
        label8.textContent = compras[i]["coste"]
        var o = document.createElement("i")
        o.classList = "fa fa-heart"

        button2.appendChild(o)
        button.textContent = "X"
        button.classList = "boton botonesDerecha"
        
        div2.appendChild(div3)
        div2.appendChild(div3)
        div.appendChild(div2)
        document.getElementById("productos").appendChild(div)
    }
}
