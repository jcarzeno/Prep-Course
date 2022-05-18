// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
 var newArray = Object.keys(objeto)
  .map(function(value) {
    return [value,objeto[value]]
    });
    return newArray
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objetoAcc = {} //declaramos un objeto vacio como acumulador
  string.split("").forEach(function(letra){ //con .split() tranformamso a "string" en arreglo. Con el forEach lo recorremos. 
    objetoAcc[letra] ? objetoAcc[letra]++ : objetoAcc[letra] = 1;
  })
  return objetoAcc
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var mayuscula = "";
  var minuscula = "";
  for (i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase()) {
      mayuscula = mayuscula + s[i];
    } else {
      minuscula = minuscula + s[i];
    }
  }
  return mayuscula + minuscula;
}




function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
 
  var espejo = '';
  for(let i = str.length -1; i >= 0; i--) {
    espejo += str[i];
  };
 return espejo.split(' ').reverse().join(' ');
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
//Compararemos la variable 'numero'

  if((numero.toString().split('').reverse().join('')) === numero.toString()){ //convertido a Array será numero = [2, 0, 2];    //Con el método reverse, invertimos la posición de los elementos numero = [2, 0, 2]; //Una vez hecho eso, unimos el Array para convertirlo en un string usando el método join, entonces aleatorio será numero = '202';
    return "Es capicua"

}else{

  return "No es capicua"
} 

}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  nuevaCadena = cadena.split("").filter(x => x !== "a" && x !== "b" && x !== "c")

  return nuevaCadena.join("")

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  nuevoArray = arr.sort((a, b)=> a.length - b.length)
  return nuevoArray;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
arrayIntersection = arreglo1.filter(value => arreglo2.includes(value))
return arrayIntersection
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

