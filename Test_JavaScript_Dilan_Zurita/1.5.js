/*1.5 Ciclos
1.5.1 Responde las siguientes preguntas en la sección de comentarios:
• ¿Qué es un ciclo?
Es una estructura de control que ejecuta un proceso de forma repetitiva y no tiene fin sin embargo podemos controlarlo indicando un punto de parada que por lo general se lo indica con una condición. 
• ¿Qué tipos de ciclos existen en JavaScript?
1. Ciclo while: Ejecuta repetidamente un bloque de código mientras una condición especificada sea verdadera.
2. Ciclo do-while: Similar al ciclo while, pero ejecuta el bloque de código al menos una vez antes de evaluar la condición.
3. Ciclo for: Repite un bloque de código un número específico de veces, generalmente controlado por un contador o variable de control.
4. Ciclo for...in: Itera sobre las propiedades enumerables de un objeto.
5. Ciclo for...of: Itera sobre elementos iterables como arrays, cadenas de texto, entre otros.

• ¿Qué es un ciclo infinito y por qué es un problema?
Un ciclo infinito es aquel que no tiene fin y normalmente se debe a que no se dan parametros de parada o nunca se llega a cumplir dicho punto de parada y el ciclo se repite hasta el infinito o hasta que desborde la memoria.
• ¿Puedo mezclar ciclos y condicionales?
Claro que si de hecho las condiciones sirven para especificar un punto de parada o también podemos dar la orden de si cumple una condicion entre a un bucle o a un ciclo for para recorrer algun arreglo, o realizar una operacion repetitiva.*/

/*1.5.2 Replica el comportamiento de los siguientes ciclos for utilizando ciclos
while:*/
for (let i = 0; i < 5; i++) {
console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
console.log("El valor de i es: " + i);
}

//Con ciclos while 
let i = 0;
while (i < 5) {
  console.log("El valor de i es: " + i);
  i++;
}

let i = 10;
while (i >= 2) {
  console.log("El valor de i es: " + i);
  i--;
}

/* 1.5.3 Escribe un código en JavaScript que le pregunte a los usuarios cuánto
es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones,
pero si responden mal, volvemos a empezar.
fi Pista: puedes usar la función prompt de JavaScript.*/
let respuesta = "";
while (respuesta !== "4") {
  respuesta = prompt("¿Cuánto es 2 + 2?");
  if (respuesta === "4") {
    console.log("¡Correcto! Felicitaciones.");
  } else {
    console.log("Respuesta incorrecta. Vuelve a intentarlo.");
  }
}


