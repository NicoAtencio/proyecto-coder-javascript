const botonLens = document.getElementById("lens");

const botonLorient = document.getElementById("lorient");

const botonPSG = document.getElementById("psg");

const botonLyon = document.getElementById("lyon");

const botonMarsella = document.getElementById("marsella");

const botonMonaco = document.getElementById("monaco");

const botonNantes = document.getElementById("nantes");

const botonNice = document.getElementById("nice");

const francesa = [
    botonLens,
    botonLorient,
    botonPSG,
    botonLyon,
    botonMarsella,
    botonMonaco,
    botonNantes,
    botonNice
];

for (let valor of francesa){
    valor.addEventListener("click", agregar);
}


