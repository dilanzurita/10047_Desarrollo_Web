/*1.4 Condicionales
1.4.1 Responde las siguientes preguntas en la sección de comentarios:
• ¿Qué es un condicional?
Es una estructura de control que permite tomar decisiones dependiendo si se cumple con ciertas condiciones especificadas.
• ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
1. if-else: 
Este es el condicional básico que evalúa una condición y ejecuta un bloque de código si la condición es verdadera (if), y otro bloque de código si la condición es falsa (else).
Tambien puede ser representado de esta forma: 
let variable = (condicion) ? valorSiVerdadero : valorSiFalso;

2. if-else if-else también conocidos como if-else anidados: 
Permite evaluar múltiples condiciones en cascada y ejecutar diferentes bloques de código dependiendo de qué condición se cumple primero.
3. switch: Este condicional permite evaluar múltiples casos y ejecutar un bloque de código dependiendo del valor de una expresión.
javascript

• ¿Puedo combinar funciones y condicionales?
Claro que si, las funciones y los condicionales van de la mano de hecho los condicionales son parte fundamental para que una función actua de diferente manera según lo dicte la condición.*/

//1.4.2 Replica el comportamiento del siguiente código que usa la sentencia
//switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
case "Free":
console.log("Solo puedes tomar los cursos gratis");
break;
case "Basic":
console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
break;
case "Expert":
console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
break;
case "ExpertPlus":
console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
break;}

//USANDO IF-ELSE
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
} else if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
} else if (tipoDeSuscripcion === "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
}

/*1.4.3 Replica el comportamiento de tu condicional anterior con if, else y
else if, pero ahora solo con if (sin else ni else if).*/
const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un mes");
}
if (tipoDeSuscripcion === "Expert") {
  console.log("Puedes tomar casi todos los cursos de ESPE durante un año");
}
if (tipoDeSuscripcion === "ExpertPlus") {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de ESPE durante un año");
}


