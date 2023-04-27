const precioConDescuento = (camisetas, precio, rebaja) => {
    let suma = precio - (((precio) * rebaja) / 100);
    console.log(`Las camisetas que usted compró son : ${nombreDeCamisetas.join(", ")}`);
    alert(`Usted a comprado ${camisetas} camisetas, el precio es $${precio} pero con el descuento aplicado del ${rebaja}% el total a pagar es de $${suma}.En consola se encuentran las camisetas que compro. Muchas gracias por su compra`)
};


const precioSinDescuento = (camisetas, precio) => {
    console.log(`Las camisetas que usted compró son : ${nombreDeCamisetas.join(", ")}`);
    alert(`Usted a comprado ${camisetas} camisetas y el total a pagar es de $${precio}.En consola se encuentran las camisetas que compro. Muchas gracias por su compra.`);
};


let infoCompradas = [];


class Equipos {
    constructor(equipo, precio) {
        this.equipo = equipo;
        this.precio = precio;
    };
};

class Accesorios{
    constructor(accesorio, precio){
        this.accesorio = accesorio;
        this.precio = precio;
    };
};


let cantidad = prompt("¿Cuantas camisetas de futbol desea comprar? Escribir número sin texto.");
while (!parseInt(cantidad)) {
    cantidad = prompt("¿Cuantas camisetas de futbol desea comprar? Escribir número sin texto.");
};


for (let i = 0; i < parseInt(cantidad); i++) {
    let equipo = prompt(`Escriba el nombre de la camiseta a comprar`);
    if (!equipo || parseInt(equipo)) {
        i = i - 1;
        continue;
    }
    let precio = Math.round(Math.random() * (6000 - 1000) + 1000);
    let nuevoEquipo = new Equipos(equipo, parseFloat(precio))
    infoCompradas.push(nuevoEquipo);
};


let precioDeCamisetas = infoCompradas.reduce((acumulador, pre) => acumulador + pre.precio, 0);


let nombreDeCamisetas = infoCompradas.map(elemento => elemento.equipo);


const descuento = prompt("¿Posee descuento? Escribir si o no.");


if (descuento.toLowerCase() == "si" || descuento.toLowerCase() == "s") {
    let valorDescuento = prompt("Escriba de cuanto es el descuento que posee. Escribir número sin texto.");
    while (!parseInt(valorDescuento) || parseInt(valorDescuento) > 100 || parseInt(valorDescuento) < 1) {
        valorDescuento = prompt("Escriba de cuanto es el descuento que posee. Escribir número sin texto.");
    };
    precioConDescuento(parseInt(cantidad), precioDeCamisetas, parseInt(valorDescuento));
} else {
    precioSinDescuento(parseInt(cantidad), precioDeCamisetas);
};


console.log("Los detalles de su compra son: ", infoCompradas);

let botines = new Accesorios("botines", Math.round(Math.random() * (6000 - 1000) + 1000))
let vendas = new Accesorios("vendas", Math.round(Math.random() * (6000 - 1000) + 1000))
let pantalon = new Accesorios("pantalon", Math.round(Math.random() * (6000 - 1000) + 1000))
let medias = new Accesorios("medias", Math.round(Math.random() * (6000 - 1000) + 1000))

const accesoriosDisponibles = [botines, vendas, pantalon, medias];

let buscar = prompt("¿Desea buscar accesorios para jugar al futbol para conocer su precio?");
if(buscar.toLowerCase() == "si" || buscar.toLowerCase() == "s"){
    console.log("Esta es la lista de articulos buscados: ");
}

while(buscar.toLowerCase() == "si" || buscar.toLowerCase() == "s"){
    let acc = prompt("¿Que accesorio desea buscar?");
    let disponible = accesoriosDisponibles.find((el) => el.accesorio.includes(acc));
    if (disponible){
        alert(`El accesorio ${disponible.accesorio} se encuentra disponible y su precio es de $${disponible.precio}. En consola se encuentra disponible su consulta.`);
        console.log(disponible.accesorio + ": $" + disponible.precio);
    }else{
        alert(`El articulo ${acc} no se encuentra disponible`);
        console.log(`${acc} no esta disponible.`)
    }
    buscar= prompt("¿Desea buscar otro accesorio?");
};

// Botones
let viajar = document.querySelector(".contenedor-categorias__item-argentina");
viajar.addEventListener('click', () => {
    window.location.href = "./ligas/argentina/argentina.html"
});


