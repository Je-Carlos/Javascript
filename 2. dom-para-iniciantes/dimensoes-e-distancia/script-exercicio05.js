// Verifique a distância da primeira imagem
// em relação ao topo da página
const distanciaImg = document.querySelector("img");
const altura = distanciaImg.offsetTop;
console.log(altura);
// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll("img");
  let soma = 0;
  imagens.forEach((imagem) => {
    soma += imagem.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const linksMinimo = document.querySelectorAll("a");

linksMinimo.forEach((links) => {
  const linkWidth = links.offsetWidth;
  const linkHeight = links.offsetHeight;

  if (linkHeight >= 48 && linkWidth >= 48) {
    console.log(links, "Possui boa acessibilidade");
  } else {
    console.log(links, "Não possuem boa acessibilidade");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menu = document.querySelector(".menu");
const browserValor = window.matchMedia("(max-width: 720px)").matches;

if (browserValor) menu.classList.add("menu-mobile");
else console.log("O valor é maior que 720px");
