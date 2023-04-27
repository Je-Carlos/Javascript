/* os objetos que possuem o método [Symbol.iterator], normalmente dentro do protótipo
é aonde se encontram as Itareble's */
const frutas = ["Banana", "Morango", "Uva"];
const frase = "Isso é JavaScript";

/* os objetos que forem iterables podem utilizar o loop "for...of", além de poder
também utilizar o Spread Operator */
for (const fruta of frutas) {
  console.log(fruta);
}
// for (const char of frase) {
//   console.log(char);
// }

const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
  (btn.style.background = "purple"), (btn.style.color = "white");
}

console.log(...buttons);

/* Existe o loop para objetos que não são iteraveis, "for...in", ele retorna a key
de todas as propriedades enumeráveis(que não sejam simbolos) de um objeto */
const carro = {
  marca: "Ford",
  ano: 2012,
};

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: false,
  },
});

for (const key in carro) {
  console.log(carro[key]);
}
for (const f in frutas) {
  console.log(frutas[f]);
}
// Utilizando o for...in para retornar as chaves e valores de propriedade enumeráveis
const btnUnico = document.querySelector("button");
const btnStyles = getComputedStyle(btnUnico);

// for (const style in btnStyles) {
//   console.log(`${style}: ${btnStyles[style]}`);
// }

// Do / While
let i = 0;
do {
  console.log(i++);
} while (i <= 5);
