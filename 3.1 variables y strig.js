/*### Ejercicio 1: Creación de Variables y Uso de Strings

**Descripción:** Crea un script en JavaScript que defina varias variables utilizando diferentes tipos de comillas y concatene textos.

**Instrucciones:**

1. **Define las siguientes variables:**
  - Una variable `nombre` que almacene tu nombre usando comillas simples.
 - Una variable `apellido` que almacene tu apellido usando comillas dobles.
 - Una variable `frase` que almacene una frase que incluya comillas dentro, utilizando comillas simples en el exterior y dobles en el interior.*/

/*2. **Concatena las variables `nombre` y `apellido` en una nueva variable llamada `nombreCompleto` y añade un espacio entre ellas. Imprime `nombreCompleto` en la consola.*/

/*3. **Muestra la variable `frase` en la consola.**/

const nombre = "silbert";
const apellido = "garcia";
let frase = "'hola' como estas";

let nombreCompleto = nombre + " " + apellido;

console.log(nombreCompleto);

console.log(frase);

/*### Ejercicio 2: Uso de Números y Operadores

**Descripción:** Crea un script que realice operaciones básicas con números y utilice operadores de comparación.

**Instrucciones:**

1. **Define las siguientes variables:**
   - `numero1` con el valor 10.
   - `numero2` con el valor 5.
   - `resultadoSuma` que almacene la suma de `numero1` y `numero2`.
   - `resultadoResta` que almacene la resta de `numero1` y `numero2`.

2. **Utiliza operadores de comparación para determinar:**
   - Si `numero1` es mayor que `numero2` y almacena el resultado en una variable `esMayor`.
   - Si `numero1` es igual a `numero2` y almacena el resultado en una variable `esIgual`.

3. **Imprime los resultados de las operaciones y las comparaciones en la consola.**/

let numero1 = 10;
let numero2 = 5;

let resultadoSuma = numero1 + numero2;

console.log(resultadoSuma);

let resultadoResta = numero1 - numero2;

console.log(resultadoResta);

/*### Ejercicio 3: Arrays y Objetos

**Descripción:** Trabaja con arreglos y objetos para almacenar y acceder a información estructurada.

**Instrucciones:**

1. **Crea un arreglo `diasSemana` que contenga los días de la semana.**

2. **Imprime el tercer día de la semana en la consola.**

3. **Crea un objeto `persona` con las siguientes propiedades:**
   - `nombre`: tu nombre
   - `edad`: tu edad
   - `esEstudiante`: un valor booleano indicando si eres estudiante o no

4. **Accede a las propiedades del objeto `persona` e imprime un mensaje en la consola usando estas propiedades.***/

let diasSemana = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

console.log(diasSemana[2]);

let persona = {
  nombre: "silver",
  edad: 34,
  esEstudiante: true,
};

let MisDatos = `hola mi nombre es ${persona.nombre} y tengo ${persona.edad} años y ${persona.esEstudiante} estoy cursando curso de javascrip`;

console.log(MisDatos);
