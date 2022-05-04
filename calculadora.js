console.log("importado correctamente");

var num1;
var num2;
var resultado = "";
var operacion;

function suma(n1, n2) {
  return n1 + n2;
}
function resta(n1, n2) {
  return n1 - n2;
}
function multiplicación(n1, n2) {
  return n1 * n2;
}
function division(n1, n2) {
  return n1 / n2;
}

function igual() {
  //en funcion de "operacion" y de num1 y num2, resultado va a ser una cosa u otra

  switch (operacion) {
    case "+":
      resultado = suma(num1, num2);
      console.log(resultado);
      break;
    case "-":
      resultado = resta(num1, num2);
      console.log(resultado);
      break;
    case "*":
      resultado = multiplicación(num1, num2);
      console.log(resultado);
      break;
    case "/":
      resultado = division(num1, num2);
      console.log(resultado);
      break;
    default:
      break;
  }

  num1 = null;
  num2 = null;
  operacion = null;
  document.getElementById("resultado").innerHTML = resultado;
}

function conseguirNumero(num) {
  // console.log(num)
  if (operacion == null) {
    num1 = num;
    document.getElementById("primerN").innerHTML = num1;
  } else {
    num2 = num;
    document.getElementById("segundoN").innerHTML = num2;
  }
}
function obtenerOperacion(op) {
  // console.log(operacion)
  operacion = op;
  document.getElementById("operacion").innerHTML = operacion;
}

function GuardarResultado() {
  num1 = resultado;
}

function prueba() {
    return "todo ok";
}

module.exports = {num1,num2,resultado,operacion,suma, resta, multiplicación,division,igual,conseguirNumero,obtenerOperacion,GuardarResultado,prueba};
