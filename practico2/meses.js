const readlineSync = require('readline-sync');

let nro = readlineSync.question("====> POR FAVOR, INGRESA UN NUMERO DE MES DEL 1 al 12: ");
nro = Number(nro);

let mes = { 1: 'enero', 2: 'febrero', 3: 'marzo', 4: 'abril', 5: 'mayo', 6: 'junio', 7: 'julio', 8: 'agosto', 9: 'septiembre', 10: 'octubre', 11: 'noviembre', 12: 'diciembre' };

let mesDe31 = [1, 3, 5, 7, 9, 10, 12];
let mesDe30 = [4, 6, 8, 11];

let dias = [31, 30, 28];

let cantidadDeDias;

if (mesDe31.includes(nro)) {
    cantidadDeDias = dias[0];
} else if (mesDe30.includes(nro)) {
    cantidadDeDias = dias[1];
} else {
    cantidadDeDias = dias[2];
}

if (nro >= 1 && nro <= 12) {
    console.log("La cantidad de dias del mes de %s es %i", mes[nro], cantidadDeDias);
} 




// **OPCION 2

// let mes = {1:'enero', 2:'febrero', 3:'marzo', 4:'abril', 5:'mayo', 6:'junio', 7:'julio', 8:'agosto', 9:'septiembre', 10:'octubre', 11:'noviembre', 12:'diciembre'};
// let cantidadDeDias = {1:31, 2:28, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31};

// if (nro >= 1 && nro <= 12) {
//     console.log("La cantidad de dias del mes de %s es %i", mes[nro], cantidadDeDias[nro]);
// }