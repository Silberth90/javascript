/*### Ejercicio 1: Creación y Acceso a Arreglos


**Instrucciones:**

1. Declara un arreglo llamado `frutas` usando `const` y asigna los siguientes valores: "manzana", "banana", "naranja".
2. Imprime el primer elemento del arreglo `frutas` en la consola.
3. Usa la propiedad `length` para obtener e imprimir el número de elementos en el arreglo `frutas`.
4. Accede y muestra el último elemento del arreglo utilizando la propiedad `length`.*/

const frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]);

let totalFrutas = console.log(frutas.length);

console.log(frutas[frutas.length - 1]);

/*### Ejercicio 2: Manipulación de Arreglos


**Instrucciones:**

1. Declara un arreglo llamado `numeros` con los valores `[10, 20, 30, 40]`.
2. Usa el método `push()` para agregar el número 50 al final del arreglo.
3. Sobrescribe el segundo elemento del arreglo `numeros` con el valor 25.
4. Imprime el arreglo modificado en la consola.*/

let numeros = [10, 20, 30, 40];
numeros.push(50);
console.log(numeros);

numeros[1] = 25;
console.log(numeros);

/*### Ejercicio 3: Arreglos Mixtos y Métodos Avanzados

**Instrucciones:**

1. Declara un arreglo llamado `mezcla` que contenga los siguientes elementos: "Texto", 100, `true`, [1, 2, 3].
2. Imprime el tercer elemento del arreglo `mezcla`.
3. Añade un nuevo elemento, "Nuevo Elemento", al inicio del arreglo utilizando el método `unshift()`.
4. Elimina el último elemento del arreglo `mezcla` usando el método `pop()` e imprime el arreglo actualizado.*/

let mezcla = ["texto", 100, true, [1, 2, 3]];
console.log(mezcla[2]);
mezcla.unshift("nuevo elemento");

console.log(mezcla);

mezcla.pop();

console.log(mezcla);
