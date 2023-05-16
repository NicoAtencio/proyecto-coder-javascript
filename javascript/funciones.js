// Donde se guarda y recupera todos los productos seleccionados por el usuario.
const carro = JSON.parse(localStorage.getItem("datos")) || [];

// Agregar al local store y al arreglo carro los productos seleccionados por el cliente.
const agregar = (e) => {
  if (!localStorage.length) agregarCarroSiNoEsta(e);
  // En caso de que este vacio el local Store agregar el primer objeto dentro de un array
  else {
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
          break;
        }
      }
    } else {
      agregarCarroSiNoEsta(e);
    }
  }
  borrarLoPintado();
  pintarCarro();
  Toastify({
    text: "Producto agregado al carro",
    className: "info",
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
};

// Agregar al arreglo carro un objeto que no se encuentre en el arreglo carro.
const agregarCarroSiNoEsta = (e) => {
  let buscar = true;
  let i = 0;
  while (buscar) {
    if (listaProductos[i].id === e.target.id) {
      listaProductos[i].agregarAlCarro();
      carro.push(listaProductos[i]);
      localStorage.setItem("datos", JSON.stringify(carro));
      buscar = false;
    }
    i++;
  }
};

// Borra el carro
const borrarLoPintado = () => {
  let quitar = document.querySelectorAll(".agregado");
  for (let eliminar of quitar) {
    eliminar.remove();
  }
};

const pintarCarro = () => {
  fetch("../datos/datos.json")
    .then((res) => res.json())
    .then((res) => {
      for (let i = 0; i < carro.length; i++) {
        for (let j = 0; j < res.length; j++) {
          if (carro[i].id == res[j].id) {
            let carroDeCompras = document.querySelector(".carro__secciones");
            let contenedor = document.createElement("div");
            contenedor.classList.add("carro__secciones-items", "agregado");
            contenedor.innerHTML = `
              <div class="carro__secciones-items-imagen agregado"><img src=${res[j].src} class=""></div>
              <div class="agregado">Precio: $${carro[i].precio}</div>
              <div class="agregado">Cantidad: ${carro[i].cantidad}</div>
              <div class = "agregado botonesSumarRestar">
                <button class="restar ${carro[i].id}">-</button>
                <button class="sumar ${carro[i].id}">+</button>
              </div>`;
            carroDeCompras.append(contenedor);
            break;
          }
        }
      }
      let botonesSumar = document.querySelectorAll(".sumar");
      for (let i = 0; i < botonesSumar.length; i++) {
        botonesSumar[i].addEventListener("click", sumarRestarEliminar);
      }
      let botonesRestar = document.querySelectorAll(".restar");
      for (let i = 0; i < botonesRestar.length; i++) {
        botonesRestar[i].addEventListener("click", sumarRestarEliminar);
      }
    });
};
// Pinta el carro
pintarCarro();

// Enviar al formulario de compras.

let comprar = document.querySelector(".boton__comprar");
comprar.addEventListener("click", () => {
  if (carro.length > 0) window.location.href = "../html/pagar.html";
  else {
    Swal.fire({
      title: "El carro de compras esta vacio",
      text: `Debe agregar productos al carro`,
      icon: "error",
      confirmButtonText: `Entendido`,
    });
  }
});


// Funcion para buscar producto

const existeProducto = () => {
  const valorInput = buscar.value.toLowerCase();
  const encontrados = listaProductos.filter((i) =>
    i.nombre.toLowerCase().includes(valorInput)
  );
  buscar.value = "";
  if (encontrados.length > 0) {
    sessionStorage.setItem("buscado", JSON.stringify(encontrados));
    window.location.href = "../html/busqueda.html";
  } else {
    Swal.fire({
      title: "No se encuentra el producto",
      text: `El producto ${valorInput} no existe`,
      icon: "error",
      confirmButtonText: `Continuar`,
    });
  }
};
// Al hacer enter sobre al input o click en la  lupa si no se a escrito nada salen todo los productos para comprobar que todos pueden ser encontrados.


// Aumentar o bajar producto desde el carro.
let camisetasPorCantidad = carro.map((pre) => pre.precio * pre.cantidad);
let total = camisetasPorCantidad.reduce(
  (acumulador, elemento) => acumulador + elemento,
  0
  );
  // Las dejo fuera de la funcion a camisetasPorCantidad y total para que al momento de ir a comprar el usuario vea el total.
  
const sumarRestarEliminar = (e) => {
  let seleccionado = carro.find((p) => p.id === e.target.classList[1]);
  if (e.target.classList[0] === "sumar") seleccionado.cantidad = seleccionado.cantidad + 1;
  else seleccionado.cantidad = seleccionado.cantidad - 1;
  let verdadero = true;
  let i = 0;
  while (verdadero) {
    if (carro[i].id == seleccionado.id) {
      carro[i] = seleccionado;
      if (carro[i].cantidad === 0) carro.splice(i, 1);
      localStorage.setItem("datos", JSON.stringify(carro));
      // Manda el array actualizado al local store
      verdadero = false;
    }
    i++;
  }
  borrarLoPintado();
  pintarCarro();
  camisetasPorCantidad = carro.map((pre) => pre.precio * pre.cantidad);
  total = camisetasPorCantidad.reduce(
    (acumulador, elemento) => acumulador + elemento,
    0
  );
};
