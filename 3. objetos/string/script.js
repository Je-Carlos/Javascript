// Strings
const comida = "Sushi";
const bebida = new String("Agua"); // Uma função String
bebida.length; // 4
bebida[0]; // A
bebida[bebida.length - 1]; // a

// Métodos

// Posição da String
const linguagem = new String("javascript");
linguagem.charAt(0);
linguagem.charAt(linguagem.length - 1);

// Concatenar
const frase = "I love ";
console.log(frase.concat(linguagem, " !"));

// Procurar na String
const fruta = "Tomate";
const listaDeFrutas = "Melancia, Morango, Tomate, Laranja, Banana";

if (listaDeFrutas.includes(fruta)) console.log("Tem tomate");
else console.log("Não tem");

// Começa com/Termina com
console.log(linguagem.startsWith("ja"));
console.log(linguagem.endsWith("p"));

// Cortar String de acordo com os valores passados
const transacao1 = "Deposito do cliente";
const transacao2 = "Deposito do fornecedor";
const transacao3 = "Taxa de camisas";

console.log(transacao1.slice(0, 3));
console.log(transacao2.slice(0, 3));
console.log(transacao3.slice(0, 3));
console.log(transacao1.slice(12));
console.log(transacao1.slice(-4));
console.log(transacao1.slice(transacao1.length - 7));

// Corta de acordo com o valores de start e end
console.log(linguagem.substring(3, 5));
console.log(linguagem.substring(4));
console.log(linguagem.substring(-3)); // Não funciona com valores negativos

// Retornar o undex da String
const instrumento = "Baixxo";
console.log(instrumento.indexOf("x")); // Retorna o primeiro X
console.log(instrumento.lastIndexOf("x")); // Retorna o ultimo X
console.log(instrumento.indexOf("xo")); // Retorna a partir do XO

// Aumentar o tamanho da string se der
const precos = ["R$ 99,00", "R$ 199,00", "R$ 399,90"];
precos.forEach((preco) => {
  console.log(preco.padStart(15, "."));
});
console.log(precos[2].padEnd(15, "0"));

// Repetir string N vezes
const rptPalavra = "mec";
console.log(rptPalavra.repeat(6));

// Trocar parte da string por outra
let listaRoupas = "Camisa Boné Calça Bermuda Vestido Saia";
console.log(listaRoupas.replace(/[ ]/g, ", "));
let precoRoupas = "R$ 3,560.00"
precoRoupas = precoRoupas.replace(/[.]/g, ",");
console.log(precoRoupas); // R$ 3,560,00

// Dividir a string e retornar em array
const arrayRoupas = listaRoupas.split(" ");
console.log(arrayRoupas);
const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split("div");
const novoHtml = htmlArray.join("section"); // transforma a div em uma section
console.log(novoHtml);

// Retornar a string em letras maiusculas ou minusculas
console.log(linguagem.toUpperCase() === "JAVASCRIPT");
console.log(linguagem.toLowerCase() === "javascript");

// Remover espaços em branco
const valor = "   R$ 23.00  "
valor.trim();// "R$ 23.00"
valor.trimStart(); // "R$ 23.00   "
valor.trimEnd(); // "  R$ 23.00"