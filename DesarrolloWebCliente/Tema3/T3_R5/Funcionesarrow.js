// Función arrow que suma dos numeros
const sum = (num1, num2) => num1 + num2

// Función arrow para devolver una frase con la longitud de la cadena y que muestre tambien la cadena
const logituddecadena = cadena => ("La longitud de " + cadena + " es ", cadena.length)

// función arrow que devuelve la longitude de la cadena, y muestra por consola lo mismo de antes
const devolverlongitud = cadena => {
    let longitudcadena = cadena.length
    console.log("La longitud de " + cadena + " es ", longitudcadena)
    return longitudcadena
}

// Función arrow para mostrar un mensaje de alerta aleatorio de un array con el nombre del usuario
let alerts = ["Estas muy ternico ", "Tienes que trabajar más ", "Hay que daros más caña ", "Hay qué mono eres ", "Este dialogo ha sido retirado de las alertas por infringir varias leyes de las patatas"]
const mostraralerta = name => alert(alerts[(Math.floor(Math.random() * alerts.length))] + `, ${name}!`)
