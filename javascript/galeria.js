var galeria = document.getElementById("galeria")
var v = "" 
var arreglo = ["imagenes/img1.jpeg", "imagenes/img2.jpeg", "imagenes/img3.jpeg", "imagenes/img4.jpeg", "imagenes/img5.jpeg", "imagenes/img6.jpeg", "imagenes/img7.jpeg", "imagenes/img8.jpeg", "imagenes/img9.jpeg", "imagenes/img10.jpeg", "imagenes/img11.jpeg", "imagenes/img12.jpeg"]
var textos = ["Roma-Italia", "Madrid-España", "Valencia-España", "Roma-Italia", "Paris-Francia", "Paris-Francia", "Madrid-España", "Valencia-España", "Roma-Italia", "Valencia-España", "Paris-Francia", "Roma-Italia"]
var cantidad = arreglo.length

function hacerPruebas(imagen, href, texto){
    return `<a href="${href}" class="contenedor-imagen-galeria">
        <img src="${imagen}" alt="">
        <div class="posicion-absolute"> ${texto}
        </div>
    </a>`;
}

var contenedorModal = document.getElementById("contenedor-modal")
var x = ""

function declararId(numero){
    return `img${numero}` 
}

function declararHref(numero){
    if(numero == 0) {
        numero = 12
    }
    if(numero ==13) {
        numero = 1
    }
    return `#img${numero}`
}

function modal(id, href1, href2, imagen){
    return `<div class="modal" id="${id}">
        <a class="flechas" href="${href1}"><span>&#60;</span></a>
        <a class="imagen-galeria" href="${href2}"><img src="${imagen}"></a>
        <a class="flechas" href="${href2}"><span>></span></a>
        <a class="cerrar" href=""><span>X</span></a>
    </div>`
}
for(var i=0; i < cantidad; i++){
    v= `${v} ${hacerPruebas(arreglo[i], declararHref(i+1), textos[i])}`;
    var idGenerado = declararId(i+1)
    var href1Generado = declararHref(i)
    var href2Generado = declararHref(i+2)
    var imagenGenerada = arreglo[i]
    var valor = modal(idGenerado, href1Generado, href2Generado, imagenGenerada)
    x = `${x} ${valor}`;
}

galeria.innerHTML = v

contenedorModal.innerHTML = x