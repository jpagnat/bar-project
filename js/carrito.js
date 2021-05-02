/*Mostrar y Ocultar Carrito*/

$("#boton-carrito").on("click", mostrarCarrito);

function mostrarCarrito() {
  $("#carrito").slideToggle();
}


/*Vaciar Carrito y Comprar*/

$('#boton-comprar').on('click', function() {
  alert('Su compra ha sido registrada');
  $('.inCarrito').empty();
})

$('#boton-vaciar').on('click' , function(){
  $('.inCarrito').empty();
})


/*Agregar producto al carrito*/

$("#agregar-golden").on("click", agregarGolden);

const golden  = { estilo : "Golden", precio : 100};

let cantidadGolden = 0;
let compraGolden;

function agregarGolden() {

  if (cantidadGolden === 0) {
    cantidadGolden++;
    compraGolden = $("#listaCarrito").prepend("<li id='listaGolden'>Golden " + "<span id='cGolden'>" + cantidadGolden + " </span> <span> $</span> <span id='pGolden'>" + (cantidadGolden*100) + "</span>" + "</li>");
    localStorage.setItem('compraGld', compraGolden);
  } else if (cantidadGolden >0) {
    cantidadGolden++;
    $('#cGolden').html(cantidadGolden);
    $('#pGolden').html(cantidadGolden*100);
  }
}



$("#agregar-honey").on("click", agregarHoney);

const honey  = { estilo : "Honey", precio : 100};

let cantidadHoney = 0;
let compraHoney;

function agregarHoney() {

  if (cantidadHoney === 0) {
    cantidadHoney++;
    compraHoney = $("#listaCarrito").prepend("<li id='listaHoney'>Honey " + "<span id='cHoney'>" + cantidadHoney + " </span> <span> $</span> <span id='pHoney'>" + (cantidadHoney*100) + "</span>" + "</li>");
    localStorage.setItem('compraHny', compraGolden);
  } else if (cantidadHoney >0) {
    cantidadHoney++;
    $('#cHoney').html(cantidadHoney);
    $('#pHoney').html(cantidadHoney*100);
  }
}


$("#agregar-ipa").on("click", agregarIpa);

const ipa  = { estilo : "Ipa", precio : 100};

let cantidadIpa = 0;
let compraIpa;

function agregarIpa() {

  if (cantidadIpa === 0) {
    cantidadIpa++;
    compraIpa = $("#listaCarrito").prepend("<li id='listaIpa'>Ipa " + "<span id='cIpa'>" + cantidadIpa + " </span> <span> $</span> <span id='pIpa'>" + (cantidadIpa*100) + "</span>" + "</li>");
    localStorage.setItem('compraIpa', compraIpa);
  } else if (cantidadIpa >0) {
    cantidadIpa++;
    $('#cIpa').html(cantidadIpa);
    $('#pIpa').html(cantidadIpa*100);
  }
}



$("#agregar-redirish").on("click", agregarRed);

const red  = { estilo : "Red Irish", precio : 100};

let cantidadRed = 0;
let compraRed;

function agregarRed() {

  if (cantidadRed === 0) {
    cantidadRed++;
    compraRed = $("#listaCarrito").prepend("<li id='listaRed'>Red Irish " + "<span id='cRed'>" + cantidadGolden + " </span> <span> $</span> <span id='pRed'>" + (cantidadRed*100) + "</span>" + "</li>");
    localStorage.setItem('compraRed', compraRed);
  } else if (cantidadRed >0) {
    cantidadRed++;
    $('#cRed').html(cantidadRed);
    $('#pRed').html(cantidadRed*100);
  }
}



$("#agregar-negra").on("click", agregarNegra);

const negra  = { estilo : "Negra", precio : 100};

let cantidadNegra = 0;
let compraNegra;

function agregarNegra() {

  if (cantidadNegra === 0) {
    cantidadNegra++;
    compraNegra = $("#listaCarrito").prepend("<li id='listaNegra'>Negra " + "<span id='cNegra'>" + cantidadNegra + " </span> <span> $</span> <span id='pNegra'>" + (cantidadNegra*100) + "</span>" + "</li>");
    localStorage.setItem('compraNgr', compraNegra);
  } else if (cantidadNegra >0) {
    cantidadNegra++;
    $('#cNegra').html(cantidadNegra);
    $('#pNegra').html(cantidadNegra*100);
  }
}




$("#agregar-dobleipa").on("click", agregarDoble);

const doble  = { estilo : "Doble Ipa", precio : 100};

let cantidadDoble = 0;
let compraDoble;

function agregarDoble() {

  if (cantidadDoble === 0) {
    cantidadDoble++;
    compraDoble = $("#listaCarrito").prepend("<li id='listaDoble'>Doble Ipa " + "<span id='cDoble'>" + cantidadDoble + " </span> <span> $</span> <span id='pDoble'>" + (cantidadDoble*100) + "</span>" + "</li>");
    localStorage.setItem('compraDbl', compraDoble);
  } else if (cantidadDoble >0) {
    cantidadDoble++;
    $('#cDoble').html(cantidadDoble);
    $('#pDoble').html(cantidadDoble*100);
  }
}
