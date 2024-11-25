// a) Mostrar la última actualización
function mostrarUltimaActualizacion() {
    const ultimaActualizacion = document.lastModified;
    alert(`La última actualización del documento fue: ${ultimaActualizacion}`);
}

// b) Mostrar la URL de referencia
function mostrarReferer() {
    const referer = document.referrer || "No hay referencia previa";
    alert(`URL de referencia: ${referer}`);
}

// c) Mostrar el título del documento
function mostrarTitulo() {
    const titulo = document.title;
    alert(`El título del documento es: ${titulo}`);
}

// d) Mostrar la URL completa
function mostrarURLCompleta() {
    const urlCompleta = document.URL;
    alert(`La URL completa del documento es: ${urlCompleta}`);
}

// e1) Sobreescribir contenido del documento
function sobreescribirDocumento() {
    document.open();
    document.write("<p>Este es un contenido completamente nuevo</p>");
    document.close();
}

// e2) Escribir sin sobreescribir
function escribirSinSobreescribir() {
    const nuevoParrafo = document.createElement("p");
    nuevoParrafo.innerText = "Este contenido se añade sin sobreescribir.";
    document.body.appendChild(nuevoParrafo);
}
