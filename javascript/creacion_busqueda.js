
let creacionBusqueda = JSON.parse(sessionStorage.getItem("buscado"));

fetch("../datos/datos.json")
  .then((resultado) => resultado.json())
  .then((imagenes) => {
      for (let i = 0; i < creacionBusqueda.length; i++) {
          let contenedor = document.querySelector(".contenedor");
          if (creacionBusqueda.length == 1) {
              let rellenar = document.createElement("div");
              contenedor.append(rellenar)
          }
          // Cree un div para que si es un solo producto el buscado no sea muy grande el contenedor.
          for (let datos of imagenes) {
              if (datos.id == creacionBusqueda[i].id) {
                  let divContenedor = document.createElement("div");
                  divContenedor.classList.add("contenedor__item")
                  let divContenedorImagen = document.createElement("div");
                  divContenedorImagen.classList.add("contenedor__imagen")
                  let img = document.createElement("img");
                  img.src = datos.src;
                  divContenedorImagen.append(img);
                  let contenedorBoton = document.createElement("div");
                  contenedorBoton.classList.add("contenedor__item-botones");
                  let boton = document.createElement("button");
                  boton.id = datos.id;
                  boton.classList.add("contenedor__boton-carro");
                  boton.innerText = "Añadir al carro"
                  contenedorBoton.append(boton);
                  divContenedor.append(divContenedorImagen);
                  divContenedor.append(contenedorBoton);
                  contenedor.append(divContenedor);
              }
          }
          if (creacionBusqueda.length == 1) {
              let rellenar = document.createElement("div");
              contenedor.append(rellenar);
          }
          if (creacionBusqueda.length === 2 && i == 1) {
              let rellenar = document.createElement("div");
              contenedor.append(rellenar);
          }
          // Hace que quede mejor en caso de dar como resultado dos productos.
      }
      
      
      
      for (let j = 0; j < creacionBusqueda.length; j++) {
          let hacerClick = document.getElementById(creacionBusqueda[j].id);
          if (hacerClick != null) {
              hacerClick.addEventListener("click", agregar);
          }
      };
      // Lo que hace es darle a cada boton que se cree un evento para agregar al carro.
  })
;









