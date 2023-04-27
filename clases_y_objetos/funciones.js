// Donde se guarda todo los productos seleccionados por el usuario.
const carro = [];


// Agregar al local store y al arreglo carro los productos seleccionados por el cliente.  
const agregar = (e) => {
    if (!localStorage.length) {
        // En caso de que este vacio el local Store agregar el primer objeto dentro de un array
        agregarCarroSiNoEsta(e);
    } else {
        let seleccionado = carro.find((p) => p.id === e.target.id);
        // Para saber si el objeto ya se encuetra en el arreglo carro.
        if (seleccionado) {
            seleccionado.cantidad = seleccionado.cantidad + 1;
            // Aumenta la cantidad en uno en caso de que exista
            // Busca en el array carro donde se encuentra el objeto con el mismo id para reemplazar la cantidad.
            for (let i = 0; i < carro.length; i++) {
                if (carro[i].id == seleccionado.id) {
                    carro[i] = seleccionado;
                    localStorage.setItem("datos", JSON.stringify(carro));
                    // Manda el array actualizado al local store
                }
            }
        } else {
            agregarCarroSiNoEsta(e);
        }
    }
    borrarLoPintado();
    pintarCarro();
};

const agregarCarroSiNoEsta = (e) => {
    for (let remera of listaProductos) {
        if (remera.id === e.target.id) {
            remera.agregarAlCarro();
            carro.push(remera);
            localStorage.setItem("datos", JSON.stringify(carro));
        }
    }
}
// Agrega al arreglo carro un objeto que no se encuentre en el arreglo.


if (localStorage["datos"]) {
    let productosEnStore = JSON.parse(localStorage.getItem("datos"));
    for (let valores of productosEnStore) {
        carro.push(valores)
    }
}
// Agregar todo lo que este en el local store al arreglo carro


const borrarLoPintado = () => {
    let quitar = document.querySelectorAll(".agregado")
    for (let eliminar of quitar) {
        eliminar.remove();
    };
};
// Borra el carro


const pintarCarro = () => {
    for (let seleccionado of carro) {
        for (let agre in seleccionado) {
            if (agre == "id") {
                continue;
            }
            let carro = document.querySelector(".carro__secciones");
            let div = document.createElement("div");
            div.classList.add("carro__secciones-items", "agregado");
            div.innerHTML = `${seleccionado[agre]}`
            carro.append(div);
        }
    }
};
// Pinta el carro
pintarCarro();

let pagar = document.querySelector(".boton__comprar");
pagar.addEventListener("click", () => {
    borrarLoPintado();
    localStorage.clear();
    carro.splice(0, carro.length);
    alert("Muchas gracias por su compra");
});
// Vaciar el carro y el arreglo carro al pagar.


// Funcion para buscar producto
const existeProducto = () => {
    let valorInput = buscar.value.toLowerCase()
    let encontrados = listaProductos.filter((i) => i.nombre.toLowerCase().includes(valorInput));
    buscar.value = "";
    if (encontrados.length > 0) {
        sessionStorage.setItem("buscado", JSON.stringify(encontrados));
        console.log(encontrados)
    };
}