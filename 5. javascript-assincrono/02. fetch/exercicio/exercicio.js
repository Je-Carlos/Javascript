// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar
const userCep = document.getElementById("cep");
const retornaCep = document.querySelector(".retornaCep");
const btnBuscaCep = document.getElementById("btnCep");
const retornaLogradouro = document.querySelector(".retornaLogradouro");
const retornaBairro = document.querySelector(".retornaBairro");

// add ao botão o evento de buscar o cep
btnBuscaCep.addEventListener("click", handleClick);

// função que vai previnir o evento padrão do botão
function handleClick(event) {
  event.preventDefault();
  const cep = userCep.value;
  procuraCep(cep);
}

function procuraCep(cep) {
  //template string, que vai receber o cep
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((insideText) => {
      retornaCep.innerText = insideText.cep;
      retornaLogradouro.innerText = insideText.logradouro;
      retornaBairro.innerText = insideText.bairro;
    });
}
// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const btcPrice = document.querySelector(".btcPrice");

// Puxando o preço do btc em reais
function btcFetch() {
  fetch("https://blockchain.info/ticker")
    .then((response) => response.json())
    .then((BTC) => {
      // mostrando o preço e substituindo "," por "."
      btcPrice.innerText = ("R$" + BTC.BRL.buy).replace(".", ",");
    });
}
// a função vai atualizar a cada 5 minutos
setInterval(btcFetch, 60000 * 5);
btcFetch();

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
const btnNewJoke = document.querySelector(".newJoke");
const displayJoke = document.querySelector(".joke");
function getJoke() {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((r) => r.json())
    .then((joke) => {
      displayJoke.innerText = joke.value;
    });
}
btnNewJoke.addEventListener("click", getJoke);
getJoke();

const catImg = document.querySelector(".catImg");
const newCat = document.querySelector(".newCat");
function getCat() {
  fetch("https://cataas.com/cat")
    .then((r) => r.blob())
    .then((cat) => {
      console.log(cat);
      const urlCat = URL.createObjectURL(cat);
      catImg.src = urlCat;
    });
}
newCat.addEventListener("click", getCat);
getCat();
