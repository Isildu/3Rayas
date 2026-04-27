let tablero = ["", "", "", "", "", "", "", "", ""];
let jugadorActual = "X";
let celdas = document.querySelectorAll(".celda");

const botonReiniciar = document.getElementById("reiniciar");
const textoResultado = document.getElementById("resultado");
const turnoElemento = document.getElementById("turno");

const combinacionesGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
celdas.forEach((celda, index) => {
    celda.addEventListener("click", () => {
        if (tablero[index] === "" && !textoResultado.textContent) {
            tablero[index] = jugadorActual;
            celda.textContent = jugadorActual;
        }
    });
});

function verificarGanador() {
    return combinacionesGanadoras.some(combinacion => {
        return combinacion.every(index => tablero[index] === jugadorActual);
    });
}
function verificarEmpate() {
    return tablero.every(celda => celda !== "");
}

function cambiarTurno() {
    jugadorActual = jugadorActual === "X" ? "O" : "X";
    turnoElemento.textContent = `Turno del jugador: ${jugadorActual}`;
}
function reiniciarJuego() {
    tablero = ["", "", "", "", "", "", "", "", ""];
    celdas.forEach(celda => celda.textContent = "");
    textoResultado.textContent = "";
    jugadorActual = "X";
    turno.textContent = `Turno del jugador: ${jugadorActual.textContent}`;
}

function tableroCompleto() {
    return tablero.every(celda => celda !== "");
}

function manejarClick(evento) {
    const index = evento.target.dataset.index;
    if (tablero[index] === "" && !textoResultado.textContent) {
        tablero[index] = jugadorActual;
        evento.target.textContent = jugadorActual;
    }
    if (verificarGanador()) {
        textoResultado.textContent = `¡Jugador ${jugadorActual} gana!`;
        return;
    }
    if (verificarEmpate()) {
        textoResultado.textContent = "¡Empate!";
        return;
    }
    cambiarTurno();
    if (tableroCompleto()) {
        textoResultado.textContent = "¡Empate!";
    }
}
