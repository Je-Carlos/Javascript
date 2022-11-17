// classlist -
// Retorna uma lista com as classes do elemento.
// Permite adicionar, remover e verificar se contém.

const menu = document.querySelector(".menu");

menu.className; // string com o nome da classe
menu.classList; // lista com as classes
menu.classList.add("ativo"); // adiciona a classe ativo
menu.classList.add("ativo", "mobile"); // adiciona mais de uma classe
menu.classList.remove("ativo"); // remove a classe ativo
menu.classList.toggle("ativo"); // adiciona ou remove a classe ativo

if (menu.classList.contains("ativo")) {
  // verifica se contém a classe ativo
  menu.classList.add("possui-ativo");
  menu.className += " possui-ativo"; // antes do ES6 usava-se assim para adicionar uma classe
} else {
  menu.classList.remove("ativo");
}
menu.classList.replace("ativo", "inativo"); // substitui a classe ativo por inativo

const animais = document.querySelector(".animais");
console.log(animais.attributes); // retorna uma lista com os atributos do elemento

// getAttribute e setAttribute -
// Métodos que retornam ou definem de acordo com o atributo passado.

const img = document.querySelector("img");
console.log(img.getAttribute("alt")); // retorna o valor do atributo alt
img.setAttribute("alt", "É uma raposa"); // define o valor do atributo alt
img.hasAttribute("id"); // verifica se possui o atributo

// Read Only vs Writable -
// Existem propriedades que não permitem a mudança de seus valores,
// essas são considerados Read Only, ou seja, apenas leitura.