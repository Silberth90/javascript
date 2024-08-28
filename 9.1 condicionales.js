/*### Ejercicio 1: Verificación de Edad para Consumo de Alcohol

**Descripción:**
- Define un objeto llamado `persona` que tenga propiedades como `edad` y `pais`.
- Crea una condicional que verifique si la persona tiene al menos 18 años para México y 21 años para EE.UU.
- Muestra un mensaje indicando si la persona puede consumir alcohol o no, basado en las leyes de su país.*/

let persona = {
  edad: 19,
  pais: "Mexico",
};
if (
  (persona.edad >= 18 && persona.pais === "Mexico") ||
  (persona.edad >= 21 && persona.pais === "EE UU")
) {
  console.log(`si puede beber alcohol ya que es de ${persona.pais}`);
} else {
  console.log("no puede beber alcohol");
}

/*### Ejercicio 2: Calificación de Notas

**Descripción:**
- Ingrese una nota del 0 al 100.
- Utiliza condicionales para asignar una calificación: 
  - 90-100: A
  - 80-89: B
  - 70-79: C
  - 60-69: D
  - Menos de 60: F
- Muestra la calificación correspondiente.*/

let nota = 80;
let calificacion;

if (nota >= 90 && nota <= 100) {
  calificacion = "A";
} else if (nota >= 80 && nota <= 89) {
  calificacion = "B";
} else if (nota >= 70 && nota <= 79) {
  calificacion = "C";
} else if (nota >= 60 && nota <= 69) {
  calificacion = "D";
} else {
  calificacion = "F";
}
console.log(`la nota es una ${calificacion}`);
/*### Ejercicio 3: Descuentos en Compras

**Descripción:**
- Define una variable `precioOriginal` con el precio inicial de un producto.
- Define una variable `cantidad` que representa la cantidad de productos comprados.
- Aplica descuentos basados en la cantidad:
  - 10% de descuento si se compran 3 o más productos.
  - 20% de descuento si se compran 5 o más productos.
- Muestra el precio final después del descuento.*/

var precioOriginal = 20;
var cantidad = 5;
var descuento;

if (cantidad >= 5) {
  descuento = 0.2;
} else if (cantidad >= 3) {
  descuento = 0.1;
} else {
  descuento = 0;
}
var precioFinal = precioOriginal * cantidad * (1 - descuento);
console.log(`El precio final es ${precioFinal}`);
