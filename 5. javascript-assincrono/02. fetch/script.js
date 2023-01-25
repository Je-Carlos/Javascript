/* o fetch permite fazer requisições HTTP, ele retorna uma promise, com o then
pode-se interagir com a resposta, que é um oject tipo Response. */
const doc = fetch("./doc.txt");
const cep = fetch("https://viacep.com.br/ws/14890036/json/");
const cssColor = fetch("./style.css");
const sobre = fetch("./sobre.html");
const div = document.createElement("div");

// Puxar um cep através de uma API
cep
  .then((r) => r.json())
  .then((insideText) => {
    const content = document.querySelector(".content");
    content.innerText = insideText.logradouro;
  });

// Injetar um CSS dentro do body do html através do fetch
cssColor
  .then((resolution) => resolution.text())
  .then((body) => {
    const style = document.createElement("style");
    const content = document.querySelector(".content");
    style.innerHTML = body;
    content.appendChild(style);
  });

// Injetar todo um HTML através do fetch
sobre
  .then((resposta) => resposta.text())
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    console.log(titulo);
    console.log(div);
  });
