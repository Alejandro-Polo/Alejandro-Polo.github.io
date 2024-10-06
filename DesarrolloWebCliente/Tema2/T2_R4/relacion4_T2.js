// 1.a) funcion que devuelve invertida una cadena dada por el usuario
function invierteCadena(arg) {
    let fraseInvertida = ""; // esta variable almacenara la frase invertida
    // bucle for que nos permite recorrer hacia atras la cadena
    for (let i = arg.length - 1; i >= 0; i--) {
        fraseInvertida += arg[i]; // vamos añadiendo a la variable 
    }
    return fraseInvertida; // se devuelve la frase ya invertida
}

// 1.b) funcion que devuelve invertidas las palabras contenidas en la cadena
function inviertePalabras(arg) {
    const palabras = arg.split(' '); // dividimos la cadena en un array de palabras
    let palabrasinvertidas = ""; // aqui se almacenaran las palabras invertidas
    // lo mismo que antes, este bucle nos permite recorrer la cadena de palabras desde el final
    for (let i = palabras.length - 1; i >= 0; i--) {
        palabrasinvertidas += palabras[i] + " "; // añadimos las palabras invertidas con un espacio al final
    }
    return palabrasinvertidas; // se devuelve la frase con las palabras invertidas
}

// 1.c) funcion que para una cadena de caracteres dada devuelve la longitud de la palabra más larga en ella contenida
function encuentraPalabraMasLarga(arg) {
    const palabras = arg.split(' '); // dividimos la cadena en un array de palabras
    let longitudMax = 0; // se usara esta variable para almacenar la longitud maximo de las palabras
    // se recorre cada elemento con lo que palabra contiene el siguiente elemento del array
    for (const palabra of palabras) { // se recorre  cada elemento en el array palabra
        if (palabra.length > longitudMax) {
            longitudMax = palabra.length; // si la longitud es mayor a la actual se remplaza
        }
    }
    return longitudMax; // se devuelve el numero de la longitud de la cadena
}

/* 1.d)funcion que para una cadena de caracteres y un valor numérico (i), 
devuelva el número de palabras cuya longitud es mayor a i.
*/
function fltraPalabrasMasLargas(arg, i) {
    const palabras = arg.split(' '); // dividimos la cadena en un array de palabras
    let contador = 0; // variable contador que aumentara si la palabra es mas larga que i
    // se recorre cada elemento con lo que palabra contiene el siguiente elemento del array
    for (const palabra of palabras) {
        if (palabra.length > i) {
            contador++; // sumamos al contador uno si la longitud es mayor que i
        }
    }
    return contador; // se devuelve el numero de palabras mas largas que el numero introducido
}

/* 1.e) funcion que formatea correctamente la cadena pasada, por lo que sólo aparece en mayúscula 
        la primera letra y el resto en minúscula
*/
function cadenaBienFormada(arg) {
    if (arg.length === 0) // con un if nos aseguramos de que la cadena no este vacia
        return ""; // si esta vacia se devuelve una cadena vacia

    let resultado = ""; // se usara esta variable para almacenar el resultado

    // con un bucle for y con ayda de un if se completa el ejercicio
    for (let i = 0; i < arg.length; i++) {
        if (i === 0) {
            // nos aseguramos de que si es la primera letra la ponemos a mayuscula
            resultado += arg[i].toUpperCase();
        } else {
            // ya las demas si o si van minuscula
            resultado += arg[i].toLowerCase();
        }
    }

    return resultado; // se devuelve la cadena final
}
// 2. funcion que muestra si una cadena está formada por mayúsculas, minúsculas o ambas
function infoCadena(cadena) {
    // se comprueba si la cadena es igual a la cadena pero con mayusculas
    if (cadena === cadena.toUpperCase()) {
        return "La cadena está formada solo por mayúsculas.";
    // se comprueba si la cadena es igual a la cadena pero esta vez con minusculas
    } else if (cadena === cadena.toLowerCase()) {
        return "La cadena está formada solo por minúsculas.";
    // sino es ninguna de las anteriores es una mezcla
    } else {
        return "La cadena tiene una mezcla de mayúsculas y minúsculas.";
    }
}

// 3. funcion que localiza todas las apariciones de una subcadena dentro de otra
function localizarSubcadena(cadena, subcadena) {
    const posiciones = []; // aqui se almacenara las posiciones
    let posicion = cadena.indexOf(subcadena); // se busca la primera coincidencia entre ambas
    while (posicion !== -1) {
        posiciones.push(posicion); // se añade la posicion
        posicion = cadena.indexOf(subcadena, posicion + 1);
    }
    return posiciones;
}

// 4. a funcion que tomando una cadena de texto como entrada coloque todas sus consonantes al principio y todas sus vocales al final de la misma, eliminando los blancos.
function consonantesYVocales(cadena) {
    const vocales = 'aeiouAEIOU'; // vocales definidas
    let consonantes = "";   // almacenaje de las consonantes
    let vocalesCadena = ""; // almacenaje de las vocales
    for (const caracter of cadena.replace(/\s+/g, '')){// con esto eliminamos los espacios y recorremos la cadena 
        // si el caracter coincide esta dentro del array vocales lo añadimos
        if (vocales.includes(caracter)) {
            vocalesCadena += caracter;
        // si no se cumple la anterior entonces quiere decir que es una consonante
        } else {
            consonantes += caracter;
        }
    }
    // devolvemos las consonantes guardadas y luego las vocales
    return consonantes + vocalesCadena;
}

// 5.  función que elimine los caracteres repetidos de una cadena de texto, incluidos los blancos.
function eliminarCaracteresRepetidos(cadena) {
    let nuevaCadena = ""; // cadena que almacenara los caracteres unicos
    // recorremos cada caracter de cadena
    for (const caracter of cadena) {
        // comprobamos si el caracter no esta en nueva cadena, lo añadimos si no esta
        if (!nuevaCadena.includes(caracter)) {
            nuevaCadena += caracter;
        }
    }
    // devolvemos la nueva cadena
    return nuevaCadena;
}

// 6. funcion que tomando dos cadenas como entrada nos diga si la segunda es una subcadena de la primera y cuál es la primera posición
function esSubcadena(cadena, subcadena) {

    const posicion = cadena.indexOf(subcadena);// se busca si la cadena contiene la subcadena
    return posicion !== -1 ? `La subcadena aparece en la posición: ${posicion}` : "No es una subcadena.";
}

// 7. funcion que tomando como entrada una cadena de texto nos devuelva si es o no un palíndromo
function palindromo(cadena) {
    // se eliminan los espacios en blanco y se pasan a minuscula
    const cadenaLimpia = cadena.replace(/\s+/g, '').toLowerCase();
    const invertida = cadenaLimpia.split('').reverse().join(''); // se invierte la cadena
    if (cadenaLimpia === invertida) {
        return "Es un palíndromo"; // si son iguales es palindromo
    } else {
        return "No es un palíndromo"; // si no son iguales no es palindromo
    }
}

// 8. funcion que tomando como entrada una cadena de texto sea capaz de contabilizar el número de palabras
function contarPalabras(cadena) {
    // trim permite eliminar posibles espacios en blanco al principio y al final, seguido se dividen con espacios
    const palabras = cadena.trim().split(/\s+/);
    // despues devolvemos la longitud
    return palabras.length;
}

// 9. validacion de una tarjeta de credito
function validatarCreditCard(cardNumber) {
    // se comprueba que el numero introducido tenga 16 digitos y sea un numero, sino devolvemos false
    if (cardNumber.length !== 16 || isNaN(cardNumber)) return false;
    // se comprueba que el ultimo numero sea par
    const lastDigitEven = cardNumber[cardNumber.length - 1] % 2 === 0;
    // sacamos la suma de todos los digitos
    const sumDigits = cardNumber.split('').reduce((acc, val) => acc + Number(val), 0);
    // comprobamos que tenga dos digitos diferentes
    const differentDigits = new Set(cardNumber).size > 1;
    // se devuelve true si todas las condiciones se cumplen
    return lastDigitEven && sumDigits > 16 && differentDigits;
}

// 10. Validación de tarjeta con guiones permitidos
function validatarCreditCard2(cardNumber) {
    // se remplazan los giones por espacios vacios
    const cleanedNumber = cardNumber.replace(/-/g, '');
    // lo que se ha hecho anteriormente permite llamar a la funcion de la tarjeta de credit y que funcione
    return validatarCreditCard(cleanedNumber);
}