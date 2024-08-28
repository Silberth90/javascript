/*### Ejercicio 1: Verificación de Descuento

**Descripción:**

Escribe un programa que determine si un cliente recibe un descuento basándose en su estatus de miembro. Utiliza el operador ternario para simplificar la lógica.

**Instrucciones:**

1. Crea una variable llamada `esMiembro` y asígnale un valor booleano (`true` o `false`) que indique si el cliente es miembro del programa de fidelidad.
2. Usa el operador ternario para determinar el porcentaje de descuento:
   - Si `esMiembro` es `true`, el descuento es del 20%.
   - Si `esMiembro` es `false`, el descuento es del 5%.
3. Imprime en la consola el porcentaje de descuento aplicable.*/

let esMiembro = true;
let fidelidad =
  esMiembro === true ? "el descuento es 20%" : "el descuento es de 5%";

console.log(fidelidad);

/*### Ejercicio 2: Estado del Estudiante

**Descripción:**

Escribe un programa que determine el estado de un estudiante basado en su calificación promedio utilizando el operador ternario.

**Instrucciones:**

1. Crea una variable llamada `calificacionPromedio` y asígnale un valor entre 0 y 100.
2. Usa el operador ternario para determinar el estado del estudiante:
   - Si `calificacionPromedio` es mayor o igual a 70, el estado es "Aprobado".
   - Si `calificacionPromedio` es menor a 70, el estado es "Reprobado".
3. Imprime en la consola el estado del estudiante.*/

let calificacionPromedio = 80;

let calificación = calificacionPromedio >= 70 ? "aprobado" : "reprobado";

console.log(calificación);

/*### Ejercicio 3: Determinación de Paridad

**Descripción:**

Escribe un programa que verifique si un número es par o impar utilizando el operador ternario.

**Instrucciones:**

1. Crea una variable llamada `numero` y asígnale cualquier valor entero.
2. Usa el operador ternario para verificar si el número es par o impar:
   - Si `numero` es divisible por 2 (resto cero), el resultado es "Par".
   - Si `numero` no es divisible por 2 (resto no cero), el resultado es "Impar".
3. Imprime en la consola si el número es par o impar.*/

const num1 = 3;

const numero = num1 % 2 == 0 ? "El resultado es Par" : "El resultado es Impar";

console.log(numero);
