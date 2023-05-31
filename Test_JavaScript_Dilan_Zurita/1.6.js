/*1.6 Listas
1.6.1 Responde las siguientes preguntas en la sección de comentarios:
• ¿Qué es un array?
Un array es una estructura de datos la cual almacena diferentes valores en una sola variable, otorgandoles una posicion y por ende un orden a dichos datos.
• ¿Qué es un objeto?
Un objeto es un conjunto de datos o características que tienen que ver entre si.
• ¿Cuándo es mejor usar objetos o arrays?

Un objeto se recomienda usarlos cuando se requiere propiedades personalizadas y comportamientos específicos: 
Los objetos en JavaScript te permiten definir propiedades y métodos asociados a un objeto se Puede encapsular lógica y funcionalidades específicas en un objeto.
Mientras que en un array no tendrás la misma personalización de datos ya que no giran entorno a un objeto

• ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Claro que si y es conocido como array de objetos el cual normalmente sirve para llevar un orden y tener acceso de forma ordenada a varios objetos almacenados en un espacio de memoria.
De igual manera podemos crear objetos que tienen propiedades de tipo array los cuales pueden encapsular muchos datos más en un mismo miembro de un objeto.*/

/*1.6.2 Crea una función que pueda recibir cualquier array como parámetro e
imprima su primer elemento.*/
function imprimirPrimerElemento(array) {
    if (Array.isArray(array) && array.length > 0) {
      console.log("El primer elemento del array es: " + array[0]);
    } else {
      console.log("El array está vacío o no es válido.");
    }
  }
  let miArray = ["Dilan","Sebas","Rafa","Josue","Daniela"];
imprimirPrimerElemento(miArray);

/*1.6.3 Crea una función que pueda recibir cualquier array como parámetro e
imprima todos sus elementos uno por uno (no se vale imprimir el
array completo).*/
function imprimirElementos(array) {
    if (Array.isArray(array) && array.length > 0) {
      console.log("Los elementos del array son:");
      array.forEach(function(elemento) {
        console.log(elemento);
      });
    } else {
      console.log("El array está vacío o no es válido.");
    }
  }
  let miArray = ["Dilan","Sebas","Rafa","Josue","Daniela"];
  imprimirElementos(miArray);

/*1.6.4 Crea una función que pueda recibir cualquier objeto como parámetro
e imprima todos sus elementos uno por uno (no se vale imprimir el
objeto completo).*/
function imprimirElementos(objeto) {
    if (typeof objeto === "object" && objeto !== null) {
      console.log("Los elementos del objeto son:");
      for (let clave in objeto) {
        if (objeto.hasOwnProperty(clave)) {
          console.log(clave + ": " + objeto[clave]);
        }
      }
    } else {
      console.log("El objeto es inválido.");
    }
  }
  let MyObject = {
    nombre: "Dilan",
    edad: 21,
    ocupacion: "Futbolista"
  };
  
  imprimirElementos(MyObject);