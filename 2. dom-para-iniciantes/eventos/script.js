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
// Previne o comportamento padrão do evento no browser. 
// No caso de um link externo, por exemplo, irá previnir que o link seja ativado.