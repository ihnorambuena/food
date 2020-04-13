var alimentos = [
  {icon:"🌭", id: "completo", nombre: "Completo", tipo: "Chatarra", calorias: "7cal"},
  {icon:"🌮", id: "tacoMexicano", nombre: "Taco Mexicano", tipo: "Chatarra", calorias: "6cal"},
  {icon:"🍕", id: "pizza", nombre: "Pizza", tipo: "Chatarra", calorias: "8cal"},
  {icon:"🍏", id: "manzana", nombre: "Manzana", tipo: "Fruta", calorias: "2cal"},
  {icon:"🍔", id: "hamburguesa", nombre: "Hamburguesa", tipo: "Chatarra", calorias: "7cal"},
  {icon:"🍟", id: "papasFritas", nombre: "Papas Fritas", tipo: "Chatarra", calorias: "6cal"},
  {icon:"🍉", id: "sandia", nombre: "Sandia", tipo: "Fruta", calorias: "2cal"}
]

// // Esto ordena los alimentos por su tipo, primero los Chatarra y después las Frutas.
// alimentos.sort(function (a, b) {
//   if (a.tipo > b.tipo) {
//     return 1;
//   }
//   if (a.tipo < b.tipo) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });


function anadirElemento() {
  // var nombre = eval(this.id + ".nombre");
  var botones = document.querySelector("#botones");
  var resumen = document.querySelector("#resumen");

  alimentos.forEach(function(e) {
    var boton = document.createElement("div");
    boton.innerHTML =
      '<div class="contenedorBoton">'
        + '<div class="boton" id="' + e.id + '">'
          + '<div class="content">' + e.icon + '</div>'
        + '</div>'
      + '</div>';
    botones.appendChild(boton);
  });

  alimentos.forEach(function(e) {
    var dato = document.createElement("div");
    dato.innerHTML =
      '<div class="dato" id="dato-' + e.id + '" style="display: none">'
        + '<span id="contador-' + e.id + '">' + "0" + '</span>' + e.nombre
      + '</div>';
    resumen.appendChild(dato);
  });
}

anadirElemento();

function contarElemento() {
  var contadorDelElemento = document.querySelector("#contador-" + this.id);

  if (contadorDelElemento.innerHTML == "0") {
    var dato = document.querySelector("#dato-" + this.id);
    dato.setAttribute("style", "display: block");
  }

  contadorDelElemento.innerHTML = parseInt(contadorDelElemento.innerHTML) + 1;
}


document.querySelectorAll(".boton").forEach(
  function(e) {
    e.addEventListener("click", contarElemento);
  }
)
