/***Ejercicio 1: Asignación de Variables**
1. Declara una variable llamada `nombre` usando `const` y asígnale tu nombre.
2. Declara una variable llamada `edad` usando `let` y asígnale tu edad.
3. Declara una variable llamada `ciudad` usando `var` y asígnale el nombre de tu ciudad.
4. Imprime el valor de estas variables en la consola.*/

const nombre = "silver"

console.log(nombre)

let edad = 34

console.log(edad)

var ciudad = "La Plata"

console.log(ciudad)



/***Ejercicio 2: Concatenación de Texto**
1. Usando las variables del ejercicio anterior, crea una nueva variable llamada `presentacion` que contenga una frase como "Hola, mi nombre es [nombre], tengo [edad] años y vivo en [ciudad]".
2. Imprime la variable `presentacion` en la consola.*/

var presentacion = (`hola , mi nombre es ${nombre},tengo ${edad} años y vivo en la ciudad de la ${ciudad}`)

console.log(presentacion)

/***Ejercicio 3: Suma de Números**
1. Declara dos variables usando `let`, `numero1` y `numero2`, y asígnales los valores numéricos que prefieras.
2. Crea una nueva variable llamada `resultado` que contenga la suma de `numero1` y `numero2`.
3. Imprime el valor de `resultado` en la consola.*/

let numero1 = 5

let numero2 = 4

let resultado = numero1 + numero2

console.log(resultado)
