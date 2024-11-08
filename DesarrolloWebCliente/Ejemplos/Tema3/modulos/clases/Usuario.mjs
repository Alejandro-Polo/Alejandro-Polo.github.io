export default function usuario(nombre, dni, edad) {
    this.nombre = nombre
    this.dni = dni
    this.edad = edad
    this.showMe = function () {
        console.log([`Dni: ${this.dni} -- Nombre: ${this.nombre}`])
    }
}