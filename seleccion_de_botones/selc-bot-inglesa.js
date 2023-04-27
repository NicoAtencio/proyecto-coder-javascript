const botonArsenal = document.getElementById("arsenal");
const botonAstonVilla = document.getElementById("aston_villa");
const botonChelsea = document.getElementById("chelsea");
const botonManCity = document.getElementById("man_city");
const botonManUnited = document.getElementById("man_united");
const botonLeicester = document.getElementById("leicester");
const botonLiverpool = document.getElementById("liverpool");
const botonTottenham = document.getElementById("tottenham");

const inglesa = [
    botonArsenal,
    botonAstonVilla,
    botonChelsea,
    botonLeicester,
    botonLiverpool,
    botonManCity,
    botonManUnited,
    botonTottenham
];

for (let valor of inglesa){
    valor.addEventListener("click", agregar);
}