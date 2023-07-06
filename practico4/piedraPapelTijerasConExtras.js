console.log('');

const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERAS = 'tijeras';

function elegirModo() {
    const readlineSync = require('readline-sync');
    let modoJuego = readlineSync.question('*** Bienvenido a PIEDRA-PAPEL-TIJERAS !!! *** \n' +
        '\n' +
        'Elegi el modo de juego.... \n' +
        '(1) Una ronda \n' +
        '(2) Dos rondas \n' +
        '(3) El mejor de tres \n' +
        '\n' +
        'Tu eleccion =====> '
    );
    modoJuego = Number(modoJuego);

    while (![1, 2, 3].includes(modoJuego)) {    //Alternativa: (jugadaUsuario !== 1 && jugadaUsuario !== 2 && jugadaUsuario !== 3) {
        const readlineSync = require('readline-sync');
        modoJuego = readlineSync.question('*VALOR NO VALIDO !!!  PARA JUGAR ELEGI "1", "2" o "3"');
        modoJuego = Number(modoJuego);
    }
    return modoJuego;
}

// switch (elegirModo()) {
//     case 1:
//         ronda();
//         console.log('FIN DEL JUEGO');
//         console.log('');
//         break;
//     case 2:
//         for (let i = 0; i < elegirModo(); i++) {
//             ronda();
            
//         }
//         console.log('')
//         break;
// }

let cantidadRondas = elegirModo();
//console.log(cantidadRondas);

for (let i = 1; i < cantidadRondas+1; i++) {
    console.log('Ronda ' + (i) + ':');
    console.log(prueba());
    //return (ronda());
}



function ronda() {
function obtenerJugadaComputadora() {
    //let valores = {0:'piedra', 1:'papel', 2:'tijeras'};
    let valores = {0:PIEDRA, 1:PAPEL, 2:TIJERAS};
    let jugadaComputador = valores[Math.floor(Math.random() * 3)];
    return jugadaComputador;
}

//console.log(obtenerJugadaComputadora())


function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question(" ====> INGRESA UNA OPCION PARA EMPEZAR A JUGAR...: ");
    jugadaUsuario = jugadaUsuario.toLowerCase();

    while (jugadaUsuario !== PIEDRA && jugadaUsuario !== PAPEL && jugadaUsuario !== TIJERAS) {
        const readlineSync = require('readline-sync');
        jugadaUsuario = readlineSync.question('VALOR NO VALIDO !!!  PARA JUGAR ELEGI ENTRE "piedra", "papel" o "tijeras" E INGRESALO: ');
        jugadaUsuario = jugadaUsuario.toLowerCase();
    }
    return jugadaUsuario;
}
//console.log(obtenerJugadaUsuario());

let empates = 0;
let ganaCompu = 0;
let ganaUsuario = 0;

function determinarGanador(pc, jugador) {
   let resultado = '';
   if (pc === jugador) {
       resultado = 'Empate';
       empates = empates + 1;
    } else if (pc == PIEDRA && jugador == TIJERAS || pc == PAPEL && jugador == PIEDRA || pc == TIJERAS && jugador == PAPEL) {
        resultado = 'Gana la computadora';
        ganaCompu = ganaCompu + 1;
    } else {
        resultado = 'Gana el usuario';
        ganaUsuario = ganaUsuario + 1;
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
}





















let jugadaCompu = obtenerJugadaComputadora();
let jugadaJugador = obtenerJugadaUsuario();
let ganador = determinarGanador();

function prueba() {
    console.log(jugadaCompu);
    console.log(jugadaJugador);
    console.log(ganador);

    let jugadaComputador = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let ganador = determinarGanador(jugadaComputador, jugadaUsuario);

    console.log('La computadora eligio: %s', jugadaComputador);
    console.log('El usuario eligio: %s', jugadaUsuario);
    console.log('El resultado fue: %s', ganador);
    console.log('');

}