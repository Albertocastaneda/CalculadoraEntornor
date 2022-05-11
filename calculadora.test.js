var calculatora = require("./calculadora");
describe("comprobaciones iniciales", () => {
  test("todo ok", () => {
    expect(true).toBe(true);
  });
});
describe("calcular suma", () => {
  test("sumar numeros", () => {
    expect(calculatora.suma(1, 2)).toBe(3);
  });
});
describe("calcular resta", () => {
  test("restar numeros", () => {
    expect(calculatora.resta(2,1)).toBe(1);
  });
});
describe("calcular multiplicación", () => {
  test("multiplicar numero", () => {
    expect(calculatora.multiplicación(2,1)).toBe(2);
  });
});
describe("calcular división", () => {
  test("dividir numero", () => {
    expect(calculatora.division(2,1)).toBe(2);
  });
});

describe("calcular potencia", () => {
  test("potencia", () => {
    expect(calculatora.potencia(3,2)).toBe(9);
  });
});

test.skip("igual", () => {
    expect(calculatora.igual()).toBe("igual");
});

test.skip("importa calc", () => {
  expect(calculatora.prueba()).toBe("todo ok");
});

test.skip("conseguirNumero", () => {
  expect(calculatora.conseguirNumero()).toBe("conseguir Número");
});
test.skip("obtenerOperación", () => {
  expect(calculatora.obtenerOperacion()).toBe("Obtener Oeración");
});
test.skip("GuardarResultado", () => {
  expect(calculatora.GuardarResultado()).toBe("Guardar Resultado");
});
