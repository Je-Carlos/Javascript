// OuterHTML, innerHTML e innerText
const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-descricao");

h1.innerHTML = "Novo Título";
console.log(animaisLista.outerHTML);

animaisLista.innerHTML; // retorna o HTML interno
animaisLista.innerText; //retorna o texto
// Transversing -
// É navegar pelos elementos do DOM
const lista = document.querySelector(".animais-lista");
console.log(lista.parentElement); // retorna o pai
console.log(lista.parentElement.parentElement); // retorna o pai do pai
console.log(lista.nextElementSibling); // retorna o próximo abaixo
console.log(lista.previousElementSibling); // retorna o elemento acima
console.log(lista.children); // retorna HTMLCollection nos filhos
console.log(lista.children[--lista.children.length]); // retorna o último filho
console.log(lista.querySelector("li:last-child")); // retorna o último filho com CSS

// Element vs Node
// Element's represetam um elemento html, ou seja, uma tag. Node representa um nó.
// e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.
// Geralmente estamos atrás de um Element.

console.log(lista.childNodes); // retorna NodeList com todos os filhos
console.log(lista.firstChild); // retorna o primeiro filho

// Manipulando elementos -
// é possível criar elementos, adicionar e remover do DOM com métodos Node.
const animais = document.querySelector(".animais");
const contato = document.querySelector(".contato");
const titulo = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

/* 
Move o elemento para o final de animais:
 animais.appendChild(mapa); 
*/

/* 
Move o elemento antes do referenciado:
 contato.insertBefore(animais, titulo)
*/

/* 
Remove o elemento:
 contato.removeChild(titulo);
*/ 

/* 
Substitui o elemento titulo por lista:
 contato.replaceChild(lista, titulo); 
*/

// Criando elementos -
// Pode criar elementos com o JS, através do método createElement()
const novoH1 = document.createElement("h1");
novoH1.innerText = "Novo Título"; // adiciona o texto no H1
novoH1.classList.add("titulo"); // adiciona a classe titulo

faq.appendChild(novoH1); // adiciona o novoH1 no final de FAQ

// Clonando elementos -
// É possível clonar elementos com o método cloneNode()

const novoFAQ = document.querySelector(".faq");
/* 
true para clonar com filhos
const cloneFaq = novoFAQ.cloneNode(true); --> false clona sem filhos e true clona com filhos
*/
cloneFaq.classList.add("roxo"); // adiciona a classe roxo
titulo.appendChild(cloneFaq);