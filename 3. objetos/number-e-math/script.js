// number
const ano = 2022;
const preco = new Number(199.9);

// É NaN
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(4 + 5)); // false

// É inteiro/Integral
console.log(Number.isInteger(20)); // true
console.log(Number.isInteger(23.6)); // false

// Retornar um número a partir de uma string
console.log(parseFloat("3244442.21"));
console.log(parseInt("120.23")); // 120 - inteiro apenas
console.log(parseFloat("R$100")); // NaN - Nao pode ter caract na frente
console.log(parseFloat("100 Reais")); // 100 - Pode ter caract após

// Arredondamento
let precoFloat = 2.78;
console.log(precoFloat.toFixed()); // 3 - arredonda para cima

precoFloat = 2.34;
console.log(precoFloat.toFixed()); // 2 - arredonda para baixo

const carroPreco = 1500.32042;
console.log(carroPreco.toFixed(2)); // 1500.32 - arredonda para 2 casas decimais

// Formatar número de acordo com a língua
const precoEmReal = 1230.75;
console.log(
  precoEmReal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
console.log(
  precoEmReal.toLocaleString("en-US", { style: "currency", currency: "USD" })
);

// Math
console.log(Math.PI); // 3.141592653589793
console.log(Math.abs(-5.5)); // 5.5 - valor absoluto
console.log(Math.ceil(4.8334)); // 5 - arredonda para cima
console.log(Math.floor(4.8334)); // 4 - arredonda para baixo
console.log(Math.round(4.8334)); // 5 - arredonda para o mais próximo
console.log(Math.max(5, 3, 10, 42, 2)); // 42 - maior número
console.log(Math.min(5, 3, 10, 42, 2)); // 2 - menor número
console.log(Math.random()); // 0.123456789 - número aleatório entre 0 e 1
console.log(Math.floor(Math.random() * 100)); // 0 - 99 - número aleatório entre 0 e 99
console.log(Math.floor(Math.random() * (27 - 3 + 1)) + 3); // Numero aleatorio entre 27 e 3
/* Existem inumeras formulas, pesquisar online ou digitar Math no console. */