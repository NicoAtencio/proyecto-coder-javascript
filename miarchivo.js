const precioConDescuento = (camisetas, rebaja) => {
    let suma = camisetas*1000 - (((camisetas * 1000)*rebaja)/100);
    alert(`Usted a comprado ${camisetas} camisetas y con el descuento aplicado del ${rebaja}% el total a pagar es de $${suma}. Muchas gracias por su compra`)
};

const precioSinDescuento = (camisetas) => {
    let suma = camisetas*1000;
    alert(`Usted a comprado ${camisetas} camisetas y el total a pagar es de $${suma}. Muchas gracias por su compra.`);
};

let cantidad = prompt("¿Cuantas camisetas de futbol desea comprar? Escribir número sin texto. Cada camiseta cuesta $1000");
while(!parseInt(cantidad)){
    cantidad = prompt("¿Cuantas camisetas de futbol desea comprar? Escribir número sin texto. Cada camiseta cuesta $1000");
};

const descuento = prompt("¿Posee descuento? Escribir si o no.");

if (descuento.toLowerCase() == "si" || descuento.toLowerCase() == "s"){
    let valorDescuento = prompt("Escriba de cuanto es el descuento que posee. Escribir número sin texto.");
    while(!parseInt(valorDescuento) || parseInt(valorDescuento) > 100 || parseInt(valorDescuento) < 1){
        valorDescuento = prompt("Escriba de cuanto es el descuento que posee. Escribir número sin texto.");
    };
    precioConDescuento(cantidad, valorDescuento);
}else{
    precioSinDescuento(cantidad);
};

