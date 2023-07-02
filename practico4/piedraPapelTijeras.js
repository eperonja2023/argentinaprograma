let valores = {0:'piedra', 1:'papel', 2:'tijeras'};

function obtenerJugadaComputadora() {
    let jugadaComputador = valores[Math.floor(Math.random() * 3)];
    return jugadaComputador;
}
//console.log(obtenerJugadaComputadora())

function obtenerJugadaUsuario() { // *** ver si se puede armar esta funcion con un bucle ***
    const readlineSync = require('readline-sync');
    let jugadaUsuario = readlineSync.question("*** Bienvenido a PIEDRA-PAPEL-TIJERAS !!! ***    ====> INGRESA UNA OPCION...: ");
    jugadaUsuario = jugadaUsuario.toLowerCase();

    while (jugadaUsuario !== 'piedra' && jugadaUsuario !== 'papel' && jugadaUsuario !== 'tijeras') {
        const readlineSync = require('readline-sync');
        jugadaUsuario = readlineSync.question('VALOR NO VALIDO !!!  PARA JUGAR ELEGI ENTRE "piedra", "papel" o "tijeras" E INGRESALO: ');
        jugadaUsuario = jugadaUsuario.toLowerCase();
    }
    return jugadaUsuario;
}
//console.log(obtenerJugadaUsuario());

function determinarGanador () {
    if (jugadaComputador === jugadaUsuario) {
        let resultado = 'Empate';
    }
    

}