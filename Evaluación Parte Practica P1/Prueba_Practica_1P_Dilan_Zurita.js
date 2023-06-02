//PROGRAMA PRUEBA PRACTICA PRIMER PARCIAL 

//1
let Nombre="Dilan";

//2
function suma(a,b){
    resultado=a+b;
    return resultado;
}

//3
edad=prompt("Ingrese su edad");
if(edad>=18){
    console.log("Es mayor de edad");
}
else{
    console.log("Es menor de edad");
}

//4
for(let i=1;i<=5;i++){
    console.log(i);
}

//5
function imprimirArray(array) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i]);
    }
  }
  milista=["Dilan","Zurita",1,2,3];
  imprimirArray(milista);

//6
suma=2+2;
console.log("2 + 2 es: "+suma);

/*7 ¿Qué es un array?

Un array es un tipo de dato en JavaScript que permite almacenar varios valores en una sola variable.

8 ¿Qué es un objeto?

Un objeto es un tipo de dato en JavaScript que permite almacenar pares clave-valor.

9 ¿Cuándo es mejor usar objetos o arrays?

Es mejor usar objetos cuando se necesitan almacenar pares clave-valor.

10 ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

Sí, es posible mezclar arrays con objetos y objetos con arrays en JavaScript.
*/
11
function primerElemento(array) {
    console.log(array[0]);
}

//12
function ImprimirElementosArray(array){
    for(let i=0; i<array.length;i++){
        console.log(array[i]);
    }
}

//13 ¿Cuál es la salida del siguiente código?
let nombre = "Juan";

function saludar() {
  let nombre = "María";
  console.log("Hola " + nombre);
}

saludar();
console.log("Hola " + nombre);

/*Da como resultado 
Hola María
Hola Juan
*/

//¿Cuál es la salida del siguiente código?

let x = 5;

function sumarUno() {
  x++;
}

function restarUno() {
  x--;
}

sumarUno();
sumarUno();
restarUno();
console.log(x);

/*Da como resultado
6*/

