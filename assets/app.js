$(function(){
    // Para_pruedas
    // $('input').css("bacjground-color", "yellow")
    //const nombre = $('#txtNombre').val();
    //const cedula = $('#txtCedula').val();

    // cambiar/signar
    $('#txtNombre').val('Otro fulano');
    //alert($('#txNombre').val());
    $('#txtNombre').val('Dario');

    // añadir evento clic al boton
    $('#btnEnviar').on('clic', function(){
        // cuando hiciste clic, se ejecutara aqui
        alert('Hiciste clic');
    });

});