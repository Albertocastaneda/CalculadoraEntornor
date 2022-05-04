var calculatora = require("./calculadora");
describe("comprobaciones iniciales", () => {
  test("todo ok", () => {
    expect(true).toBe(true);
  });
  test("importa calc", () => {
    expect(calculatora.prueba()).toBe("todo ok");
  });
  test("sumar numeros",()=>{
      expect(calculatora.suma()).toBe("suma");
  });
  test("restar numeros",()=>{
      expect(calculatora.resta()).toBe("resta");
  });
  test("multiplicar numero",()=>{
      expect(calculatora.multiplicación()).toBe("multiplicar");
  });
  test("dividir numero",()=>{
      expect(calculatora.division()).toBe("dividir");
  });
  test("igual",()=>{
      expect(calculatora.igual()).toBe("igual");
  });
  test("conseguirNumero",()=>{
      expect(calculatora.conseguirNumero()).toBe("conseguir Número");
  });
  test("obtenerOperación",()=>{
      expect(calculatora.obtenerOperacion()).toBe("Obtener Oeración");
  });
  test("guardarNúmero",()=>{
      expect(calculatora.guardarNumero()).toBe("Guardar número");
  });
});