// Window e Document -
// São os objetos principais do DOM, boa parte da manipulação 
// é feita através dos seus métodos e propriedades.

//window.alert("Olá, mundo!");

const href = window.location.href;
console.log(href);
if (
  href ===
  "http://127.0.0.1:5500/2.%20dom-para-iniciantes/o-que-e-o-dom/index.html"
) {
  console.log("É a página inicial");
}

const h1Selecionado = document.querySelector("h1");
const h1Classes = h1Selecionado.classList[0];

// Node -
// Toda tag html é representada pelo objeto Element e por isso herda os
// seus métodos e propriedades. Element é um tipo de objeto Node.

h1Selecionado.addEventListener("click",function(){
  console.log("Clicou no h1", h1Classes);
})