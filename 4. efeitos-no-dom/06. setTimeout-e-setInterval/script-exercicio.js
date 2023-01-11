// Mude a cor da tela para azul e depois para vermelho a cada 2s.

// const loopColor = setInterval(function mudaCor() {
//   document.body.classList.toggle("active");
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const resetar = document.querySelector(".resetar");
const tempo = document.querySelector(".time");

iniciar.addEventListener("click", initTempo);
pausar.addEventListener("click", stpTempo);
resetar.addEventListener("click", rstTempo);

let i = 0;
let timer;

function initTempo() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  iniciar.setAttribute("disabled", "");
}
function stpTempo() {
  clearInterval(timer);
  iniciar.removeAttribute("disabled", "");
}
function rstTempo() {
  tempo.innerText = 0;
  i = 0;
  iniciar.removeAttribute("disabled", "");
  stpTempo();
}
