
//
function sum(...args) {
    let resultado = 0;
    let num; 
    // usamos un bucle for para recorrer los argumentos necesarios y sumarlos
    for(let i=0;i<args.length;i++){
        resultado+=args[i]
    }
    return resultado;
}
// funcion ejercicio 2, devuelve la suma solo de numeros
function addOnlyNums(...args) {
    let resultado = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            resultado += args[i];
        }
    }
    return resultado;
}
// funcion ejercicio 3, devuelve el numero de argumentos introducidos
function countTheArgs(...args) {
    return args.length;
}// funcion ejercicio 4, devuelve la combinacion de dos arrays
function combineTwoArrays(array1, array2) {
    return [...array1, ...array2];
}
// function ejercicio 5, suma todos los argumentos
function sumEveryOther(...args) {
    let resultado = 0;
    for (let i = 0; i < args.length; i += 2) {
        resultado += args[i];
    }
    return resultado;
}
// function ejercicio 6, devuelve true o false dependiendo de si es divisible por 3
function divisible(num) {
    return num % 3 === 0;
}
// function ejercicio 7, muestra si el primer numero es divisible entre el divisor
function divisibleEntre(num, divisor) {
    return num % divisor === 0;
}
// function ejercicio 8 , comprueba si un numero esta entre dos
function rango(valor, rangoInf, rangoSup) {
    return valor >= rangoInf && valor <= rangoSup;
}
// function ejercicio 9 , devuelve si el numero tiene 3 digitos
function tieneTresDigitos(num) {
    return num >= 100 && num <= 999;
}
// function ejercicio 10, devuelelve el area de un rectangulo
function areaRectangulo(lado1, lado2) {
    return lado1 * lado2;
}
// function ejercicio 11, devuelve el indice de masa corporal segun el peso y la altura
function imc(peso, altura) {
    return peso / (altura * altura);
}
// function ejercicio 12, devuelve el precio de un producto con un descuento
function precioFinal(precioOriginal, descuento) {
    return precioOriginal - (precioOriginal * (descuento / 100));
}
// function ejercicio 13, devuelve el factorial de un numero
function factorial(num) {
    if (num === 0 || num === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }
    return resultado;
}
// function ejercicio 14, igual que el ejercicio 12 pero con dos valores
function divisible2(num1, num2) {
    return num1 % num2 === 0;
}