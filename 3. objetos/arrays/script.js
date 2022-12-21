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
const carros = new Array("ford", "fiat", "honda");
console.log(carros);
carros[1] = "Chevrolet";
carros[3] = "Mustang";
console.log(carros.length); // tamanho da array

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
const idades = [32,21,33,43,1,12,8].sort(); // ele ira organizar em base do primeiro numero de cada numero
console.log(instrumentos1);
console.log(idades)
