/* o fetch permite fazer requisições HTTP, ele retorna uma promise, com o then
pode-se interagir com a resposta, que é um oject tipo Response. */
const doc = fetch("./doc.txt");
const cep = fetch("https://viacep.com.br/ws/14890036/json/");
const cssColor = fetch("./style.css");
const sobre = fetch("./sobre.html");
const div = document.createElement("div");
const imagemBlob = fetch("./treino.png");
const imagem404 = fetch("./404.jpg");

// Puxar um cep através de uma API
cep.then((r) => {
  // clonando o CEP e separando em um json e um text, cada um com seu then
  const cloneCep = r.clone();
  r.json().then((insideText) => {
    const content = document.querySelector(".content");
    content.innerText = insideText.logradouro;
  });
  cloneCep.text().then((text) => console.log(text));
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

// o blob() é usado para tipos de arquivos que o js não reconhece por padrão
imagemBlob.then((r) => {
  r.blob().then((b) => {
    // com o blob é possível criar uma URL e passar esse blob dentro de uma URL
    const blobUrl = URL.createObjectURL(b);
    // selecionando a img do index
    const imgTreino = document.querySelector("img");
    // adicionando a URL do imgTreino dentro da imagem
    imgTreino.src = blobUrl;
    console.log(blobUrl);
  });
});

// O headers é a propriedade que possui cabeçalhos da requisição.
imagemBlob.then((response) => {
  console.log(response.status);
  // caso o status seja de erro 404, irá apresentar uma imagem de erro
  if (response.status === 404) {
    imagem404.then((r) => {
      r.blob().then((b) => {
        const urlErro404 = URL.createObjectURL(b);
        const img404 = document.querySelector("img");
        img404.src = urlErro404;
      });
    });
  }
  // pode usar o forEach para ver cada um deles.
  response.headers.forEach(console.log);
});
