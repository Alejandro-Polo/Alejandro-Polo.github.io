import { valida, registra, actualizarUsuario, eliminarUsuario} from "./login.js";

// añadimos los eventos a los botones y llamamos a las funcionesque se importan 
// Evento para logearte
document.getElementById("botonLogin").addEventListener("click", () => {
    const user = document.getElementById("loginUsuario").value;
    const pass = document.getElementById("loginPassword").value;
    valida(user, pass);
});
// Evento para añadir usuarios
document.getElementById("botonRegistro").addEventListener("click", async () => {
    const nuevoUsuario = document.getElementById("nuevoUsuario").value;
    const nuevaPassword = document.getElementById("nuevaPassword").value;
    await registra(nuevoUsuario, nuevaPassword);
});
// Evento para actualizar usuarios
document.getElementById("botonActualizar").addEventListener("click", async () => {
    const id = document.getElementById("actualizarId").value;
    const username = document.getElementById("actualizarUsuario").value;
    const password = document.getElementById("actualizarPassword").value;

    const nuevosDatos = { username, password };
    await actualizarUsuario(id, nuevosDatos);
});

// Evento para eliminar usuarios
document.getElementById("botonEliminar").addEventListener("click", async () => {
    const id = document.getElementById("eliminarId").value;
    await eliminarUsuario(id);
});