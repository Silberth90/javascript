/*
### Ejercicio 1: Clasificación de Atletas


**Descripción:**


Escribe un programa que clasifique a los atletas según su tiempo en una carrera de 100 metros y determine su nivel de competencia utilizando una estructura `if-else`.


**Instrucciones:**


1. Crea una variable llamada `tiempo` y asígnale un valor en segundos que represente el tiempo que el atleta tardó en completar la carrera (por ejemplo, 9.58).
2. Utiliza una estructura `if-else` para determinar el nivel de competencia basado en el tiempo:
   - Si el tiempo es menor o igual a 10 segundos, el nivel es "Élite".
   - Si el tiempo está entre 10.01 y 11.00 segundos, el nivel es "Avanzado".
   - Si el tiempo está entre 11.01 y 12.00 segundos, el nivel es "Intermedio".
   - Si el tiempo es mayor a 12.00 segundos, el nivel es "Principiante".
3. Imprime el resultado en la consola indicando el nivel de competencia del atleta.*/

let tiempoCarrera = 10.58;
let nivel;

if (tiempoCarrera <= 10.0) {
  nivel = "Elite";
} else if (tiempoCarrera >= 10.01 && tiempoCarrera <= 11.0) {
  nivel = "Avanzado";
} else if (tiempoCarrera >= 11.01 && tiempoCarrera <= 12.0) {
  nivel = "Intermedio";
} else {
  nivel = "Principiante";
}
console.log(`el nivel del atleta es ${nivel}.`);

/***Ejemplo:**


let tiempo = 10.5;
// Salida: "El nivel de competencia es Avanzado."




### Ejercicio 2: Calificación de Temperaturas


**Descripción:**


Escribe un programa que clasifique el clima según la temperatura y determine el tipo de clima utilizando una estructura `if-else`.


**Instrucciones:**


1. Crea una variable llamada `temperatura` y asígnale un valor que represente la temperatura en grados Celsius (por ejemplo, 25).
2. Utiliza una estructura `if-else` para determinar el tipo de clima basado en la temperatura:
   - Si la temperatura es mayor o igual a 30 grados, el clima es "Caluroso".
   - Si la temperatura está entre 20 y 29 grados, el clima es "Templado".
   - Si la temperatura está entre 10 y 19 grados, el clima es "Fresco".
   - Si la temperatura es menor a 10 grados, el clima es "Frío".
3. Imprime el resultado en la consola indicando el tipo de clima.


**Ejemplo:**
let temperatura = 15;
// Salida: "El clima es Fresco."*/

var temperatura = 25;
var tiempo;

if (temperatura >= 30) {
  tiempo = "el clima es caluroso";
} else if (temperatura > 20 && temperatura < 29) {
  tiempo = "el clima es templado";
} else if (temperatura > 10 && temperatura < 19) "el clima es fresco";
else {
  tiempo = "El clima es frio";
}
console.log(tiempo);

/*### Ejercicio 3: Conversor de Unidades


**Descripción:**
Crea un programa que convierta entre diferentes unidades de temperatura (Celsius, Fahrenheit y Kelvin) utilizando una estructura switch`.


**Instrucciones:**


1. Define una variable `unidadOrigen` con un valor de "Celsius", "Fahrenheit" o "Kelvin".
2. Define una variable `temperatura` con el valor de temperatura que deseas convertir.
3. Utiliza una estructura `switch` para convertir la temperatura a las otras dos unidades.
   - Si `unidadOrigen` es "Celsius", convierte a Fahrenheit y Kelvin.
   - Si `unidadOrigen` es "Fahrenheit", convierte a Celsius y Kelvin.
   - Si `unidadOrigen` es "Kelvin", convierte a Celsius y Fahrenheit.
4. Muestra en la consola las temperaturas convertidas.*/

let unidadOrigen = "Celsius";
var temperatura = 25;

switch (unidadOrigen) {
  case "Celsius":
    console.log(`Fahrenheit: ${(temperatura * 9) / 5 + 32}`);
    console.log(`kelvin: ${temperatura + 273.15}`);
    break;
  case "Fahrenheit":
    console.log(`celsius: ${((temperatura - 32) * 5) / 9}`);
    console.log(`kelvin: ${((temperatura - 32) * 5) / 9 + 273.15}`);
    break;
  case "kelvin":
    console.log(`celsius: ${temperatura - 273.15}`);
    console.log(`Fahrenheit: ${((temperatura - 273.15) * 9) / 5 + 32}`);
    break;
  default:
    console.log("la unidad de origen no es valida");
    break;
}

/***Tips:**
- Fórmulas de conversión:
  - De Celsius a Fahrenheit: `F = (C * 9/5) + 32`
  - De Celsius a Kelvin: `K = C + 273.15`
  - De Fahrenheit a Celsius: `C = (F - 32) * 5/9`
  - De Fahrenheit a Kelvin: `K = (F - 32) * 5/9 + 273.15`
  - De Kelvin a Celsius: `C = K - 273.15`
  - De Kelvin a Fahrenheit: `F = (K - 273.15) * 9/5 + 32`


### Ejercicio 4: Calculadora Simple


**Descripción:**
Implementa una calculadora simple que realice operaciones básicas (suma, resta, multiplicación, división) según la opción seleccionada utilizando un `switch`.


**Instrucciones:**


1. Crea dos variables `num1` y `num2` que representen los números que deseas operar.
2. Crea una variable `operacion` que indique la operación a realizar: "suma", "resta", "multiplicacion", o "division".
3. Utiliza un `switch` para realizar la operación correspondiente:
   - Si `operacion` es "suma", realiza la suma de los dos números.
   - Si `operacion` es "resta", realiza la resta de los dos números.
   - Si `operacion` es "multiplicacion", realiza la multiplicación de los dos números.
   - Si `operacion` es "division", realiza la división de los dos números.
4. Muestra el resultado en la consola.

*/
const num1 = 10;
const num2 = 2;
const calcular = "suma";

switch (calcular) {
  case "suma":
    console.log(`El resultado: ${num1 + num2}`);
    break;
  case "resta":
    console.log(`El resultado: ${num1 - num2}`);
    break;
  case "multiplicacion":
    console.log(`El resultado: ${num1 * num2}`);
    break;
  case "division":
    console.log(`El resultado: ${num1 / num2}`);
    break;

  default:
    console.log("operacion no valida");
    break;
}

var tiempo;
tiempo = 9.58;
if (tiempo <= 10.0) {
  console.log("el nivel de atletas es de Elite");
} else if (tiempo > 10 && tiempo < 11) {
  console.log("el nivel del atleta es Avanzado");
} else if (tiempo > 11.01 && tiempo <= 12.0) {
  console.log("el nivel de atletas es Intermedio");
} else tiempo > 12.0;
("principiante");
