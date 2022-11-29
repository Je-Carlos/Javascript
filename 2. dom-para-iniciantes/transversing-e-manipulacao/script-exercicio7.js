// Duplique o menu e adicione ele em copy
const copy = document.querySelector(".copy");
const selecionaMenu = document.querySelector(".menu");
const cloneMenu = selecionaMenu.cloneNode(true);
copy.appendChild(cloneMenu);
// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector(".faq-lista dt");
console.log(primeiroDt.innerHTML);
// Selecione o DD referente ao primeiro DT
const primeiroDd = document.querySelector(".faq-lista dd");
console.log(primeiroDd.innerHTML);
// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;
