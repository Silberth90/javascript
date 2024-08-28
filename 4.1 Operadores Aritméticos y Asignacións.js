/*### Ejercicio 1: Operadores Aritméticos y Asignación

1. **Instrucciones:**

   - Declara dos variables, `a` y `b`, y asígnales los valores numéricos 10 y 5 respectivamente.
   - Calcula la suma, resta, multiplicación y división de `a` y `b` y guarda cada resultado en variables llamadas `suma`, `resta`, `multiplicacion`, y `division`.
   - Utiliza el operador de módulo para calcular el residuo de `a` dividido por `b` y guarda el resultado en una variable llamada `modulo`.
   - Imprime todos los resultados en la consola.*/

let a = 10;

let b = 5;

let suma = a + b;
console.log(suma);

let resta = a - b;
console.log(resta);

let multiplicacion = a * b;
console.log(multiplicacion);

let division = a / b;
console.log(division);

/*### Ejercicio 2: Operadores de Asignación

1. **Instrucciones:**

   - Declara una variable llamada `contador` y asígnale el valor de 10.
   - Utiliza el operador `+=` para sumar 5 a `contador`.
   - Usa el operador `-=` para restar 3 de `contador`.
   - Utiliza el operador `*=` para multiplicar `contador` por 2.
   - Usa el operador `/=` para dividir `contador` entre 4.
   - Imprime el valor final de `contador` en la consola.*/

let contador = 10;

contador += 5;
console.log(`la suma de ${contador}`);

contador -= 3;
console.log(`la resta de ${contador}`);

contador *= 2;
console.log(`la multiplicacion de ${contador}`);

contador /= 4;
console.log(`la division de ${contador}`);

/*### Ejercicio 3: Operadores de Comparación y Operador Ternario

1. **Instrucciones:**

   - Declara dos variables, `edadPersona1` y `edadPersona2`, y asígnales los valores 25 y 30 respectivamente.
   - Compara si `edadPersona1` es mayor que `edadPersona2` y guarda el resultado en una variable llamada `esMayor`.
   - Compara si `edadPersona1` es igual a `edadPersona2` (tanto en valor como en tipo) y guarda el resultado en una variable llamada `esIgual`.
   - Utiliza el operador ternario para determinar si `edadPersona1` es mayor o igual a 18, y asigna "Mayor de edad" o "Menor de edad" a una variable llamada `estadoEdad`.
   - Imprime los resultados de las comparaciones y el `estadoEdad` en la consola.*/

let edadPersona1,
  edadPersona2 = (25, 30);

let esMayor = edadPersona1 > edadPersona2;

console.log(esMayor);

let esIgual = edadPersona1 === edadPersona2;
console.log(esIgual);

let estadoEdad = edadPersona1 >= 18 ? "mayor de edad" : "menor de edad";

console.log(estadoEdad);
