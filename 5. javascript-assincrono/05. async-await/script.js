// ASYNC
async function puxarDados() {
  /* o try e catch serve para lidar com erros, ele tentara fazer algo, se ele
  pegar algum erro ira mostrar e não vai executar o script */
  try {
    const responseDados = await fetch("./data.json");
    const jsonData = await responseDados.json();

    document.body.innerText = jsonData[0].aula;
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
}
puxarDados();

// A diferença entre async e then é uma sintaxe mais limpa

// THEN
function iniciarFetch() {
  fetch("./data.json")
    .then((dadosResponse) => dadosResponse.json())
    .then((jsonData) => {
      document.body.innerText = jsonData[0].aula;
    });
}
iniciarFetch();

// Fazer dois fetchs "ao mesmo tempo"
async function initAsync() {
  const dataResponse = fetch("./data.json");
  const clientResponse = fetch("./clients.json");

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJson = await (await dataResponse).json();
  const clientJson = await (await clientResponse).json();
  console.log(clientJson);
  console.log(dadosJson);
}
initAsync();
