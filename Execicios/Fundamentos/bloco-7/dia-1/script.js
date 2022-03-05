// teste1

// function userInfo() {
//     var userEmail = 'maria@email.com';
  
//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
    
//   }
//   userInfo();
//   console.log(userEmail);

// teste2

// if (true) {
//     // inicio do escopo do if
//     const userAge = '20';
//     console.log(userAge); // 20
//     // fim do escopo do if
//   }
//   console.log(userAge); // 20

// teste3

// let userName = 'Isabella';
// let userName = 'Lucas';
// console.log(userName); // Resultado: Lucas

// teste4

// const userInfo = {
//     name: 'Cláudio',
//     id: '5489-2',
//     email: 'claudio@email.com',
//   };
  
//   userInfo.name = 'João';
  
//   console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

// teste5

// const technologies = ['Javascript', 'CSS', 'HTML'];
// technologies.push('React');
// console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

// technologies = ['Javascript', 'CSS', 'HTML', 'React']
// console.log(technologies); // Erro

// teste6

// age = 20;

// let age;

// console.log(age); // 20


// teste7

// var age;

// console.log(age); // undefined

// age = 20;

// Parte II - template literals

// teste 1

// const myName = 'Isabella';
// console.log('Hello' + ' ' + myName + '!');

// teste 2

// const myName = 'Isabella';
// console.log(`Welcome ${myName}!`);

// teste 3

// Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// Parte III - arrow functions
// teste 01

// const printName = function () {
//     const myName = 'Lucas';
//     return myName;
//   };
  
//   console.log(printName());

// const multiplica = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiplica(3, 3, 3));

// Parte IV - ternary operator


// Teste aula ao vivo arrowFunction
// função nomeada

//  function renato() {
//      return "renato lindo"
//  }
//  console.log(renato());

// função anonima

// botão.addEventListener('click', function () {
//     console.log('botão clicado' );
// })


// arrow "nomeada"

// const renato = () => {
//          return "renato lindo"
//      }
//      console.log(renato ());


// arrow anonima

// botão.addEventListener('click', () => {
//         console.log('botão clicado' );
//     });



// refatorando

// sem argumento

// const renato = () => "renato lindo";
    
//          console.log(renato ());

// com um argumento

// const renato = (quanto) => "renato lindo, " + quanto + "!"
    
//          console.log(renato ("demais"));

// quando tem so um argumento pode tirar o parentese

        //  const renato = quanto => "renato lindo, " + quanto + "!"
    
        //  console.log(renato ("demais"));


        // com dois argumentos

        // const renato = (quanto, quantooo) => "renato lindo, " + quanto + " " + quantooo + "!"
    
        //          console.log(renato ("demais", "demaisss"));




        // templateLiterals

// sem template literals

// const campeao =
// 'corinthians \n' +
// '\'campeao\' mundial';

// console.log(campeao);

// // com template literals(cold call)

// const campeaoDinovo = `corinthians
// 'campeao' mundial`;

// console.log(campeaoDinovo);


// outro exemplo

// const renato = (quanto, quantooo) => `renato lindo, ${quanto} ${quantooo}!`
    
//                  console.log(renato ("demais", "demaisss"));

// soma

// const sum = (num1, num2) => `A soma é ${num1 + num2}`;

// console.log(sum(2, 5));



// operador ternario(substitue if e else se tiver somente duas possibilidades de resposta)

// 'condicional' ? 'retorno se verdadeira' : 'retorno se falso';

// pode dirigir?



// arrow function com operador ternario e templats literal

const ageCheck = (age) => age >= 18 ? `Permitido dirigir, idade ${age}` : `Não é permitido dirigir, idade ${age}`;

console.log(ageCheck(40));
console.log(ageCheck(17));
console.log(ageCheck(18));





  