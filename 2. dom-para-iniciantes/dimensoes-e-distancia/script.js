// Height e Width -

const animalList = document.querySelector(".animais-lista");
const altura = animalList.scrollHeight; // height total, mesmo dentro de scroll
animalList.clientHeight; // height + padding
animalList.offsetHeight; // height + padding + border
console.log(altura);

// offsetTop e offsetLeft -

const animalTop = animalList.offsetTop; // distância em relação ao topo
console.log(animalTop);

const primeiroH2 = document.querySelector("h2");
const h2left = primeiroH2.offsetLeft; // distância em relação à esquerda
console.log(h2left);

// getBoundingClientRect() -
// retorna um objeto com valores de width, height, distâncai do elemento e mais.
const rect = primeiroH2.getBoundingClientRect(); // passa como se fosse as coordenadas em relação ao elemento

// Window -

console.log(
  window.innerWidth, // width da janela
  window.outerWidth, // width da janela + dev tools
  window.innerHeight, // height da janela
  window.outerWidth, // height da janela + a barra de endereço

  window.pageXOffset, // distância total do scroll vertical
  window.pageYOffset // distância total do scroll horizontal
);

if (rect.top < 0) {
  console.log("passou do elemento");
}
if (window.innerWidth < 600) {
  // verificar tamanho da tela
  console.log("Tela menor que 600px");
}

// matchMedia(); -
// utiliza media-queria, assim como CSS para verificar a largura do browser

const small = window.matchMedia("(max-width: 600px)");
if (small.matches) {
  console.log("tela menor que 600px");
} else {
  console.log("tela maior que 600px");
}
