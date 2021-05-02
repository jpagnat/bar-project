$('#btnSi').on('click', mostrarPagina);

function mostrarPagina () {
    $('#paginaInicio').show();
    $('#seguridad').hide();
}

$('#btnNo').on('click' , ocultarPagina);

function ocultarPagina () {
    $('#noMayor').show();
    $('#seguridad').hide();
}