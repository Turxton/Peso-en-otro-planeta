const g_tierra = 9.8;
const g_marte = 3.7;
const g_jupiter = 24.8;
const planeta = ["Kryptón","Marte", "Jupiter"];

let peso = parseInt(prompt(`¿Cuál es tu peso?`));
let destino = parseInt(prompt(`Elige tu planeta:\n1  es Marte, 2 es Jupiter`));
let peso_final = 0;

if (destino == 1) {
    peso_final = parseInt(peso * g_marte / g_tierra);

}else if (destino == 2) {
    peso_final = parseInt(peso * g_jupiter / g_tierra);

} else {
    peso_final = 1000000;
    destino = 0;
}

document.write(`Tu peso en ${planeta[destino]} es: <strong>${peso_final} Kg</strong>`)