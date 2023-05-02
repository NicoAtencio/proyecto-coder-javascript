// Asignar a cada boton la funcion para añadir al carro dependiendo en la liga que se encuentre.

const liga = document.querySelector("article");


const asignarFuncionBotones = () => {
    for (let extraerLiga of listaProductos) {
        if (extraerLiga.seccion == liga.className) {
            let boton = document.getElementById(extraerLiga.id);
            boton.addEventListener("click", agregar);
        }
    }
}

asignarFuncionBotones();

