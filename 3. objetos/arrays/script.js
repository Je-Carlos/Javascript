// Array
const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];

const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

// Arrays herdam metodos e propriedades
const carrosNovos = new Array("ford", "fiat", "honda");
console.log(carrosNovos);
carrosNovos[1] = "Chevrolet";
carrosNovos[3] = "Mustang";
console.log(carrosNovos.length); // tamanho da array

// transformar em array-like em array
const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);
const obj = {
  0: "Jean",
  1: "Carlos",
  length: 2,
};
const objArray = Array.from(obj);
console.log(li);
console.log(arrayLi);
console.log(objArray);
console.log(Array.isArray(objArray)); // Verificar se é Array

// Formas de criar um array
Array.of(10);
Array.of(1, 2, 3, 4);
new Array(2);
Array(5);
testeArray = Array(
  1,
  "2",
  "três",
  4,
  function Olá() {
    console.log("Olá");
  },
  6,
  7
);
console.log(testeArray);

// Metodos que modificam array
const instrumentos1 = ["Guitarra", "Baixo", "Violão"].sort();
const idades = [32, 21, 33, 43, 1, 12, 8].sort(); // ele ira organizar em base do primeiro numero de cada numero
console.log(instrumentos1);
console.log(idades);

// Adicionar elementos
const carros2 = ["Ford", "Fiat", "Kia"];
console.log(carros2.unshift("BMW")); // Retorna 4, pois é a lenght da array agr
console.log(carros2);

console.log(carros2.push("Chevrolet", "Jaguar")); // 6
console.log(carros2);

// Remover elementos
console.log(carros2.shift(), carros2); // retirou BMW - Retira o Primeiro
console.log(carros2.pop(), carros2); // retirou Jaguar - Retira o Ultimo

// Inverter a ordem da Array
console.log(carros2.reverse());

// Adicionar valores a partir do index, e remove-los tbm
carros2.splice(2, 0, "Fuscão"); // adicionou a partir do segundo index e não removeu nada
console.log(carros2);

carros2.splice(3, 2); // Removeu 2 arrays a partir do index 3
console.log(carros2);

// Copiar a array do inicio até o final e preencher a mesma coisa com essa cópia
console.log(["Item1", "Item2", "Item3", "Item4", "Item5"].copyWithin(2, 0, 3));
console.log(["Item1", "Item2", "Item3", "Item4"].copyWithin(-1));

// Preencher array com valor do inicio ao fim
console.log(["Item1", "Item2", "Item3", "Item4"].fill("Zelda", 1, 3));

// Concatenar arrays
const transporte1 = ["Barco", "Aviao"];
const transporte2 = ["Carro", "Moto"];
console.log(transporte1.concat(transporte2));
console.log([].concat(transporte1, transporte2, "olá"));

// Retornar se tem o valor na Array
const linguagens = ["html", "css", "js", "php", "python", "js"];

linguagens.includes("css"); // true
linguagens.includes("ruby"); // false
linguagens.indexOf("python"); // 4
linguagens.indexOf("js"); // Retorna o primeiro JS que achar - 2
linguagens.lastIndexOf("js"); // Retorna o ultimo JS que achar - 5

// Juntar os valores e retornar um string com eles

linguagens.join(); // 'html,css,js,php,python'
linguagens.join(" "); // 'html css js php python'
linguagens.join("-_-"); // 'html-_-css-_-js-_-php-_-python'

let htmlString = "<h2>Gatos Fantásticos</h2>".split("h2").join("h1");
console.log(htmlString);

//Retornar itens da array começando pelo inicio e indo até o final
console.log(linguagens.slice(3));
console.log(linguagens.slice(1, 4));
const cloneLinguagens = linguagens.slice(); // Clonar a array
