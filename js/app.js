const g_tierra = 9.8;
const g_marte = 3.7;
const g_jupiter = 24.8;
const planeta = ["Kryptón","Marte", "Jupiter"];

let peso_final = 0;

function calcularPeso(){
    let peso = document.getElementById("peso-number").value;
    let destino = document.getElementById("destino").value;
    console.log(destino);

    if (destino == 1) {
        peso_final = parseInt(peso * g_marte / g_tierra);
    
    }else if (destino == 2) {
        peso_final = parseInt(peso * g_jupiter / g_tierra);
    
    } else {
        peso_final = 1000000;
        destino = 0;
    }

    let x = `Tu peso en ${planeta[destino]} es: <strong>${peso_final} Kg</strong>`
    
    document.getElementById("resultado").innerHTML = x;
}