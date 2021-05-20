

$(document).ready(() => {
  $("#btnReserva").on('click', function () {
    let nombre = $("#nombre-formulario").val();
    let email = $("#correo-formulario").val();
    let personas = $("#personas-formulario").val();
    let fecha = $("#fecha-formulario").val();
    let confirmacion = $('#confirmacion-formulario');

    if (nombre == "") {
      $("#mensaje-nombre").fadeIn();
      return false;
    } else {
      $("#mensaje-nombre").fadeOut();

      if (email == "") {
        $("#mensaje-email").fadeIn();
        return false;
      } else {
        $("#mensaje-email").fadeOut();

        if (personas == "") {
          $("#mensaje-personas").fadeIn();
          return false;
        } else {
          $("#mensaje-personas").fadeOut();

          if (fecha == "") {
            $("#mensaje-fecha").fadeIn();
            return false;
          } else {
            $("#mensaje-fecha").fadeOut();
            console.log("Formulario enviado");
          }
        }
      }
    };

    confirmacion.fadeIn();
    confirmacion.text(`${nombre}, su reserva del dia ${fecha} para ${personas} personas, ha sido confirmada.`);

  });
});

$('#vaciar-form').on('click', function(){
  $('#confirmacion-formulario').css('display', 'none');
  $('.errorForm').css('display', 'none');
})