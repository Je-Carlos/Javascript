/* JavaScript Object Notation - JSON 
Serve para organizar dados, composto por um conjunto de chave e valor, aspas
duplas obrigatórias.
*/

// puxar o arquivo json com o fetch
fetch("./data.json").then((r) => {
  const cloneR = r.clone();
  // Transformar um arquivo text em JSON com JSON.parse()
  cloneR.text().then((jsonText) => {
    const jsonFinal = JSON.parse(jsonText);
    console.log(jsonFinal);
  });

  r.json().then((json) => {
    json.forEach((conteudo) => {
      console.log(conteudo.tempo);
    });
  });
});

const configuration = {
  player: "Firefox",
  tempo: 24,
  aula: "0604 JSON",
};
/* Criou dentro de application uma key chamada configuration, que possui os 
valores passados acima */
localStorage.configuration = JSON.stringify(configuration);

/* pegou o JSON dentro de application e transformou em um objeto useConfig para 
ser utilizado */
const useConfig = JSON.parse(localStorage.configuration);
console.log(useConfig);
