function maximo(n1,n2,n3,n4){
    var aux;
    if (n1>=n2) {
        
    }
}
function dado(){
    return Math.floor((Math.random() * 6) + 1);
}
function dado6000(){
    var num1=0;
    var num2=0;
    var num3=0;
    var num4=0;
    var num5=0;
    var num6=0;
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
    /*switch (num) {
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
    return "El num 1 ha salido "+num1+" veces el num 2 ha salido "+num2+" veces el num 3 ha salido "
    +num3+" veces el num 4 ha salido "+num4+" veces el num 5 ha salido "+num5+" veces el num 6 ha salido "+num6;
}

function volumen(r){
    var volumen=(4/3)*Math.PI*(r*r*r);
    var vol=volumen.toFixed(2)
    return vol;
}

function area(r){
    var area=Math.PI*(r*r);
    var ar=area.toFixed(2);
    return ar;
}