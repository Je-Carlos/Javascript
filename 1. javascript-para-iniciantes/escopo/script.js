"use strict";
function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined

// Variavel Gloval (ERRO) -
// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável
// que pode ser acessar em qualquer escopo (global). Isso é um erro. 'use strict' impede isso.

// function mostrarCarro() {
//   carro = 'Fusca';
//   console.log(carro);
// }

// mostrarCarro(); // Fusca
// console.log(carro); // Fusca

// Escopo de Função (pai) -
// Variáveis e funções declaradas dentro de uma função, não são acessadas fora dela.

var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

// Escopo de Bloco -
// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma
// variável é utilizando const e let, pois estas respeitam o escopo de bloco.

{
  // bloco
  if (true) {
    var carro2 = "hb20"; // var vaza o bloco
    console.log(carro2);
  }
  console.log(carro2);
}
for (var i = 0; i < 10; i++) {
  // var vaza o bloco
  console.log(`Número ${i}`);
}
console.log(i);

// Const -
// Mantém o escopo no bloco, impede a redeclaração e impede
// a modificação do valor da variável, evitando bugs no código.

const semana = "Quinta";
//semana = "Sexta"; // TypeError: Assignment to constant variable.
// const semana = "Sexta"; // SyntaxError: Identifier 'semana' has already been declared
const data = {
  ano: 2018,
  mes: "Dezembro",
};
data.ano = 2022;
data.dia = 31;

// Let -
// Mantém o escopo no bloco, impede a redeclaração, 
// mas permite a modificação do valor da variável.