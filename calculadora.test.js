var calculatora = require("./calculadora");
describe("comprobaciones iniciales", () => {
  test("todo ok", () => {
    expect(true).toBe(true);
  });
})
describe("calcular suma",()=>{
     test("sumar numeros",()=>{
      expect(calculatora.suma()).toBe("suma");
  });
})
describe("calcular resta",()=>{
    test("restar numeros",()=>{
      expect(calculatora.resta()).toBe("resta");
  });
})
describe("calcular multiplicación",()=>{
    test("multiplicar numero",()=>{
        expect(calculatora.multiplicación()).toBe("multiplicar");
    });
}) 
describe("calcular división",()=>{
    test("dividir numero",()=>{
        expect(calculatora.division()).toBe("dividir");
    });
})

describe("calcular igual",()=>{
    test("igual",()=>{
        expect(calculatora.igual()).toBe("igual");
    });
})

describe("calcular potencia",()=>{
    test("potencia",()=>{
        expect(calculatora.potencia()).toBe("Potencia");
    });
})

test("importa calc", () => {
    expect(calculatora.prueba()).toBe("todo ok");
});

test("conseguirNumero",()=>{
    expect(calculatora.conseguirNumero()).toBe("conseguir Número");
});
test("obtenerOperación",()=>{
    expect(calculatora.obtenerOperacion()).toBe("Obtener Oeración");
});
test("GuardarResultado",()=>{
  expect(calculatora.GuardarResultado()).toBe("Guardar Resultado");
});