// Función que filtra un array de números y devuelve los menores 
function filterNumbersGreaterThan(numlimite, limitenum) {
    // Al usar filter para recorrer el array y devuelver solo aquellos números menores a limietenum 
    return numlimite.filter(number => number < limitenum);
  }
  
  // Función que convierte un texto a "Hacker Speak"
  function toHackerSpeak(texto) {
   /*  uso .replace(valorabuscar, valoraremplazar) buscando las letras indicadas ,el gi indica g->que busque en toda la cadena
    i->que den igual mayúsculas que minúsculas */
    return texto.replace(/a/gi, "4").replace(/e/gi, "3").replace(/i/gi, "1").replace(/o/gi, "0").replace(/s/gi, "5");
  }
  
  // Función que obtiene la extensión de un archivo
  function getFileExtension(fichero) {
    // con .split se la cadena en un array por el delimitador en este caso el punto
    const parts = fichero.split(".");
    // devuelvo el último elemento del array, que sería la extensión
    return parts.length > 1 ? parts.pop() : "";
  }
  
  // Función que aplana un array 2D
  function flatArray(array) {
    // .flat devuelve un array nuevo con todos los sub-arrays concatenados
    return array.flat();
  }
  
  // Función que elimina duplicados en un array
  function removeDuplicates(array) {
    // devolvemos un nuevo array que tiene valores unicos
    return [...new Set(array)];
  }
  
  // Función que cuenta el número de ocurrencias de una letra en un texto
  function countLetter(letra, texto) {
    /* Con RegExp creo una expresion que encontrara la letra indicada ,el gi indica g->que busque en toda la cadena
    i->que den igual mayúsculas que minúsculas al igual que el ejercicio del texto hacker */
    const expresion = new RegExp(letra, "gi");
    // Con match buscamos todas las coincidencias usando la expresion creada anteriormente
    const coincidencias = texto.match(expresion);
    // se devuelve la longitud que serian las letras que han aparecido
    return coincidencias.length;
  }
  
  // Función que elimina palabras específicas de un texto
  function removeWords(texto, palabras) {
    // Almaceno las palabras que eliminaremos en una variable
    const palabrasborrar = new Set(palabras);
    /* Despues, con split divido el texto a un array de las palabras y con filter filtramos 
    el array del texto manteniendo las palabras que no estan en en las palabrasa a eliminar, 
    con join juntamos de vuelta los arrays*/
    return texto.split(" ").filter(elemento => !palabrasborrar.has(elemento)).join(" ");
  }
  