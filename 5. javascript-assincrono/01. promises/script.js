/* Existem 2 resultados possíveis para uma promessa, ela pode ser resolvida 
(primeiro argumento) ou rejeita (segundo argumento)*/
let cond = (Math.random() * 100).toFixed();
const promesa = new Promise((resolve, reject) => {
  if (cond > 50) resolve("Deu certo!");
  else reject("Falhou");
});
console.log(promesa);

/* O then será ativo após a promise for resolved, o callback será o valor da
promise resolve */
// Muito comum fazer encadeamento de then, o valor de cada um será de return
const promiseThen = promesa
  .then(
    () => {
      cond;
    },
    //tbm dá para por o cath dentro do then como segundo argumento
    (falha) => {
      console.log(falha);
    }
  )
  // vai ser executado independente do resultado da promise, não traz nenhum valor
  .finally(() => console.log("Acabou"));
console.log(promiseThen);

const semTempo = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Passou 2 seg");
  }, 2000);
});
semTempo.then((tempo) => console.log(tempo));

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Usuário Logado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 3000);
});

/* Só retorna quando todas as promises forem cumpridas, ou ao menos uma for
rejeitada */
const carregouTudo = Promise.all([login, dados]);
carregouTudo.then((r) => {
  console.log(r);
});
console.log(carregouTudo);

/* Promise.race() retorna a promise assim que aprimeira for resolvida ou 
rejeita, boa para usar com fetch() */
const loginRace = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login Efetuado");
  }, 1000);
});
const dadosRace = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});
const carregouPrimeiro = Promise.race([loginRace, dadosRace]);
carregouPrimeiro.then((resposta) => {
  console.log(resposta); // Login Efetuado
});
