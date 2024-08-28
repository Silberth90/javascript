/*## Ejercicio 1: Verificación de Edad y Acceso a Eventos

**Instrucciones:**

1. Declara dos variables, `edad` y `tieneEntrada`. Asígnales valores como 20 y `true` respectivamente.
2. Crea una variable `permitirAcceso` que sea `true` solo si `edad` es mayor o igual a 18 y `tieneEntrada` es `true`.
3. Usa un operador lógico AND (`&&`) para verificar ambas condiciones.
4. Imprime en la consola si se permite el acceso al evento.*/

let edad = 20;
let tieneEntrada = true;

let permitirAcceso = edad >= 18 && tieneEntrada;
console.log(permitirAcceso);

/*### Ejercicio 2: Entrada con Permiso Parental

**Instrucciones:**

1. Declara dos variables, `edad2` y `permisoPadres`. Asígnales valores como 17 y `true` respectivamente.
2. Crea una variable `permitirAcceso` que sea `true` si `edad2` es mayor o igual a 18 **o** `permisoPadres` es `true`.
3. Usa un operador lógico OR (`||`) para combinar las condiciones.
4. Imprime en la consola si se permite el acceso al evento.*/

let edad2 = 17;
let permisoPadres = true;

let permitirAcceso2 = edad2 >= 18 || permisoPadres;

console.log(permitirAcceso2);

/*### Ejercicio 3: Comprobación de Entrada

**Instrucciones:**

1. Declara una variable `tieneEntrada` y asígnale el valor `false`.
2. Usa el operador NOT (`!`) para crear una variable `noTieneEntrada` que sea `true` si la persona **no** tiene una entrada.
3. Imprime el valor de `noTieneEntrada` en la consola.*/

let tieneEntrada2 = false;
let noTieneEntrada = !tieneEntrada2;

console.log(noTieneEntrada);
