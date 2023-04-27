const botonBarcelona = document.getElementById("barcelona");

const botonRealMadrid = document.getElementById("real_madrid")

const botonAtelticoMadrid = document.getElementById("atletico_madrid")

const botonBetis = document.getElementById("betis")

const botonCelta = document.getElementById("celta")

const botonValencia = document.getElementById("valencia")

const botonRayoVallecano = document.getElementById("vallecano")

const botonVillarreal = document.getElementById("villarreal")

const espanola = [
    botonBarcelona,
    botonRealMadrid,
    botonAtelticoMadrid,
    botonBetis,
    botonCelta,
    botonValencia,
    botonRayoVallecano,
    botonVillarreal
];

for (let valor of espanola){
    valor.addEventListener("click", agregar);
}