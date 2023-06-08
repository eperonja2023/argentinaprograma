let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: " + tamañoDeCita);
let indice = cita.indexOf('tigres comen trigo');
console.log("El indice del substring es: "+indice);
let citaRevisada = cita.slice(0,cita.length-' en un trigal'.length);
console.log(citaRevisada)