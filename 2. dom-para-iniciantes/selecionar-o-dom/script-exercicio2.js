// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll("img");
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensImagem = document.querySelectorAll("[src^='img/imagem']");
console.log(imagensImagem);
// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const descricaoH2 = document.querySelector(".animais-descricao h2");
console.log(descricaoH2);
// Selecione o último p do site
const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[--ultimoP.length]);
