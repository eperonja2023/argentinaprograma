const readlineSync = require('readline-sync');

let nro = readlineSync.question("====> INGRESAR UN NUMERO AL AZAR (puede ser positivo o negativo): ");

if (nro>0) {
    console.log("El numero es positivo");
} else if (nro==0) {
    console.log("El numero es cero");
} else { console.log("El numero es negativo");
}