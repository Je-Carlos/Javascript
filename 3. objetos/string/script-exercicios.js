// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 49",
  },
];
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((i) => {
  const valorLimpo = +i.valor.replace("R$ ", "");
  if (i.descricao.includes("Taxa")) taxaTotal += valorLimpo;
  else recebimentoTotal += valorLimpo;
});
console.log("O valor da taxa será de " + taxaTotal);
console.log("O valor de recebimento será de " + recebimentoTotal);
// Retorne uma array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";
const arrayTransporte = transportes.split(";");
console.log(arrayTransporte);
// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;
html = html.split("span").join("a");
console.log(html);
// Retorne o último caracter da frase
const frase = "Melhor do ano!";
console.log(frase.charAt(frase.length - 1));
// Retorne o total de taxas
const transacoes2 = [
  "Taxa do Banco",
  "   TAXA DO PÃO",
  "  taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];
transacoes2.forEach((i) => {
  i = i.toLowerCase().trim().slice(0, 4);
  if (i === "taxa") console.log(i);
});
