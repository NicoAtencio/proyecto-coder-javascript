const buscar = document.querySelector(".buscar");
const lupa = document.querySelector(".lupa");

lupa.addEventListener("click", existeProducto);

buscar.addEventListener("keyup", (e) =>{
    if(e.key == "Enter"){
        existeProducto();
    };
});
// Busco al apretar enter.