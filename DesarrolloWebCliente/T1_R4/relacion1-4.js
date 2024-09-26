
function sum(totalnums) {
    let resultado = 0;
    for (let i = 0; i < totalnums; i++) {
        let numparaadd = parseInt(prompt("Introduce un número a sumar: "))
        resultado += numparaadd;
    }
    return resultado;
}
