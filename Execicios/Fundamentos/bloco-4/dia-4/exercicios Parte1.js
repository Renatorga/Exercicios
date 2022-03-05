// Questão 1
// Usando o objeto abaixo, faça os exercícios a seguir:

// Imprima no console uma mensagem de boas-vindas para a personagem
// acima, incluindo seu nome. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };
  console.log("Bem vinda " + info.personagem);

// questão 2

// Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor
// 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim'
//   };

//   console.log(info);

// questão 3

// Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'sim'
//   };
// for (let indice in info) {

//   console.log(indice);

// }

// Questão 4
// Faça um novo for/in , mas agora mostre todos os valores das
// chaves do objeto. Valor esperado no console:

// let info = {
//         personagem: 'Margarida',
//         origem: 'Pato Donald',
//         nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//         recorrente: 'sim'
//       };
//     for (let indice in info) {
    
//         console.log(info[indice]);
    
//     }

//     Questão 5 Resposta conforme gabarito ( nao entendi)
// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro
// e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color
// Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto
// juntos de acordo com cada uma das chaves. Valor esperado no console:
// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim',
//   };
  
//   let info2 = {
//     personagem: 'Tio Patinhas',
//     origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
//     nota: 'O último MacPatinhas',
//     recorrente: 'Sim',
//   };
  
//   for (let properties in info) {
//     if (
//       properties === 'recorrente' &&
//       info[properties] === 'Sim' &&
//       info2[properties] === 'Sim'
//     ) {
//       console.log('Ambos recorrentes');
//     } else {
//       console.log(info[properties] + ' e ' + info2[properties]);
//     }
//   }

// Usando o objeto abaixo, faça os exercícios a seguir:

// // Questão 6
// // Acesse as chaves nome , sobrenome e titulo , que está dentro da chave
// // livrosFavoritos , e faça um console.log no seguinte formato:
// // "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

//   for(let indice in leitor.livrosFavoritos);

//   console.log("O livro favorito de " + leitor.nome +" " +
//   leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo);


// Questão 7 e 8 não entendi nem olhando o gabarito

// exercicios parte 2 - funções

// Questão 1
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true

// function palíndromo(str) {
   
//         let invertida = str.split("").reverse().join("");
//         return str === invertida
// }
// console.log(palíndromo("araras"));

// Questão 2
// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

// function indiceMaiorValor() {
   
//     let maior = array[0];
// let indice = 0
// for (let i = 1; i < array.length; i += 1) {
// if (array[i] > maior) {
//     maior = array[i]
//     indice = i;
// }
// }
// return indice
// }
// let array = [1, 3, 5, 7, 9, 0];
// console.log(indiceMaiorValor(array));

// Questão 3
// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// // Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// // Valor esperado no retorno da função: 6 .

// function indiceMenorValor() {
   
//         let menor = array[0];
//     let indice = 0
//     for (let i = 1; i < array.length; i += 1) {
//     if (array[i] < menor) {
//         menor = array[i]
//         indice = i;
//     }
//     }
//     return indice
//     }
//     let array = [-25, 1, 3, 5, 7, 9, 0];
//     console.log(indiceMenorValor(array));

// Questão 4 - Crie uma função que receba um array de nomes e retorne
// o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

// function maiorString(array) {
//     let maior = 0
//     for(let i = 0; i < nomes.length; i += 1) {
//         if (maior < nomes[i].length) {
//             maior = nomes[i].length;
//         }
//     }
//     for(let j = 0; j < nomes.length; j += 1) {
//         if(nomes[j].length === maior) {
//             novoArray.push(nomes[j]);
//         }
//     }
//     if (novoArray.length === 1) {
//         return novoArray[0];
//     }
//     else {
//         return novoArray
//     }
// }
// let nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
// let novoArray = [];

// console.log(maiorString(nomes));

// Questão 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .


// resposta do gabarito " Preciso estudar resposta para entender"

// //Duas formas de resolver o exercício
// function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;
//     for (let index in numeros) {
//       let verificaNumero = numeros[index];
//       for (let index2 in numeros) {
//         if (verificaNumero === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }
//     return numeros[indexNumeroRepetido];
//   }
  
//   function maisRepetido(numeros) {
//     let num = {};
  
//     for (let index = 0; index < numeros.length; index += 1) {
//       let valor = numeros[index];
//       if (num[valor] === undefined) {
//         num[valor] = 1;
//       } else {
//         num[valor] = num[valor] + 1;
//       }
//     }
  
//     let contRepetido = 0;
//     let contNumero = 0;
  
//     for (let prop in num) {
//       if (contRepetido < num[prop]) {
//         contRepetido = num[prop];
//         contNumero = prop;
//       }
//     }
  
//     return contNumero;
//   }
  
//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

// Questao 6 - Crie uma função que receba um número natural (númerointeiro
//     não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .


// function somar(numeros) {
// let soma = 0;
// for (let i = 2; i <= numeros; i += 1){
// soma = soma + i;
// }
// return soma;
// }
// console.log(somar(5))


// Questão 7 - Crie uma função que receba uma string word e outra string ending.
// Verifique se a string ending é o final da string word . Considere que a string
// ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false


// resposta do gabarito " Preciso estudar resposta para entender"

// //Duas formas de resolver o exercício
// function verificaFimPalavra(palavra, fimPalavra) {
//     palavra = palavra.split('');
//     fimPalavra = fimPalavra.split('');
//     controle = true;
//     for (let index = 0; index < fimPalavra.length; index += 1) {
//       if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//         controle = false;
//       }
//     }
//     return controle;
//   }
  
//   function verificaFimPalavra(palavra, fimPalavra) {
//     let inversoPalavra = palavra.split('').reverse().join('');
//     let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//     let result;
  
//     for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//       if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//         result = false;
//         break;
//       } else {
//         result = true;
//       }
//     }
    
//     return result;
//   }
  
//   console.log(verificaFimPalavra('trybe', 'be')); //true
//   console.log(verificaFimPalavra('joaofernando', 'fernan')); //false