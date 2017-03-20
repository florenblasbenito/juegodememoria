function newitemKeyPress(e) {
    if (e.which == 13) {
        //Validamos el contenido
        var tarea = $(this).val().trim();
        if (tarea != '') {
            //Buscamos la plantilla del elemento
            var plantilla = $('#plantillaTarea').text();
            //Sustituimos su contenido
            var nuevaTarea = plantilla.replace('{{Tarea}}', tarea);
            //La insertamos en la lista
            $('.todo-list').append(nuevaTarea);
            //Borramos el contenido del cuadro de texto
            $(this).val("");

        }


    }
}

function borraTarea() {
    var elemento = $(this).parent().closest('li');
    $(this).fadeOut();
    elemento.fadeOut('slow', function(){
        $(this).remove();
    });
}

function completaTarea() {
    $(this).toggleClass('done');
}

$(function () {
    $('.add-todo .new-item').on('keypress', newitemKeyPress).focus();
    $('.todo-list').on('click', '.delete-button', borraTarea);
    $('.todo-list').on('click', 'span', completaTarea);
});