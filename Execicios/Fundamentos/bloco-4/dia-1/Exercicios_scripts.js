// Questão 1

// const a = 9;
// const b = 7;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// Fim, fim,fim, fim

// Questão 2

// const x = 14;
// const y = 14;

// if (x > y) {
//     console.log(x);
// }
// else if (x < y) {
//     console.log(y);
// }
// else {
//     console.log("igual");
// }

// Fim, fim,fim, fim

// Questão 3

// const m = 20;
// const n = 25;
// const o = 18;

// if (m > n && m > o) {
//     console.log(m);
// }
// else if (n > m && n > o) {
//     console.log(n);
// }
// else {
//     console.log(o)
// }

// Fim, fim,fim, fim

// Questão 4

// const z = 0;
// if (z > 0) {
//     console.log("positive");
// }
// else if (z < 0) {
//     console.log("nagative");
// }
// else {
//     console.log("zero")
// }

// Fim, fim,fim, fim

// Questão 5

// const r = 0;
// const s = 60;
// const t = 60;
// let triangulo = r + s + t;
// if (r <=0 || s <= 0 || t <= 0) {
//     console.log("Erro, não é triangulo");
// }
// else if (triangulo === 180) {
//     console.log(true);
// }
// else {
//     console.log(false)
// }

// Fim, fim,fim, fim

//  Questão 6

// const chessPiece = 'bispo';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };

// Fim, fim,fim, fim

// Questão 7

// let nota = 65;
// if (nota >= 90 && nota <= 100) {
//     console.log("A");
// }
// else if (nota >= 80 && nota < 90) {
//     console.log("B")
// }
// else if (nota >= 70 && nota < 80) {
//     console.log("C")
// }
// else if (nota >= 60 && nota < 70) {
//     console.log("D")
// }
// else if (nota >= 50 && nota < 60) {
//     console.log("E")
// }
// else if (nota >= 0 && nota < 50) {
//     console.log("F")
// }
// else {
//     console.log("Erro, nota inválida");
// }

// Questão 8

// const primeiroNumero = 5;
// const segundoNumero = 3;
// const terceiroNumero = 7;
// if (primeiroNumero % 2 ===0 || segundoNumero % 2 ===0 || terceiroNumero % 2 ===0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// Questão 9

// const primeiroNumero = 4;
// const segundoNumero = 6;
// const terceiroNumero = 8;
// if (primeiroNumero % 2 !==0 || segundoNumero % 2 !==0 || terceiroNumero % 2 !==0) {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// Questão 10

// const custo = 10;
// const venda = 15;
// const imposto = 0.2;
// const custoTotal = custo + (custo * imposto);
// const lucro = venda - custoTotal;
// const lucroTotal = lucro * 1000;
// if (custo >=0 && venda >= 0 && imposto >= 0) {
//     console.log(lucroTotal);
// }
// else {
//     console.log("Erro, valor inválido");
// }

// Questão 11

let salarioBruto = 10000;
let salarioBase;
let salarioLiquido;

console.log(salarioLiquido = salarioBruto);

if (salarioBruto > 5189.82) {
    console.log(salarioBase = salarioBruto - 570.88);
}
else if (salarioBruto > 2594.92) {
    console.log(salarioBase = salarioBruto * 0.89);
}
else if (salarioBruto > 1556.94) {
    console.log(salarioBase = salarioBruto * 0.91);
}
else {
    console.log(salarioBase = salarioBruto * 0.92);
}

if (salarioBase < 1903.99) {
    console.log(salarioLiquido = salarioBase);
}
else if (salarioBase < 2826.66) {
    console.log(salarioLiquido = (salarioBase * 0.925) + 142.80); 
}
else if (salarioBase < 3751.06) {
    console.log(salarioLiquido = (salarioBase * 0.85) + 354.80); 
}
else if (salarioBase < 4664.68) {
    console.log(salarioLiquido = (salarioBase * 0,775) + 636.13); 
}
else {
    console.log(salarioLiquido = (salarioBase * 0.725) + 869.36); 
}