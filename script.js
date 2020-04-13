var pizza = {icon:"🍕", id: "pizza", nombre: "Pizza", tipo: "Chatarra", calorias: "8cal"};
var manzana = {icon:"🍏", id: "manzana", nombre: "Manzana", tipo: "Fruta", calorias: "2cal"};
var completo = {icon:"🌭", id: "completo", nombre: "Completo", tipo: "Chatarra", calorias: "7cal"};
var tacoMexicano = {icon:"🌮", id: "tacoMexicano", nombre: "Taco Mexicano", tipo: "Chatarra", calorias: "6cal"};
var papasFritas = {icon:"🍟", id: "papasFritas", nombre: "Papas Fritas", tipo: "Chatarra", calorias: "6cal"};
var sandia = {icon:"🍉", id: "sandia", nombre: "Sandia", tipo: "Fruta", calorias: "2cal"};
var hamburguesa = {icon:"🍔", id: "hamburguesa", nombre: "Hamburguesa", tipo: "Chatarra", calorias: "7cal"};
var ji = {icon:"🍔", id: "ji", nombre: "Jiji", tipo: "Chatarra", calorias: "7cal"};

var alimentos = [
  completo, tacoMexicano, pizza, manzana,
  hamburguesa, papasFritas, sandia
]

// // Esto ordena los alimentos por su tipo, primero los Chatarra y después las Frutas.
// alimentos.sort(function (a, b) {
//   if (a.nombre > b.nombre) {
//     return 1;
//   }
//   if (a.nombre < b.nombre) {
//     return -1;
//   }
//   // a must be equal to b
//   return 0;
// });



function anadirElemento() {
  // var nombre = eval(this.id + ".nombre");

  // SELECCIONAR DIVs DEL HTML
  var botones = document.querySelector("#botones");
  var resumen = document.querySelector("#resumen");
  // CREAR DIVs VIRTUALES
  // var boton = document.createElement("div");
  // var dato = document.createElement("div");
  // CONTADOR
  // var miContador = document.querySelector("#contador-" + this.id).innerHTML + 1;

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
      '<div class="dato">'
        + '<span id="contador-' + e.id + '">' + "0" + '</span>' + e.nombre
      + '</div>';
    resumen.appendChild(dato);
  });

  // miContador = document.querySelector("#contador-" + this.id).innerHTML + 1;

}

anadirElemento();

function contarElemento() {
  var contadorDelElemento = document.querySelector("#contador-" + this.id);
  contadorDelElemento.innerHTML = parseInt(contadorDelElemento.innerHTML) + 1;
}


document.querySelectorAll(".boton").forEach(
  function(e) {
    e.addEventListener("click", contarElemento);
  }
)
