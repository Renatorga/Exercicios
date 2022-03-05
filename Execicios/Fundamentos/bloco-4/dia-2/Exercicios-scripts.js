// Exercicios de Array e loop For

// Questão 1

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for(let indice = 0; indice < numbers.length; indice += 1) {
//     console.log(numbers[indice]);
// }

// Questão 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for(let indice = 0; indice < numbers.length; indice += 1) {
//     soma += numbers[indice];
// }
// console.log(soma);

// questão 3

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for(let indice = 0; indice < numbers.length; indice += 1) {
//     soma += numbers[indice];
// }
// let media = soma / numbers.length;
// console.log(media);

// Questão 4

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let soma = 0;
// for(let indice = 0; indice < numbers.length; indice += 1) {
//     soma += numbers[indice];
// }
// let media = soma / numbers.length;

// if (media > 20) {
//     console.log("valor maior que 20");
// }
// else {
//    console.log("valor menor ou igual a 20") ;
// }

// Questão 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maior = numbers[0]
// for(let indice = 1; indice < numbers.length; indice += 1) {
//     if (maior < numbers[indice]) {
//     maior = numbers[indice];
// }
// }
// console.log(maior);

// Questão 6

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let impar = 0
// for(let indice = 1; indice < numbers.length; indice += 1) {
//     if (numbers[indice] %2 === 1) {
//         impar += 1;
//     }
//     else {
//         console.log("nenhum valor ímpar encontrado")
//     }
// }
// console.log(impar);

// Questão 6 resposta do gabarito

// let numbers = [2, 4, 6];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

// // Questão 7

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menor = numbers[0]
// for(let indice = 1; indice < numbers.length; indice += 1) {
//     if (menor< numbers[indice]) {
//     menor = menor;
// }
// }
// console.log(menor);

// Questão 8

// let numeros = []
// for(let indice = 1; indice <= 25; indice += 1) {
//     numeros.push(indice);
// }
//     console.log(numeros);


// Questão 9

// for(let indice = 1; indice <= 25; indice += 1) {
//     console.log(indice/2);
// }

// let numeros = []
// for(let indice = 1; indice <= 25; indice += 1) {
//     numeros.push(indice);
// }
// for (let indice = 0; indice < numeros.length; indice += 1) {
//     console.log(numeros[indice] / 2);
//   };

// Bonus
// ex: 1
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] < numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers)

// ex: 2

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//       if (numbers[index] > numbers[secondIndex]) {
//         let position = numbers[index];
//         numbers[index] = numbers[secondIndex];
//         numbers[secondIndex] = position;
//       }
//     }
//   }
//   console.log(numbers)

// ex: 3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);

