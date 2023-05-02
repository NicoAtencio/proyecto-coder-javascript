// Donde se guarda y recupera todos los productos seleccionados por el usuario.
const carro = JSON.parse(localStorage.getItem("datos")) || [];


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
// Agrega al arreglo carro un objeto que no se encuentre en el arreglo carro.






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
            if (agre == "seccion") {
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

// Comprar
let camisetasPorCantidad;

let pagar = document.querySelector(".boton__comprar");
pagar.addEventListener("click", () => {
    camisetasPorCantidad = carro.map(pre => pre.precio * pre.cantidad);
    let total = camisetasPorCantidad.reduce((acumulador, elemento) => acumulador + elemento, 0);
    if(document.querySelector(".total")){
        let borrar = document.querySelector(".total");
        borrar.remove();
    }
    let mostrarTotal = document.createElement("h2");
    mostrarTotal.innerText = `El total a pagar es $${total}`;
    mostrarTotal.classList.add("total");
    let primerHijoTotal = document.querySelector("body");
    let segundoHijo = primerHijoTotal.childNodes[2]
    primerHijoTotal.insertBefore(mostrarTotal, segundoHijo);
    borrarLoPintado();
    localStorage.clear();
    for(let masDeCero of listaProductos){
        if(masDeCero.cantidad > 0){
            masDeCero.cantidad = 0;
        }
    }
    // Lo que hace es hacer que los productos seleccionados vuelvan a cantidad cero. 
    carro.splice(0, carro.length);
});
// Vaciar el carro y el arreglo carro al pagar.


// Funcion para buscar producto
let encontrados;

const existeProducto = () => {
    let valorInput = buscar.value.toLowerCase()
    encontrados = listaProductos.filter((i) => i.nombre.toLowerCase().includes(valorInput));
    buscar.value = "";
    if (encontrados.length > 0) {
        sessionStorage.setItem("buscado", JSON.stringify(encontrados));
        window.location.href = "../html/busqueda.html"
    } else {
        if(document.querySelector(".noExiste")){
            let borrar = document.querySelector(".noExiste");
            borrar.remove();

        }
        let noExiste = document.createElement("h2");
        noExiste.innerText = `No existe el producto ${valorInput}`
        noExiste.classList.add("noExiste")
        let primerHijoSinProducto = document.querySelector("body");
        let segundoHijo = primerHijoSinProducto.childNodes[2]
        primerHijoSinProducto.insertBefore(noExiste, segundoHijo);
    };
}
// Al hacer enter sobre al input o click en la  lupa si no se a escrito nada salen todo los productos para comprobar que todos pueden ser encontrados.

