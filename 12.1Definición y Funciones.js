/***Instrucciones:**
1. Define una función llamada `mostrarMensaje` que reciba un parámetro `mensaje` y lo muestre en la consola utilizando `console.log`.
2. Llama a la función `mostrarMensaje` tres veces con diferentes mensajes de tu elección.*/

let mostrarMensaje = function (mensaje) {
  console.log(mensaje);
};
mostrarMensaje("hola como estas");
mostrarMensaje("como estubo tu dia");
mostrarMensaje("buen probecho");

/*### Ejercicio 2: Funciones Expresadas y Eventos
**Objetivo:** Practicar la asignación de funciones a variables y su uso con eventos.

**Instrucciones:**
1. Crea una función expresada asignada a una variable llamada `saludarUsuario`. La función debe recibir un parámetro `nombre` y mostrar en la consola un saludo personalizado como "Hola, [nombre]".
2. En un archivo HTML, crea un botón que al hacer clic llame a la función `saludarUsuario` con un nombre que tú definas.*/

var saludarUsuario = function (nombre) {
  console.log("hola, " + nombre);
};
saludarUsuario("silberth");

/*Solución: Si no te sale, mira la solucion, sino hacelo vos sin mirar la solución
**Código Esperado (JavaScript):**
```javascript
const saludarUsuario = function(nombre) {
    console.log("Hola, " + nombre);
};
```

**Código Esperado (HTML):**
```html
<button onClick="saludarUsuario('Ana')">Saludar</button>
``*/

/*### Ejercicio 3: Funciones Flecha y Retorno de Valores
**Objetivo:** Practicar la creación de funciones flecha y el retorno de valores.

**Instrucciones:**
1. Crea una función flecha llamada `sumar` que reciba dos números como parámetros y devuelva su suma.
2. Llama a la función `sumar` con diferentes pares de números y muestra los resultados en la consola.*/

let sumar = (num1, num2) => {
  console.log(num1 + num2);
};
sumar(2, 4);
sumar(6, 8);
sumar(8, 2);

const presentarPersona = (nombre1, edad = 18) => {
  console.log(`me llamo ${nombre1} y tengo ${edad} años!`);
};
presentarPersona("silbert");
presentarPersona();
