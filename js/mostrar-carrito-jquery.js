//Mostrar Ocultar Carrito//
$(document).ready( () => {
$('#carrito').hide();
})

$("#boton-carrito").on("click", mostrarCarrito);

function mostrarCarrito() {
  $("#carrito").slideToggle();
}


