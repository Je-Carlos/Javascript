// é possível acessar o histórico de acesso do browser através do window.history
console.log(window.history);

/* o pushState manipula o histórico (obj, title, url) 
 Em obj podemos enviar um objeto com dados
 mas o seu uso é restrito por isso geralmente utilizamos
 null. O title ainda é ignorado por alguns browsers, também
 utilizamos null nele. O url que é parte importante. */

// window.history.pushState(null, null, "sobre.html");

/* O popstate executa a função toda vez que o usuário clicar no botão voltar
 ou próximo, porém precisa ter sofrido o pushState, se não, não executa */
window.addEventListener("popstate", () => {
  console.log("Testando");
});
function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href); // atualizar a href
}
async function fetchPage(url) {
  document.querySelector(".content").innerHTML = "Carregando";
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(newText) {
  // atualizar as páginas "dinamicamente"
  const newHtml = document.createElement("div");
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector(".content");
  const newContent = newHtml.querySelector(".content");
  oldContent.innerHTML = newContent.innerHTML;

  // atualizar o título da pag.
  document.title = newHtml.querySelector("title").innerText;
}

window.addEventListener("popstate", () => {
  fetchPage(window.location.href);
});

const links = document.querySelectorAll("a");
links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
