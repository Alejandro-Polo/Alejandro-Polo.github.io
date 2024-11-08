import usuario from "./clases/Usuario.mjs";
import empleado from "./clases/Empleado.mjs";

function CrearUsuario(){
    let objuser1= new usuario("7857487W","Juan",16)
    console.log(objuser1)
}

function CreaEmpleado(){
    let objemp1= new empleado("7437487W","Sergio",20)
    console.log(objemp1)
}