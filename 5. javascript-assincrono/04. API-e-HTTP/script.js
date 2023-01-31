/* GET - puxa info, POST - cria info, PUT - atualiza info, DELETE - deleta info,
HEAD - puxa apenas os headers, sendo uma forma de requisição leve */

// Como seria adicionar uma nova informação nessa API, com method POST //
const url = "https://jsonplaceholder.typicode.com/posts/";
const options = {
  method: "POST",
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

// Puxando HEAD
const optionHeaders = {
  method: "HEAD",
};
fetch(url, options)
  .then((response) => response.json())
  .then((json) => console.log(json));

fetch(url, optionHeaders).then((response) => {
  console.log(response.headers.get("Content-Type"));
});

/* CORS - Cross-Origin Resource Sharing, gerencia como deve ser o 
compartilhamento de recursos entre diferente origens. 
É definido no servidor se é permitido ou não o acesso dos recursos através de 
scripts por outros sites. Utilizando o Access-Control-Allow-Origin.

Se o servidor não permitir o acesso, este será bloqueado. É possível passar 
por cima do bloqueio utilizando um proxy.

CORS é um acordo entre browser / servidor ou servidor / servidor. Ele serve 
para dar certa proteção ao browser, mas não é inviolável. */

const urlCors = "https://cors-anywhere.herokuapp.com/https://www.google.com/";
const div = document.createElement("div");

fetch(urlCors)
  .then((r) => r.text())
  .then((r) => {
    div.innerHTML = r;
    console.log(div);
  });
