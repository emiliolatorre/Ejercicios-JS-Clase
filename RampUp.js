//Ejercicio 1: Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase

function contarLetra(frase, letra) {
    let indices = [];
    for(let i = 0; i < frase.length; i++) {
      if (frase[i].toLowerCase() === letra) indices.push(i);
    }
    return indices.length;
  }
  
    contarLetra('Hola', 'a');

//Ejercicio 2: Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números

function contarImpares(numUser) {
    if (numUser % 2 === 0) {
      return 25
    }
    if (numUser % 2 === 1) {
      return 30
    }
  }
  
  contarImpares(20)

// Ejercicio 3 - Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".
let separarLetrasMayus = function (palabra) {
    let palabraSeparadaMayusculas = palabra.split('').join(' ').toUpperCase();
    return palabraSeparadaMayusculas;
  }
  
  console.log(separarLetrasMayus('Ana'))

// Ejercicio 4 - Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
let numeroPalabras = function (nombre) {
    let nombreArray = nombre.split(' ')
    return nombreArray.length;
  }
  
  console.log(numeroPalabras("Antonio Alberto Jesús"))