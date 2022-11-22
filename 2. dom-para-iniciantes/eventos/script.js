// addEventListener () -
// Adiciona uma função ao elemento, esta chamada de callback
// , que será ativada assim que certo evento ocorrer neste elemento.
const img = document.querySelector("img");

img.addEventListener("click", () => {
  console.log("clicas-te");
});

// callback -
// É uma boa prática separar a função de callback do addEventListener, ou seja
// declarar uma função ao invés de passar ele diretamente anônima

function callback() {
  console.log("boas práticas");
}
img.addEventListener("click", callback);

// event
// O primeiro parâmetro do callback é referente ao evento que ocorreu.
// geralmente utilizam "e" como nome do parâmetro.
function callbackEvent(event) {
  console.log(event);
}
img.addEventListener("click", callbackEvent);

// Propriedades do event

const animaisLista = document.querySelector(".animais-lista");
function executarCallback(event) {
  console.log(event.currentTarget); // this
  console.log(event.target);
  console.log(event.type);
}
animaisLista.addEventListener("click", executarCallback);

// event.preventDefault(); -
// Método que previne o comportamento padrão do evento no browser.
// No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector("a[href^='http']");
function handleLinkExterno(event) {
  event.preventDefault();
  console.log(event);
}
linkExterno.addEventListener("click", handleLinkExterno);

// this -
// A palavra chave this é uma palavra especial de JavaScript,
// que pode fazer referência a diferentes objetos dependendo do contexto.
// No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

const thisImg = document.querySelector("img");
function handleLinkThis(event) {
  event.preventDefault();
  console.log(this);
  console.log(event.currentTarget); // Retorna o mesmo valor que this
  console.log(this.getAttribute("src"));
}
thisImg.addEventListener("click", handleLinkThis);

// Diferente Eventos -
// Existem diversos eventos como click, scroll, resize, keydown, keyup,
// mouseenter e mais. Eventos podem ser adicionados a diferentes elementos,
// como o window e document também.

const h1 = document.querySelector("h1");
function handleEvent(event) {
  console.log(event.type, event);
}
// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);

// // window - eventos gerais
// window.addEventListener("scroll", handleEvent);
// window.addEventListener("resize", handleEvent);
// window.addEventListener("keydown", handleEvent);

function handleKeyboard(event) {
  // muda a cor da pagina conforme aperta J ou H
  if (event.key === "j")
    document.body.classList.toggle("roxo"); // muda a classe do body
  else if (event.key === "h") document.body.classList.toggle("rosa");
}
window.addEventListener("keydown", handleKeyboard);

// forEach() e eventos
// O método addEventListener é adicionado a um único elemento, então é necessário
// fazer um loop entre os elementos da lista.

const srcImgs = document.querySelectorAll("img");
function handleImgSrc(event) {
  const src = event.currentTarget.getAttribute("src");
  console.log(src);
}
srcImgs.forEach((img) => {
  img.addEventListener("click", handleImgSrc);
});
