// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const links = document.querySelectorAll("a[href^='#']");
function handleLinks(event) {
  event.preventDefault();
  links.forEach((rmvLink) => {
    rmvLink.classList.remove("ativo");
  });
  this.classList.add("ativo");
}

links.forEach((link) => {
  link.addEventListener("click", handleLinks);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const elementosBody = document.querySelectorAll("body *");
function handleElementos(event) {
  console.log(event.currentTarget);
}
elementosBody.forEach((elementos) => {
  elementos.addEventListener("click", handleElementos);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
const rmvElementos = document.querySelectorAll("body *");
function handleRemove(event) {
  event.currentTarget.remove();
}
rmvElementos.forEach((e) => {
  e.addEventListener("click", handleRemove);
});
// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function screenSize(event) {
  if(event.key === "t") {
    document.documentElement.classList.toggle("aumentarTexto")
  }
}
window.addEventListener("keydown", screenSize);
