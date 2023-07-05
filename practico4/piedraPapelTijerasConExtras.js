console.log('');

const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERAS = 'tijeras';


function obtenerJugadaComputadora() {
    //let valores = {0:'piedra', 1:'papel', 2:'tijeras'};
    let valores = {0:PIEDRA, 1:PAPEL, 2:TIJERAS};
    let jugadaComputador = valores[Math.floor(Math.random() * 3)];
    return jugadaComputador;
}
//console.log(obtenerJugadaComputadora())


function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question("*** Bienvenido a PIEDRA-PAPEL-TIJERAS !!! *** ====> INGRESA UNA OPCION PARA EMPEZAR A JUGAR...: ");
    jugadaUsuario = jugadaUsuario.toLowerCase();

    while (jugadaUsuario !== 'piedra' && jugadaUsuario !== 'papel' && jugadaUsuario !== 'tijeras') {
        const readlineSync = require('readline-sync');
        jugadaUsuario = readlineSync.question('VALOR NO VALIDO !!!  PARA JUGAR ELEGI ENTRE "piedra", "papel" o "tijeras" E INGRESALO: ');
        jugadaUsuario = jugadaUsuario.toLowerCase();
    }
    return jugadaUsuario;
}
//console.log(obtenerJugadaUsuario());


function determinarGanador(pc, jugador) {
   let resultado = '';
   if (pc === jugador) {
       resultado = 'Empate';
    } else if (pc == 'piedra' && jugador == 'tijeras' || pc == 'papel' && jugador == 'piedra' || pc == 'tijeras' && jugador == 'papel') {
        resultado = 'Gana la computadora';
    } else {
        resultado = 'Gana el usuario';
    }
    return resultado;
}
//console.log(determinarGanador(obtenerJugadaComputadora(), obtenerJugadaUsuario()));


let jugadaComputador = obtenerJugadaComputadora();
let jugadaUsuario = obtenerJugadaUsuario();
let ganador = determinarGanador(jugadaComputador, jugadaUsuario);

console.log('La computadora eligio: %s', jugadaComputador);
console.log('El usuario eligio: %s', jugadaUsuario);
console.log('El resultado fue: %s', ganador);
console.log('');