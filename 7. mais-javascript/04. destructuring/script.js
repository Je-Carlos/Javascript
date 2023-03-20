/* Desestruturação irá facilitar a manipulação de dados. 
 Principalmnete quando há uma grande profundidade de objetos */
const carro = {
  marca: "Honda",
  ano: 2022,
};
const { marca, ano } = carro;

console.log(marca, ano);

const cliente = {
  nome: "Jean",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

console.log(cliente.compras.digitais.livros);
console.log(cliente.compras.digitais.videos);

// Exemplo prático de desestruturação
// é necessário indicar o nome da propriedade que desejamos desestruturar de um objeto
const { livros, videos } = cliente.compras.digitais;

/* é possível alterar o nome da variavel através de "nomeDaVariavel: novoNome", e
 apartir dai esta variavel só funcionará com "novoNome" */

//  tbm é possivel definir um valor padrão caso a variavel não possua um valor definido
const { nome: nomeCliente, email = "email@gmail.com" } = cliente;

console.log(livros);
console.log(videos);
console.log(nomeCliente);
console.log(email);

// Destructuring Arrays
const frutas = ["banana", "uva", "morango"];

const [fruta1, fruta2, fruta3] = frutas;
console.log(fruta3, fruta1, fruta2);

// Tbm é possivel declara uma sequência de variaveis
const [primeiro, segundo, terceiro] = ["Item 1", "Item 2", "Item 3"];
console.log(segundo);

/* argumento desestruturado

Se uma função espera receber como argumento um objeto, podemos desestrutrar ele no
momento da declaração
*/
function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}
document.addEventListener("keyup", handleKeyboard);
