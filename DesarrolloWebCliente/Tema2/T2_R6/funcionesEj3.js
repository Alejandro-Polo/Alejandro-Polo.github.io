let ventanaNueva;

// a) Mostrar opción pulsada
function mostrarOpcion(id) {
    const ventana = window.open("", `VentanaOpcion${id}`, "width=350,height=350");
    ventana.document.write(`<p>Has pulsado la opción ${id}</p>`);
}

// b) Abre una ventana y analiza si esta se ha cerrado o no
function ventanaAnalizarCierre() {
    const ventana = window.open("", "ventanaAnalizarCierre", "width=350,height=350");
    ventana.document.write("<p>Esta ventana puede ser cerrada</p>");
    setTimeout(() => {
        if (ventana.closed) {
            alert("La ventana se ha cerrado");
        } else {
            alert("La ventana sigue abierta");
        }
    }, 5000);
}

// c) Abre una ventana y pide al usuario un nuevo nombre para ella
function ventanaNuevoNombre() {
    const tituloVentana = prompt("Introduce el nombre de la nueva ventana:");
    const ventana = window.open("", tituloVentana, "width=350,height=350");
    ventana.document.write(`<p>Esta es la ventana llamada ${tituloVentana}</p>`);
}

// d1) Cierra la ventana actual
function cerrarVentanaActual() {
    const ventana = window.open("", "cerrarVentanaActual", "width=350,height=350");
    ventana.document.write("<p>La ventana actual se cerrará</p>");
    setTimeout(() => ventana.close(), 2000);
}

// d2) Cierra una ventana abierta previamente con ventanaNueva
function cerrarVentanaNueva() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.close();
    } else {
        alert("No hay ventana abierta");
    }
}

// f) Abre una ventana de tamaño 300x100 que puede ser redimensionada
function ventanaTamañoFijo() {
    ventanaNueva = window.open("", "ventanaTamañoFijo", "width=300,height=100,resizable=yes");
    ventanaNueva.document.write("<p>Esta ventana puede cambiar de tamaño</p>");
}

// g) Mejora la función anterior escribiendo un texto en la página padre
function escribirEnPadre() {
    const mensaje = prompt("Introduce el texto a escribir en la página padre:");
    ventanaNueva = window.open("", "ventanaEscribirEnPadre", "width=300,height=100,resizable=yes");
    ventanaNueva.document.write(`<p>Texto escrito: ${mensaje}</p>`);
    document.getElementById("textoPadre").innerText = mensaje;
}

// h) Mueve la ventana 50 píxeles hacia abajo y a la derecha
function moverVentana() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.moveBy(50, 50);
    } else {
        alert("No hay ventana abierta");
    }
}

// i) Posiciona la ventana en un lugar específico de la pantalla
function posicionarVentana() {
    ventanaNueva = window.open("", "ventanaPosicionada", "width=350,height=350");
    ventanaNueva.moveTo(100, 100);
    ventanaNueva.document.write("<p>Ventana posicionada en (100, 100)</p>");
}

// j) Mueve la barra de desplazamiento 10 píxeles hacia abajo
function moverBarraDesplazamiento() {
    if (ventanaNueva && !ventanaNueva.closed) {
        ventanaNueva.scrollBy(0, 10);
    } else {
        alert("No hay ventana abierta");
    }
}

// k) Desplaza la barra de desplazamiento a una posición específica
function desplazarBarra() {
    if (ventanaNueva && !ventanaNueva.closed) {
        const posicion = prompt("Introduce la posición de desplazamiento (en píxeles):");
        ventanaNueva.scrollTo(0, posicion);
    } else {
        alert("No hay ventana abierta");
    }
}