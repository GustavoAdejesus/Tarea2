function cargarHistorial() {
  var historial = localStorage.getItem("historial") || "";
  document.getElementById("historial").innerHTML = historial;
}

function calcular() {
  var n1 = parseFloat(document.getElementById("num1").value);
  var n2 = parseFloat(document.getElementById("num2").value);
  var op = document.getElementById("operacion").value;
  var resultado;

  if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor ingrese dos números.");
    return;
  }

  switch(op) {
    case "+": resultado = n1 + n2; break;
    case "-": resultado = n1 - n2; break;
    case "*": resultado = n1 * n2; break;
    case "/": 
      if (n2 === 0) {
        alert("No se puede dividir por cero.");
        return;
      }
      resultado = n1 / n2; break;
  }

  var texto = n1 + " " + op + " " + n2 + " = " + resultado;
  document.getElementById("resultado").innerText = "Resultado: " + resultado;

  var historial = localStorage.getItem("historial") || "";
  historial += "<p>" + texto + "</p>";
  localStorage.setItem("historial", historial);
  cargarHistorial();
}

function limpiarHistorial() {
  localStorage.removeItem("historial");
  document.getElementById("historial").innerHTML = "";
}

window.onload = cargarHistorial;
