// Alejandro Polo Barranco
/*  calculador de edad que solo con tu año de nacimiento puede conseguir tus años actuales
    uso date que me proporciona la fecha entera y con getFullYear me quedo simplemente con el año
    se devuelven los años actuales del usuario
*/
function ageCalculator(birthyear) {
    let currentyear = new Date().getFullYear();
    let age = currentyear - birthyear;
    return age;
}

/*  calculadora de suministros se podría llamar, con la edad actual del usuario , la edad hasta la que 
    espera morir y cuantas veces comería su comida favorita por día le podemos decir cuanta comida
    necesita para poder comer hasta que termine su vida, se devuelve la cantidad de snacks que necesita.
*/
function supplyCalculator(currentage, maxage, estimatedsnackperday) {
    yearstolive = maxage - currentage;
    snackstoeat = estimatedsnackperday * (yearstolive * 365);

    return snackstoeat;
}

/*  una funcion que gracias al radio de una circunferencia nos permite calcular su perimetro
    el cual he tenido que buscar por internet porque no me lo sabía, uso Math.PI para un
    mejor calculo, devolvemos el perimetro ya calculado.
*/
function circunference(radio) {
    let perimetro = 2 * Math.PI * radio;
    return perimetro;
}

/*  una funcion que junto a la anterior es del mismo ejercicio tambien al igual con el radio de 
    la circunferencia podemos calcular su area, devolvemos el resultado
*/
function area(radio) {
    let area = Math.PI * (radio * radio);
    return area;
}

/*   buscando por internet un rato y viendo varios videos descubri como pasar de celsius a fahrenheit al reves
     y estos dos ultimos a kelvins pero los kelvins no son necesarios.
    devuelvo respectivamente el resultado final de la operación
*/
function celsiparafah(C) { // la C simboliza los grados celsius
    var CenF = (C * 9) / 5 + 32;
    return CenF;
}
function fahparacelsi(F) { // la F simboliza los grados fahrenheit 
    var FenC = ((F - 32) * 5) / 9;
    return FenC
}

