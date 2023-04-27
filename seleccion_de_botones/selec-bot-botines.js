const botonAdidas1 = document.getElementById("adidas1");
botonAdidas1.addEventListener("click", agregar);

const botonAdidas2 = document.getElementById("adidas2");
botonAdidas2.addEventListener("click", agregar);

const botonAdidas3 = document.getElementById("adidas3");
botonAdidas3.addEventListener("click", agregar);

const botonNike1 = document.getElementById("nike1");

const botonNike2 = document.getElementById("nike2");

const botonNike3 = document.getElementById("nike3");

const botonTriaxGo = document.getElementById("triaxGo");

const botonUmbro = document.getElementById("umbro");

const botones =[
    botonNike1,
    botonNike2,
    botonNike3,
    botonTriaxGo,
    botonUmbro
]

for (let valor of botones){
    valor.addEventListener("click", agregar);
}