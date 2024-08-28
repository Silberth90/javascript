/*
### Ejercicio 1: Creación y Acceso a Objetos

**Instrucciones:**

1. Crea un objeto llamado `persona` con las siguientes propiedades:
   - `nombre`: "Juan"
   - `edad`: 28
   - `correo`: "juan@example.com"

2. Usa la notación de punto para imprimir en la consola el nombre y la edad de la persona.

3. Usa la notación de corchetes para imprimir en la consola el correo de la persona.*/

let persona = {
  nombre: "Juan",
  edad: 28,
  correo: "juan@example.com",
};
console.log(persona.nombre, persona.edad);

console.log(persona["correo"]);

/*### Ejercicio 2: Agregar y Modificar Propiedades y Métodos

**Instrucciones:**

1. Usa el objeto `persona` del ejercicio anterior.
2. Agrega una nueva propiedad `direccion` al objeto `persona` con el valor "Calle 123".
3. Modifica la propiedad `edad` para que sea 29.
4. Agrega un método llamado `saludo` que imprima en la consola "Hola, mi nombre es [nombre]" usando la propiedad `nombre`.
5. Ejecuta el método `saludo`.*/

persona.direccion = "calle 123";
persona.edad = 29;
persona.saludo = function () {
  console.log("hola, mi nombre es " + persona.nombre);
};
persona.saludo();

/*### Ejercicio 3: Arreglos y Objetos Anidados

**Instrucciones:**

1. Crea un objeto llamado `persona` con las siguientes propiedades:
   - `nombre`: "Ana"
   - `edad`: 32
   - `coloresFavoritos`: un arreglo con los colores "azul", "verde", y "rojo"
   - `trabajo`: un objeto anidado con las propiedades:
     - `empresa`: "TechCorp"
     - `puesto`: "Desarrolladora"
2. Imprime el segundo color favorito de la persona.
3. Imprime el nombre de la empresa donde trabaja.
4. Agrega un método `mostrarInfo` que imprima toda la información de la persona, incluyendo sus colores favoritos y detalles del trabajo.

*/
let persona2 = {
  nombre: "ana",
  edad: 32,
  coloresFavoritos: ["azul", "verde", "roja"],
  trabajo: {
    empresa: "TechCorp",
    puesto: "Desarrolladora",
  },
};
console.log(persona2.coloresFavoritos[1]);
console.log(persona2.trabajo.empresa);

persona2.mostrarInfo = () => {
  console.log(
    `hola mi nombre es ${persona2.nombre} tengo ${persona2.edad} años y mis colores favoritos son ${persona2.coloresFavoritos}, trabajo en la empresa ${persona2.trabajo.empresa} y mi puesto es ${persona2.trabajo.puesto}`
  );
};
persona2.mostrarInfo();
/*
let persona = {
  nombre: "Juan",
  eda: 28,
  correo: "juan@example.com",
};
*/
console.log("el nombre de lA PERSONA ES ");

var miembro = true;
var ElDescuento =
  miembro == true
    ? console.log("el descuento es del 20%")
    : console.log("el descuento es del 5%");
