
// función que me devuelve los usuarios que hay en el servidor
const getUsuarios = async () => {
    const response = await fetch("http://localhost:3000/user");
    const data = await response.json();
    return data;
};

// funcion que permite añadir nuevos usuarios al json server
const crearUsuario = async (usuario) => {
    const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
    });
    return response.ok;
};

// función que validara si el usuario y la contraseña estan en nuestro json server
export const valida = async (user, pass) => {
    const usuarios = await getUsuarios();
    const usuarioEncontrado = usuarios.find(
        (elemento) => elemento.username === user && elemento.password === pass
    );
    // dependiendo si usuarioEncontrado es true o false mostraremos una alerta o una redirección a otra pagina
    if (usuarioEncontrado) {
        alert(`Bienvenido ${usuarioEncontrado.username}, has iniciado sesión con éxito.`);
    } else {
        alert("Error: Usuario o contraseña incorrectos.");
    }
};
// Funcion que registra nuevos usuarios, esta comprueba que no haya uno con el mismo nombre y despues con otra funcion con el metodo post crea el usuario
export const registra = async (nuevoUsuario, nuevaPassword) => {
    const usuarios = await getUsuarios();
    const existe = usuarios.some((usuario) => usuario.username === nuevoUsuario);

    if (existe) {
        alert("El usuario ya existe. Elige otro nombre de usuario.");
        return false;
    }

    const nuevoUsuarioObj = {
        id: String(usuarios.length + 1),
        username: nuevoUsuario,
        password: nuevaPassword,
    };

    return await crearUsuario(nuevoUsuarioObj);
};


// Actualizar un usuario
export const actualizarUsuario = async (id, nuevosDatos) => {
    const response = await fetch(`${"http://localhost:3000/user"}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(nuevosDatos),
    });

    if (response.ok) {
        alert("Usuario actualizado con éxito.");
        return true;
    } else{
        alert("Error");
        return false
    }
};


// Funcion que utilizando el id que introduce el usuario y usando el metodo DELETE permite eliminar usuarios de nuestro json
export const eliminarUsuario = async (id) => {
    const response = await fetch(`${"http://localhost:3000/user"}/${id}`, {
        method: "DELETE",
    });

    if (response.ok) {
        alert("Usuario eliminado con éxito.");
        return true;
    } else{
        alert("Error");
        return false;
    }
};


