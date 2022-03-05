// Arreys

// exemplo 1

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);
// [
//     'Fazer exercícios da Trybe',
//     'Tomar café',
//     'Reunião',
//     'Brincar com o cachorro'
// ]

// exemplo 2

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.shift();
// console.log(tasksList);
//   . pop remove a ultima tarefa, . shift remove a primeira.

// resultado: [ 'Reunião', 'Brincar com o cachorro' ]

// exemplo 3

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let indexOfTask = tasksList.indexOf('Reunião');
// console.log(indexOfTask);

// indexOf() , usado para procurar o índice de um item no Array
// RESULTADO: 1

// exemplo 4

// .push() adiciona um novo item no final do array.

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
// console.log(tasksList);

// resultado ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// Exercicios p treinar

// ex:1

// let menu = ["Home", "Serviços", "Portfólio", "Links"];
// let menuServices = menu.indexOf("Serviços");

// console.log(menuServices);

// ex:2

// let menu = ["Home", "Serviços", "Portfólio", "Links"];
// let indexofPortifolio = menu.indexOf("Portfólio");

// console.log(indexofPortifolio);

// ex: 3

// let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
// menu.push('contato');

// console.log(menu);

// For: Nesse exemplo o numero 7 é mutiplicado portodos os n de 1 a 9.

// var numero = 7;
// for(var contador = 1; contador <= 9; contador++) {
//     console.log(numero * contador);
// }

// For com Array
// ex 1

// var listaDeNomes =["Joana", "Maria", "Lucas"];
// for(var indice = 0; indice < listaDeNomes.length; indice++) {
//     var mensagem = "Boas vindas, " + listaDeNomes[indice] + "!";
//     console.log(mensagem)
// }
// ex 2

// let cars = ["Saab", "Volvo", "BMW"];

// for (let index = 0; index < cars.length; index += 1) {
//   console.log(cars[index]);
// }

// Exercicio de fixação

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
// for(let idice = 0; idice < groceryList.length; idice += 1) {
//     console.log(groceryList[idice]);
// }

// for of

// ex 1

// let names = ['João', 'Maria', 'Antônio', 'Margarida'];
// for(let nomes of names){
//     console.log(nomes);
// }

// Exercicios de Array e loop For

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for(let indice = 0; indice < numbers.length; indice += 1) {
    console.log(numbers[indice]);
}