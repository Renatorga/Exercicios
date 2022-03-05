// exemplo 1

// let diasDaSemana = {
//     1: 'domingo',
//     2: 'segunda',
//     3: 'terça',
//     4: 'quarta',
//     5: 'quinta',
//     6: 'sexta',
//     7: 'sábado',
//     };
    
//     diasDaSemana.1; // SyntaxError: Unexpected number
// console.log(diasDaSemana['1']); // domingo

// No código acima, ocorre um erro por usar notação de pontoaoinvés
// de notação de colchetes com uma propriedade nomeada com número.

// exemplo 2

// let conta = {
//     agencia: '0000',
//     banco: {
//       cod: '012',
//       id: 4,
//       nome: 'TrybeBank',
//     },
//   };
  
//   let infoDoBanco = 'banco';
//   console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
//   console.log(conta[infoDoBanco]['nome']); // TrybeBank
  
//   console.log(conta.agencia); // 0000
//   console.log(conta['agencia']); // 0000
  
//   console.log(conta.banco.cod); // 012
//   console.log(conta['banco']['id']); // 4

//   Neste exemplo, a chave banco do objeto conta , guarda um outro objeto,
//   e também há o uso de variável na notação de colchetes, além de você
//   poder ver exemplos usando notação de ponto e notação de colchetes.


// Exemplo 3

// let usuario = {
//     id: 99,
//     email: 'jakeperalta@gmail.com',
//     infoPessoal: {
//       nome: 'Jake',
//       sobrenome: 'Peralta',
//       endereco: {
//         rua: 'Smith Street',
//         bairro: 'Brooklyn',
//         cidade: 'Nova Iorque',
//         estado: 'Nova Iorque',
//       },
//     },
//   };
  
//   console.log(usuario['id']); // 99
//   console.log(usuario.email); // jakeperalta@gmail.com
  
//   console.log(usuario.infoPessoal.endereco.rua); // Smith Street
//   console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque

//   O objeto deste exemplo possui a chave infoPessoal que possui outras
//   3 chaves, uma delas sendo endereco , que é outro objeto! Ou seja,
//   o objeto usuario possui outros dois dentro dele.

// Exemplo 4

// let moradores = [
//     {
//       nome: 'Luiza',
//       sobrenome: 'Guimarães',
//       andar: 10,
//       apartamento: 1005,
//     },
//     {
//       nome: 'William',
//       sobrenome: 'Albuquerque',
//       andar: 5,
//       apartamento: 502,
//     },
//     {
//       nome: 'Murilo',
//       sobrenome: 'Ferraz',
//       andar: 8,
//       apartamento: 804,
//     },
//     {
//       nome: 'Zoey',
//       sobrenome: 'Brooks',
//       andar: 1,
//       apartamento: 101,
//     },
//   ];
  
//   let primeiroMorador = moradores[0];
//   console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
//   console.log(primeiroMorador['andar']); // 10
  
//   let ultimoMorador = moradores[moradores.length - 1];
//   console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
//   console.log(ultimoMorador.nome); // Zoey

//   Esse último bloco de código é um exemplo de um array composto por objetos. Os objetos desejadosforam
//   acessados através dos seus índices e armazenados dentro de variáveis para facilitar a compreensão.


// Fixação- 1-
// Crie um objeto player contendo as variáveis listadas abaixo.

// let player = {
//     name: "Marta",
//     lastName: "Silva",
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,       
//     },
    
// };

// // Fixação- 2-
// Acesse as chaves Name , lastName e age e concatene as
// // suas informações para imprimir no console uma mensagem no seguinte
// // formato: "A jogadora Marta Silva tem 34 anos de idade".

// console.log("A jogadora" + " " + player.name + " " + player.lastName +
// " " + "tem" + " " + player.age + " " + "anos de idade.")

// Fixação- 3-
// Adicione ao objeto a chave bestInTheWorld e atribua a esta
// chave um array contendo as datas em que a jogadora Marta foi
// considerada a melhor do mundo.

// let player = {
//     name: "Marta",
//     lastName: "Silva",
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//         bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]       
//     },
    
// };

// Fixação- 4
// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato:
// "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// let player = {
//     name: "Marta",
//     lastName: "Silva",
//     age: 34,
//     medals: {
//         golden: 2,
//         silver: 3,
//         bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],       
//     },    
// };

// console.log("A jogadora " + player.name + " " + player.lastName +
// " foi eleita a melhor do mundo por " + player.medals.bestInTheWorld.length + " vezes.")

// Fixação- 5
// Acesse a chave medals e faça um console.log no seguinte formato:
// "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

// let player = {
//         name: "Marta",
//         lastName: "Silva",
//         age: 34,
//         medals: {
//             golden: 2,
//             silver: 3,
//             bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],       
//         },    
//     };

//     console.log("A jogadora possui " + player.medals.golden +
// //     " medalhas de ouro e " + player.medals.silver + " medalhas de prata.")

// Exercicios treinamento for in

// Depois de conhecer o laço for/in , o código que mostra as marcas de carros presentes em um Array é:

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// Um outro exemplo é a iteração nas chaves de um objeto:

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }

// exercicios de fixação for in

// ex 1
// Usando o objeto abaixo, utilize for/in eimprima no consolea mensagem
// 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };
//   for(let indice in names) { 
// console.log("olá " + names[indice]);
// }

// ex 2
// Usando o objeto abaixo, utilize for/in e imprima um
// console.log com as chaves e valores desse objeto.

// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
//   for (let indice in car) {
//     console.log(indice, car[indice]);
//   }  


// function- exercicios treino

// var statusCarro = "desligado";

// function ligarDesligar() {
//     if (statusCarro === "desligado") {
//         statusCarro = "ligado";
//     }
//     else {
//         statusCarro = "desligado";
//     }
//     return statusCarro;
// }
// console.log(ligarDesligar());

// teste (exemplo simples de função)

function bomDia(){
    return "bom dia";
}
console.log(bomDia());

