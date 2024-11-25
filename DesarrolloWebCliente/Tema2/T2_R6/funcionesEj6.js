// a) Mostrar el número de anclas (enlaces con nombre o id)
function mostrarNumeroAnclas() {
    // Selecciona todas las etiquetas <a> con un atributo id o name
    const anclas = document.querySelectorAll('a[id], a[name]');
    alert(`Número de anclas: ${anclas.length}`);
}

// b) Mostrar el texto del primer ancla
function mostrarPrimerAncla() {
    const anclas = document.querySelectorAll('a[id], a[name]');
    if (anclas.length > 0) {
        alert(`Texto del primer ancla: ${anclas[0].innerText}`);
    } else {
        alert("No hay anclas en el documento.");
    }
}

// c) Mostrar el número de imágenes
function mostrarNumeroImagenes() {
    alert(`Número de imágenes: ${document.images.length}`);
}

// d) Mostrar el ID de la primera imagen
function mostrarIdPrimeraImagen() {
    alert(`ID de la primera imagen: ${document.images[0].id}`);
}

// e) Mostrar el número de enlaces
function mostrarNumeroEnlaces() {
    alert(`Número de enlaces: ${document.links.length}`);
}

// f) Cambiar el título del documento
function cambiarTitulo() {
    const nuevoTitulo = prompt("Introduce el nuevo título para el documento:");
    if (nuevoTitulo) {
        document.title = nuevoTitulo;
    }
}
