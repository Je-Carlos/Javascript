// método assincrono que ativa o callback após um tempo passado.
// o código lê primeiro todo o script e depois ele executa o setTimeout
function wait(text) {
  console.log(text);
}
// function, tempo, mensagem
setTimeout(wait, 5000, "Passou 5s");

// tbm é comum passar anonima e anonima
setTimeout(() => {
  console.log("passou 2s");
}, 2000);

// colocar um loop junto de um setTimeout todos serão executados ao mesmo tempo
// pois o loop acontece em milisegundos
// for(let i=0; i<=15;i++){
//   setTimeout(()=>{
//     console.log("se passaram "+i+"s")
//   },1000 * i) // Ele executa um a um, desta forma faz a contagem por segundos
// }

const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);
function handleClick() {
  setTimeout(() => {
    this.classList.add("active");
  }, 2000);
}

// ativar o callback toda vez que passar uma quantidade de tempo
function loop(text) {
  console.log(text);
}
setInterval(loop, 300, "300ms");

let i = 0;
const setLoop = setInterval(() => {
  console.log(i++);
  if (i > 20) clearInterval(setLoop);
}, 500);
