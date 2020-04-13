
var contadorcitoManzana = 1;

function anadirElemento() {
  var resumen = document.querySelector("#resumen");
  var dato = document.createElement("div");

  if (contadorcitoManzana == 1) {
    dato.innerHTML =
    '<div class="dato">'
    + '<span id="contadorManzana">' + "1" + '</span>' + 'Manzanas'
    + '</div>';
    resumen.appendChild(dato);
  } else {
    var contadorManzana = document.querySelector("#contadorManzana");
    contadorManzana.innerHTML = contadorcitoManzana;
  }

  contadorcitoManzana++;
}

document.querySelectorAll(".boton").forEach(
  function(e) {
    e.addEventListener("click", anadirElemento);
  }
)
