const botonInter = document.getElementById("inter");
console.log(botonInter)
const botonMilan = document.getElementById("milan");
const botonJuventus = document.getElementById("juventus");
const botonLazio = document.getElementById("lazio");
const botonNapoli = document.getElementById("napoli");
const botonPalermo = document.getElementById("palermo");
const botonRoma = document.getElementById("roma");
const botonPescara = document.getElementById("pescara");

const italiana = [
    botonInter,
    botonJuventus,
    botonLazio,
    botonMilan,
    botonNapoli,
    botonPalermo,
    botonPescara,
    botonRoma
];

for (let valor of italiana){
    valor.addEventListener("click", agregar);
}