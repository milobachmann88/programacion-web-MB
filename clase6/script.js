const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const email = document.querySelector("#email").value;
  const cantidad = document.querySelector("#cantidad").value;
  const tamaño = document.querySelector('input[name= "tamaño"]:checked');
  const masa = document.querySelector("#masa").value;
  const arroba= email.includes("@")


  if (nombre===""){
    mensaje.textContent= "Error: el nombre es obligatorio"
    return;
  }
  if (email===""){
    mensaje.textContent= "Error: el email es obligatorio"
    return
  }

  if(cantidad<1){
    mensaje.textContent= "Error: la cantidad debe ser mayor a 0"
    return
  }

  if (arroba===false){
    mensaje.textContent= "Error: el email no es valido"
    return 
  }

  mensaje.textContent = `Pedido recibido, ${nombre}. Cantidad: ${cantidad} pizzas. Te confirmamos a ${email}. ¡Gracias!`;

});