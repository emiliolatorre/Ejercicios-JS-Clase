//Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
//1º Almacenar todos los números en un array
let numerosAlmacenados = [];
let numeros1a250 = [];
let numeros251a500 = [];

function pediryAlmacenarNumeros (veces) {
  for (let i=0; i<veces; i++) {
    let numerosSolicitados = parseInt(prompt('ingresa un número entero entre el 1 y 500', 'número'));
    if (!isNaN(numerosSolicitados) && numerosSolicitados > 0 && numerosSolicitados <=500) {
      numerosAlmacenados.push(numerosSolicitados)
    } else {
      console.log('Por favor, ingrese únicamente números comprendidos entre 1 y 500.')
    }
    
  }
}
pediryAlmacenarNumeros(10);

//2º Almacenar en otro array los números comprendidos entre el 1 y 250
function filtrar1a250() {
  numeros1a250 = numerosAlmacenados.filter(numero => numero <= 250)
  return numeros1a250
}
filtrar1a250()

//3º Almacenar en otro array los números comprendidos entre el 251 y 500
function filtrar251a500() {
  numeros251a500 = numerosAlmacenados.filter(numero => numero > 250)
  return numeros251a500
}
filtrar251a500();

//Comprobar resultados
console.log(numerosAlmacenados);
console.log(numeros1a250);
console.log(numeros251a500);