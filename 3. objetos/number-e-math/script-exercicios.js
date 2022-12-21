// Retorne um número aleatório
// entre 1050 e 2000
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Retorne o maior número da lista abaixo
const numeros = "4, 5, 20, 8, 9";
const arrayNumeros = numeros.split(", ");
console.log(Math.max(...arrayNumeros));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ["R$ 59,99", " R$ 100,222", "R$ 230  ", "r$  200"];
let precoTotal = 0;
function LimparPrecos(precos) {
  precos = +precos
    .toLocaleUpperCase()
    .replace("R$", "")
    .replace(",", ".")
    .trim();
  precos = +precos.toFixed(2);
  return precos;
}
listaPrecos.forEach((p) => {
  precoTotal += LimparPrecos(p);
});
console.log(
  precoTotal.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
);
