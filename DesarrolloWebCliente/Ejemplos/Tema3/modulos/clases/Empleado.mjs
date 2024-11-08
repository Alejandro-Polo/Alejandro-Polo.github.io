export default class empleado{
    constructor(codigo,nombre,telefono){
        this.codigo=codigo
        this.nombre=nombre
        this.telefono=telefono
    }
    muestraEmpleado(){
        console.log("Empleado : "+this.codigo+"-"+this.nombre)
    }
}