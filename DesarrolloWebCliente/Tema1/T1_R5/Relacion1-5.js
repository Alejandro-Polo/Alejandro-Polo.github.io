// function ejercicio 6, tomara cualquier argumento y devolvera un array con argumentos unicos
function onlyUniques(...args) {
    /* usamos "Set" que nos permite almacenar valores unicos de cualquier tipo,
    lo que devuelve argumentos unicos
    */
    return [...new Set(args)];
  }
// function ejercicio 7, elevar al cuadrado los argumentos y sumarlos despues
function squareAndSum(...args) {
    let sum = 0;
    // con un bucle for hasta lo que tenga args vamos sumando y elevando
    for (let i = 0; i < args.length; i++) {
      sum += args[i] ** 2; 
    }
    // al final devolvemos la suma completa
    return sum;
  }