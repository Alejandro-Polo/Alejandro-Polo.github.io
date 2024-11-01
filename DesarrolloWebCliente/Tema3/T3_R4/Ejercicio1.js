
// 1. Encontrar el número más grande
const findLargestNumber = (array) => Math.max(...array)

// 2. Encontrar la cadena más larga
const findLongestString = (array) => array.reduce((a, b) => a.length >= b.length ? a : b)

// 3. Encontrar números pares
const findEvenNumbers = (array) => array.filter(num => num % 2 === 0)

// 4. Encontrar números impares
const findOddNumbers = (array) => array.filter(num => num % 2 !== 0)

// 5. Encontrar palabras que contengan 'is'
const findWordsContainingIs = (array) => array.filter(word => word.includes("is"))

// 6. Asegurar que todos los números sean divisibles por tres
const allDivisibleByThree = (array) => array.every(num => num % 3 === 0)

// 7. Combinar (zip) dos arrays
const zipArrays = (arr1, arr2) => arr1.map((value, index) => [value, arr2[index]])

// 8. Ordenar el array combinado de menor a mayor
const sortArrayAsc = (array) => array.flat().sort((a, b) => a - b);
const combinedArray = zipArrays([3, 1, 2], [9, 6, 7]);
console.log("Array combinado ordenado:", sortArrayAsc(combinedArray));

// 9. Eliminar la primera palabra del array
const removeFirstWord = (array) => array.slice(1);
console.log("Array sin la primera palabra:", removeFirstWord(["primero", "segundo", "tercero"]));

// 10. Colocar una nueva palabra al inicio del array
const addWordAtStart = (array, word) => [word, ...array];
console.log("Array con nueva palabra al inicio:", addWordAtStart(["segundo", "tercero"], "primero"));

// 11. Reemplazar algunos elementos
const replaceElements = (array, index, newValues) => {
    const copy = [...array];
    copy.splice(index, newValues.length, ...newValues);
    return copy;
};
console.log("Array con elementos reemplazados:", replaceElements(["a", "b", "c", "d"], 1, ["x", "y"]));
