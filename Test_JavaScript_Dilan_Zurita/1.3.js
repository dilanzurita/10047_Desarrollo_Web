/* 1.3 Funciones
1.3.1 Responde las siguientes preguntas en la sección de comentarios:
• ¿Qué es una función?
Es un subproceso dentro de nuestro programa que realiza una tarea específica y normalmente puede devolver una respuesta o simplemente imprimirla.
• ¿Cuándo me sirve usar una función en mi código?
Me sirve utilizar una función cuando quiero realizar el mismo proceso varias veces de esta forma puedo reutilizar código y llamar a la función cada que sea necesario en lugar de escribir todo el algoritmo varias veces en el programa.
• ¿Cuál es la diferencia entre parámetros y argumentos de una función? 
Parametro es aquella variable que la función espera recibir al ser llamada y que luego se le dará uso en dicha función, por otro lado el argumento es el dato o variable que pasamos a la función al momento de llamarla.*/

/*1.3.2 Convierte el siguiente código en una función, pero, cambiando cuando
sea necesario las variables constantes por parámetros y argumentos
en una función:*/
const name = "Diego Medardo";
const lastname = "Saavedra García";
const completeName = name +" "+ lastname;
const nickname = "Diegol";
console.log("Mi nombre es "
+ completeName
+ ", pero prefiero que me digas "
+ nickname + ".");

function presentarse(name,lastname,nickname){
    let fullname = name+" "+lastname;
    console.log("Mi nombre es "+ fullname+" pero prefiero que me digas "+nickname);
}
presentarse(name,lastname,nickname);
