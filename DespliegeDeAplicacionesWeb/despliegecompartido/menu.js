document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.getElementById('boton-menu');
    const listaOpciones = document.getElementById('lista-opciones');

    botonMenu.addEventListener('click', function() {
        if (listaOpciones.style.display === 'block') {
            listaOpciones.style.display = 'none';
        } else {
            listaOpciones.style.display = 'block';
        }
    });
});