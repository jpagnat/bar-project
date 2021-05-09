function enviarForm () {

    let nombre = $('#nameForm').val();
    let apellido = $('#apellidoForm').val();
    let personas = $("#cantidadPersonas").val();
    let fecha = $('#fecha').val();

    let url = "https://jsonplaceholder.typicode.com/posts";
    let dataEnviar = {
        nombre: nombre,
        apellido: apellido,
        personas: personas,
        fecha: fecha
    }

    $.ajax({
        type: 'POST',
        url: url,
        data: dataEnviar,
        success: function (data) {
            $("#respuesta").append(
              `<p> ${data.nombre} ${data.apellido} . Su reserva ha sido confirmada para ${data.personas} personas. Lo esperamos el dia ${data.fecha}!</p>
              <button id="btnCerrar">Cerrar</button>`
            );
            $('#respuesta').show();
          },
    });

    return false;
}


$('#btnReserva').on('click', enviarForm);


/*
function cerrarConfirmacion (e) {
  e.preventDefault
  $('#respuesta').css('display', 'none');
}

$('#btnCerrar').on('click', cerrarConfirmacion);*/