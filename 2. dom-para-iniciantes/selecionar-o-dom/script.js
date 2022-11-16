// ID -
// getElementById seleciona e retorna elementos do DOM pelo ID
const animais = document.getElementById("animais");
console.log(animais.innerText);

// Classe e Tag -
// getElementsByClassName e getElementsByTagName selecionam e retornam uma
// lista de elementos do DOM

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName("grid-section");
const contato = document.getElementsByClassName("grid-section contato");
// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName("ul");

// Seletor Geral Único -
// querySelector retorna o primeiro elemento que combinar com o seu seletor CSS.
console.log(gridSection[0], gridSection, contato);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInterno = document.querySelector("[href^='#']"); // retornando href.
console.log(linkInterno);
// Seletor Geral Lista -
// querySelectorAll retorna todos os elementos compatíveis
// com o seletor CSS em uma NodeList

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

const gridSectionHtml = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section"); // adicionando classe

console.log(gridSectionHtml);
console.log(gridSectionNode);

// Array-like -
// O método de Array forEach(), existe apenas em NodeList.

gridSectionNode.forEach(function (item, index) {
  console.log(item);
});

const arrayGrid = Array.from(gridSectionHtml);
arrayGrid.forEach(function(item){
  console.log(item);
})