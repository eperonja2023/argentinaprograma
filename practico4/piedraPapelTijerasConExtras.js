console.clear();

const PIEDRA = 'piedra';
const PAPEL = 'papel';
const TIJERAS = 'tijeras';


function elegirModo() {
    const readlineSync = require('readline-sync');
    let modoJuego = readlineSync.question('*** Bienvenido a PIEDRA-PAPEL-TIJERAS !!! *** \n' +
        '\n' +
        'Elegi el modo de juego.... \n' +
        ' (1) Una ronda \n' +
        ' (2) Dos rondas \n' +
        ' (3) El mejor de tres \n' +
        '\n' +
        'Tu eleccion =====> '
    );
    console.log('');
    modoJuego = Number(modoJuego);

    while (![1, 2, 3].includes(modoJuego)) {    //Alternativa: (jugadaUsuario !== 1 && jugadaUsuario !== 2 && jugadaUsuario !== 3) {
        const readlineSync = require('readline-sync');
        modoJuego = readlineSync.question('*VALOR NO VALIDO !!!  PARA JUGAR ELEGI "1", "2" o "3": ');
        modoJuego = Number(modoJuego);
    }
    return modoJuego;
}


let cantidadRondas = elegirModo();
let ganaPc = 0;
let ganaUsuario = 0;

for (let i = 1; i < cantidadRondas + 1; i++) {
    if (cantidadRondas > 1) {
        console.log('Ronda ' + (i) + ':');
    }
    console.log(resultadoRonda());
    if (i == cantidadRondas) {
        console.log('');
        console.log('FIN DEL JUEGO');
        console.log('');
        if (cantidadRondas > 1) {
            console.log(resultadoFinal(ganaPc, ganaUsuario));
        }
        console.log('');
    }
}


function obtenerJugadaComputadora() {
    //Ejercicio original: let valores = {0:'piedra', 1:'papel', 2:'tijeras'};
    let valores = { 0: PIEDRA, 1: PAPEL, 2: TIJERAS };
    let jugadaComputador = valores[Math.floor(Math.random() * 3)];
    return jugadaComputador;
}


function obtenerJugadaUsuario() {
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question(' ====> INGRESA UNA OPCION PARA EMPEZAR A JUGAR...: ');
    jugadaUsuario = jugadaUsuario.toLowerCase();

    while (jugadaUsuario !== PIEDRA && jugadaUsuario !== PAPEL && jugadaUsuario !== TIJERAS) {
        const readlineSync = require('readline-sync');
        jugadaUsuario = readlineSync.question('VALOR NO VALIDO !!!  PARA JUGAR ELEGI ENTRE "piedra", "papel" o "tijeras" E INGRESALO: ');
        jugadaUsuario = jugadaUsuario.toLowerCase();
    }
    return jugadaUsuario;
}


function determinarGanador(pc, jugador) {
    let resultado = '';
    if (pc === jugador) {
        resultado = 'Empate !!!';
    } else if (pc == PIEDRA && jugador == TIJERAS || pc == PAPEL && jugador == PIEDRA || pc == TIJERAS && jugador == PAPEL) {
        resultado = 'Gana la computadora !!!';
        ganaPc += 1;
    } else {
        resultado = 'Gana el usuario !!!';
        ganaUsuario += 1;
    }
    return resultado;
}


function resultadoRonda() {
    let jugadaComputador = obtenerJugadaComputadora();
    let jugadaUsuario = obtenerJugadaUsuario();
    let ganador = determinarGanador(jugadaComputador, jugadaUsuario);


    let cartelResultado = `\n` +
        `La computadora eligio: ${jugadaComputador} \n` +
        `El usuario eligio: ${jugadaUsuario} \n` +
        `El resultado fue: ${ganador} \n` +
        ``;

    return cartelResultado;
}

function resultadoFinal(pc, jugador) {
    let cartelResultadoGlobal;
    console.log('*** RESULTADO FINAL ***');
    console.log(`La computadora gano ${pc} match`);
    console.log(`El usuario gano ${jugador} match`);
    console.log('');
    if (pc > jugador) {
        cartelResultadoGlobal = `GANO LA COMPUTADORA !!!!!!`;
    } else if (pc < jugador) {
        cartelResultadoGlobal = `GANO EL USUARIO !!!!!!!`;
    } else {
        cartelResultadoGlobal = `EMPATE !!!!!!!`;
    }
    return cartelResultadoGlobal
}
