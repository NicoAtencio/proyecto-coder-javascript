const botonCanilleras = document.getElementById("canilleras");

const botonConos = document.getElementById("conos");

const botonInflador = document.getElementById("inflador");

const botonMedias = document.getElementById("medias");

const botonPantalon = document.getElementById("pantalon");

const botonPelotaAdidas = document.getElementById("pelota_adidas");

const botonPelotaUefa = document.getElementById("pelota_uefa");

const botonVendas = document.getElementById("vendas");

const accesorios = [
    botonCanilleras,
    botonConos,
    botonInflador,
    botonMedias,
    botonPantalon,
    botonPelotaAdidas,
    botonPelotaUefa,
    botonVendas
];

for (let valor of accesorios){
    valor.addEventListener("click", agregar)
}