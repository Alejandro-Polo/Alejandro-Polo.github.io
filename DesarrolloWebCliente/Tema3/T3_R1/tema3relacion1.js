function maximo(num1,num2,num3,num4) {
    // math.max devuelve el numero mayor de todos los introducidos
    return Math.max(num1, num2, num3, num4);
}
function dado(){
    return Math.floor((Math.random() * 6) + 1);
}
function dado6000(){
    // creo varias variables como contadores
    var num1=0;
    var num2=0;
    var num3=0;
    var num4=0;
    var num5=0;
    var num6=0;
    // con un bucle repetimos las veces necesarias dependiendo de lo que salga sumo a un contador o a otro
    for (let i = 0; i < 6000; i++) {
        var num=dado();
        if(num=="1"){
            num1++;
        }else{
            if(num=="2"){
                num2++;
            }else{
                if(num=="3"){
                    num3++;
                }else{
                    if(num=="4"){
                        num4++;
                    }else{
                        if(num=="5"){
                            num5++;
                        }else{
                            num6++;
                        }
                    }
                }
            }
        }
        
    }
    /*este ejercicio tambien se puede hacer con un switch pero me surgio la idea de los ifs anidados antes
    switch (num) {
        case 1:
            num1++;
        case 2:
            num2++;
        case 3:
            num3++;
        case 4:
            num4++;
        case 5:
            num5++;
        case 6:
            num6++;
    }*/
   // se devuelve el resultado directamente de cada uno
    return "El num 1 ha salido "+num1+" veces el num 2 ha salido "+num2+" veces el num 3 ha salido "
    +num3+" veces el num 4 ha salido "+num4+" veces el num 5 ha salido "+num5+" veces el num 6 ha salido "+num6;
}
// calcular el volumen con un radio
function volumen(r){
    var volumen=(4/3)*Math.PI*(r*r*r);
    var vol=volumen.toFixed(2)
    return vol;
}
// calcular el area con un radio
function area(r){
    var area=Math.PI*(r*r);
    var ar=area.toFixed(2);
    return ar;
}
// funcion recursiba
function potencia(base, exponente) {
    // cualquier número elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }
    // para que una funcion sea recursiba se llama a si misma
    return base * potencia(base, exponente - 1);
}

function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1; // El factorial de 0 o 1 es siempre 1
    }
    return n * calcularFactorial(n - 1); // Llamada recursiva
}

function generarTablaFactoriales() {
    // se inicia la creacion de la tabla
    let tabla = '<table border="1" style="border-collapse: collapse;">' +
                '<thead><tr><th>Número</th><th>Factorial</th></tr></thead><tbody>';

    // se hace un bucle para mostrar y calcular las filas mas el factorial desde el 1 al 10
    for (let i = 1; i <= 10; i++) {
        tabla += '<tr><td>' + i + '</td><td>' + calcularFactorial(i) + '</td></tr>';
    }

    // se cierra la tabla
    tabla += '</tbody></table>';

    // se inserta la tabla en el elemento con id tablafactorial en este caso un div
    document.getElementById("tablafactorial").innerHTML = tabla;
}