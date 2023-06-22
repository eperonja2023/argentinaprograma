const readlineSync = require('readline-sync');
let nroEntero = readlineSync.question("====> POR FAVOR, INGRESE UN NUMERO ENTERO: ");


if (nroEntero > 0 && nroEntero % 2 == 0) {
    console.log("El numero es positivo y par");
} else if (nroEntero > 0 && nroEntero % 2 !== 0) {
    console.log("El numero es positivo e impar");
} else if (!(nroEntero >= 0) && ((nroEntero % 2 == 0)||(nroEntero % 2 !== 0))) {
    console.log("El numero es negativo");
} else {
    console.log("El numero es cero");
}