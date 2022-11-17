// forEach() -
// Melhor forma para interagir com uma lista de itens do dom é através do forEach

const imgs = document.querySelectorAll("img");
//console.log(imgs);
let i = 0;
imgs.forEach(function (item, index, array) {
  // em base da lista de imagens, para cada item, faça
  //console.log(i++) // irá imprimir o incrementar i em base da quantidade de imgs
  //console.log(item, index, array)
});

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

// console.log(titulos) // retorna uma HTMLCollection
// console.log(titulosArray) // retorna um array

titulosArray.forEach(function (item) {
  // console.log(item);
});

// Arrow Function() -
/* Sintaxe curta em ralação a function expression. Basta remover a palavra chave
 function e adicionar a seta => após os argumentos.*/

const arrowImgs = document.querySelectorAll("img");

arrowImgs.forEach((item, index) => {
  console.log(item, index);
});

// quando só tem um argumento, não precisa dos parenteses
// quando só tem uma linha de código, não precisa das chaves
arrowImgs.forEach((item) => console.log(item));
