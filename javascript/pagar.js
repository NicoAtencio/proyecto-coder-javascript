const totalAPagar = document.querySelector(".formulario__total-a-pagar");
totalAPagar.innerHTML = `<p> El total a pagar es $${total} </p>`;

const formulario = document.querySelector(".formulario");
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (formulario.checkVisibility()) realizarCompra();
  // Hace que solo se ejecute la funcion si todos los inputs estan completos
});

const realizarCompra = () => {
  borrarLoPintado();
  localStorage.clear();
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method : "POST",
    body : JSON.stringify({
      nombre : formulario[0].value,
      apellido : formulario[1].value,
      dni : formulario[2].value,
      mail : formulario[3].value,
      productos : carro,
      total : total
    }),
    headers : {"content-type" : "application/json; charset=UTF-8" }
  })
  .then(response => response.json())
  .then(() => {
    Swal.fire({
    title: "Su compra a sido exitosa",
    text: `El total de su compra fue $${total}, en unos segundos sera redireccionado a la pagina principal`,
    icon: "success",
    confirmButtonText: `Continuar`,
  })})
  .catch((err) => console.log(err))
  // Simula enviar la informacion a una api.
  carro.splice(0, carro.length);
  formulario.reset();
  totalAPagar.innerHTML = `<div></div>`
  setTimeout(() => {
    window.location.href = "../index.html";
  }, "6000")
};
