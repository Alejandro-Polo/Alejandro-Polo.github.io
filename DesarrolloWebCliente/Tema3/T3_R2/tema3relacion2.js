// ejercicio 1 Solicita 5 números al usuario y calcula el valor mínimo, máximo y medio.
function ejercicio1() {
    let numeros = [];
    // se solicitan 5 números al usuario y los almacenamos en el array numeros
    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt(`Introduce el número ${i + 1}:`)); // Pide número
        if (isNaN(numero)) { // Si no es un número válido
            alert("Por favor, introduce un número válido.");
            return;
        }
        numeros.push(numero);
    }
    // calculamos el valor mínimo, máximo y el promedio de los números
    let valorMinimo = Math.min(...numeros);
    let valorMaximo = Math.max(...numeros);
    let valorMedio = numeros.reduce((acc, val) => acc + val, 0) / numeros.length;

    // mostramos los resultados en el HTML
    document.getElementById("resultado").textContent = `Mínimo: ${valorMinimo}, Máximo: ${valorMaximo}, Media: ${valorMedio.toFixed(2)}`;
}

// ejercicio 2 Comprueba si un color dado por el usuario está en un array de colores.
function ejercicio2() {
    const colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"]; // array de colores
    let colorUsuario = prompt("Introduce un color:").toLowerCase(); // pide el color al usuario

    // verifica si el color está en el array y muestra el resultado
    if (colores.includes(colorUsuario)) {
        document.getElementById("resultado").textContent = `El color ${colorUsuario} está en la lista.`;
    } else {
        document.getElementById("resultado").textContent = `El color ${colorUsuario} no está en la lista.`;
    }
}

// ejercicio 3: Genera 20 números aleatorios entre 0 y un número dado por el usuario (N).
function ejercicio3() {
    let numeros = [];
    let N = parseInt(prompt("Introduce un número (N):")); // pide al usuario el valor de N

    // genera 20 números aleatorios entre 0 y N
    for (let i = 0; i < 20; i++) {
        numeros.push(Math.floor(Math.random() * N));
    }

    // muestra los números generados
    document.getElementById("resultado").textContent = `Números generados: ${numeros.join(", ")}`;
}

// ejercicio 4: Genera arrays de intersección, unión y diferencia a partir de dos arrays.
function ejercicio4() {
    let array1 = ["casa", "auto", "perro", "gato", "árbol"];
    let array2 = ["perro", "gato", "niño", "árbol", "flor"];

    // intersección: muesta con .includes los elementos que estan en ambos arrays
    let interseccion = array1.filter(value => array2.includes(value));
    // unión: muestra los elementos de ambos arrays sin duplicados
    let union = [...new Set([...array1, ...array2])];
    // diferencia: muestra los elementos que estan en array1 pero no en array2
    let diferencia = array1.filter(value => !array2.includes(value));

    // terminamos mostrando el resultado en la pagina html
    document.write("Array1 -> "+array1 +" ; Array 2 -> "+array2)
    document.getElementById("resultado").innerHTML = `Intersección: ${interseccion.join(", ")}<br>Unión: ${union.join(", ")}<br>Diferencia: ${diferencia.join(", ")}`;
}

// ejercicio 5:genera 20 números aleatorios entre 0 y 100 y calcula estadísticas.
function ejercicio5() {
    let numeros = [];
    // se generan 20 numeros con un bucle y con la funcion math.random, tambien se redondean
    for (let i = 0; i < 20; i++) {
        numeros.push(Math.floor(Math.random() * 101));
    }

    // se calcula el minimo el maximo y el valor medio de estos numeros randoms
    let valorMinimo = Math.min(...numeros);
    let valorMaximo = Math.max(...numeros);
    let valorMedio = numeros.reduce((acc, val) => acc + val, 0) / numeros.length;

    // se termina por mostrar
    document.getElementById("resultado").innerHTML = `Números: ${numeros.join(", ")}<br>Mínimo: ${valorMinimo}, Máximo: ${valorMaximo}, Media: ${valorMedio.toFixed(2)}`;
}

// ejercicio 6:solicita al usuario una palabra y comprueba si está en el documento.
function ejercicio6() {
    let palabra = prompt("Introduce una palabra:"); // solicita la palabra al usuario
    let texto = document.body.textContent; // document.body.textContent obtiene el contenido del html y lo guardamos en una variable

    // con un if se comprueba si esta y se da una opcion u otra en funcion de si es verdad o falso
    if (texto.includes(palabra)) {
        document.getElementById("resultado").textContent = `La palabra "${palabra}" existe en el documento.`;
    } else {
        document.getElementById("resultado").textContent = `La palabra "${palabra}" no existe en el documento.`;
    }
}

// ejercicio 7: genera 20 números aleatorios, los muestra sin ordenar y ordenados (sin duplicados).
function ejercicio7() {
    let numeros = [];
    // lo mismo que en el ejercicio 6, bucle for con math.random 
    for (let i = 0; i < 20; i++) {
        numeros.push(Math.floor(Math.random() * 101));
    }

    // se guarda en una variable para mostrar nada mas crearlos
    let sinOrdenar = [...numeros];
    // y se guardan en otra variable pero esta vez ordenados y sin duplicados
    let ordenado = [...new Set(numeros)].sort((a, b) => a - b);

    // mostramos el resultado
    document.getElementById("resultado").innerHTML = `Sin ordenar: ${sinOrdenar.join(", ")}<br>Ordenado: ${ordenado.join(", ")}`;
}

// ejercicio 8: solicita nombres separados por comas, los ordena y los muestra.
function ejercicio8() {
    let nombres = prompt("Introduce los nombres separados por coma:"); // se piden los nombres 
    let nombresArray = nombres.split(",").map(nombre => nombre.trim()); // los comvertimos en un array teniendo en cuenta las comas

    // se ordenan los nombres del array alfabeticamente
    let nombresOrdenados = nombresArray.sort();

    // se muestra el resultado
    document.getElementById("resultado").textContent = `Nombres ordenados: ${nombresOrdenados.join(", ")}`;
}

// ejercicio 9: opera con una cadena de texto dada por el usuario (número de palabras, primera, última, orden inverso, etc.)
function ejercicio9() {
    let cadena = prompt("Introduce una cadena de texto:"); // Pide la cadena al usuario
    let palabras = cadena.split(" "); // Divide la cadena en palabras

    // Obtiene los datos necesarios para la nueva ventana
    let primeraPalabra = palabras[0]; // se obtiene y se guarda la primera palabra
    let ultimaPalabra = palabras[palabras.length - 1]; // se guarda en una variable la ultima palabra
    let inverso = [...palabras].reverse().join(" "); // la cadena se guarda en orden inverso
    let ordenAZ = [...palabras].sort().join(" "); // la cadena se guarda ordenada de A-Z
    let ordenZA = [...palabras].sort().reverse().join(" "); // la cadena se guarda en orden inverso a la anterior es decir Z-A

    

    let nuevaVentana = window.open("", "PaginaNueva", "width=500,height=400");
    nuevaVentana.document.write(`
        Número de palabras: ${palabras.length}<br>
        Primera palabra: ${primeraPalabra}<br>
        Última palabra: ${ultimaPalabra}<br>
        Inverso: ${inverso}<br>
        Orden A-Z: ${ordenAZ}<br>
        Orden Z-A: ${ordenZA}
    `); // introducimos el resultado en la nueva ventana
}