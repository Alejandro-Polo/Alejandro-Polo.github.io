// a) Mostrar que se ha pulsado el marcador
function mostrarMarcador() {
    alert("Has activado el marcador llamado 'Marcador'");
}

// b) Mostrar host
function mostrarHost() {
    const host = window.location.host;
    document.getElementById("resultado").innerText = `Host: ${host}`;
}

// c) URL de la página
function mostrarURLCompleta() {
    const url = window.location.href;
    document.getElementById("resultado").innerText = `URL completa: ${url}`;
}

// d) Navegar a otra dirección
function navegarADireccion() {
    const nuevaDireccion = prompt("Introduce una nueva URL:");
    if (nuevaDireccion) {
        window.location.href = nuevaDireccion;
    }
}

// e) Mostrar Protocolo
function mostrarProtocolo() {
    const protocolo = window.location.protocol;
    document.getElementById("resultado").innerText = `Protocolo: ${protocolo}`;
}

// f) Recargar página
function recargarPagina() {
    window.location.reload();
}
