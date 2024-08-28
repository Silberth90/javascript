/*### Ejercicio 1: Creación de Mensajes con Template Strings

**Instrucciones:**

1. Declara tres variables:
   - `nombre`: "Lucía"
   - `edad`: 30
   - `ciudad`: "Buenos Aires"

2. Utiliza una Template String para crear un mensaje que diga: "Hola, soy Lucía, tengo 30 años y vivo en Buenos Aires."

3. Imprime el mensaje en la consola.*/

const nombre = "lucia";
const edad = 30;
const ciudad = "Buenos Aires";

const datos = `hola soy ${nombre},tengo ${edad} años y vivo en ${ciudad}.`;
console.log(datos);

/*### Ejercicio 2: Formato de Fechas y Tiempos

**Instrucciones:**

1. Crea una nueva fecha utilizando el objeto `Date` de JavaScript.
2. Declara variables para el día, mes, y año, obtenidas de la fecha actual. (guarden en las variables el dia, mes y año)
3. Usa una Template String para construir una cadena que diga: "Hoy es 29 de julio de 2024."
4. Imprime la cadena en la consola.*/

let fecha = new Date();
const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const año = fecha.getFullYear();

const mensajeDia = `hoy es ${dia} de ${mes} de ${año}.`;
console.log(mensajeDia);

/*### Ejercicio 3: Cálculo y Mensajes Dinámicos

**Instrucciones:**

1. Declara las siguientes variables:
   - `precioUnitario`: 50
   - `cantidad`: 3
   - `descuento`: 0.1 (10% de descuento)

2. Calcula el precio total con descuento y almacénalo en una variable llamada `precioConDescuento`.

3. Usa una Template String para crear un mensaje que diga: "El precio total después del 10% de descuento es $135."

4. Imprime el mensaje en la consola.*/

let Preciounitario = 50;
let cantidad = 3;
let descuento = 0.1;

precioConDescuento = Preciounitario * cantidad * (1 - descuento);

console.log(
  `El precio total despues del 10% descuento es ${precioConDescuento}$.`
);
