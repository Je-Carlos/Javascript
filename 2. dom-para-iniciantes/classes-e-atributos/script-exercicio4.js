// Adicione a classe ativo a todos os itens do menu
const menu = document.querySelectorAll(".menu a");
menu.forEach((item) => {
  item.classList.add("ativo");
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menu.forEach((item) => {
  item.classList.remove("ativo");
});
menu[0].classList.add("ativo");
// Verifique se as imagens possuem o atributo alt
const hasImg = document.querySelectorAll("img");
hasImg.forEach((item) => {
  if (item.hasAttribute("alt")) {
    console.log("Possui alt");
  } else {
    console.log("Não possui alt");
  }
});
// Modifique o href do link externo no menu
const mudarHref = document.querySelector("a[href^='http']");
mudarHref.setAttribute("href", "https://www.origamid.com/");
console.log(mudarHref)