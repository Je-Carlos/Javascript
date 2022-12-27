// forEach()
const carros = ["ford", "fiat", "palio"];
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});

// arrow Function
const li = document.querySelectorAll("li");
const retornoForEach = li.forEach((i) => i.classList.add("ativa"));
console.log(retornoForEach); // retorna Undefined

// objetivo for modificar os valores da array atual utiliza o .map()
const comidas = ["mamão", "arroz", "bife"];
const retornoMap = comidas.map((item, index, array) => {
  return item.toUpperCase(); // precisa do return
});
console.log(retornoMap); // Retorna a array correta

const numeros = [2, 4, 6, 8, 10, 12, 14, 26];
const retornoNumeros = numeros.map((i) => i * 2); // o return está omitido pois funciona em apenas uma linha
console.log(retornoNumeros);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];
const minAula = aulas.map((aula) => aula.min);
console.log(minAula);

const tempoAula = (aula) => aula.min;
const nomeAula = (aula) => aula.nome;

const arrayNomeAulas = aulas.map(nomeAula);
const arrayTempoAulas = aulas.map(tempoAula);

/*  Realiza a soma do array, ele possui um acumulador que pode ser passado, caso 
vc queira somar com algum valor inicial, se não é 0 por padrão. 
  .reduce()*/
const aulas2 = [10, 25, 30];

const reduceAulas = aulas2.reduce((acumulador, item) => {
  return item + acumulador;
}, 0);
console.log(reduceAulas);

// verificar o maior numero
const numerosDesorganizados = [10, 5, 24, 54, 73, 22];
const numerosOrganizados = numerosDesorganizados.reduce((anterior, atual) =>
  atual > anterior ? atual : anterior
);
console.log(numerosOrganizados);

// retornar valores com reduce
const listaAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {}); // {} == objeto vazio

// tem como usar o reduce da direita para a esquerda com .reduceRight()
const frutas = ["Banana", "Pêra", "Uva"];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + " " + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);
console.log(frutasRight);
console.log(frutasLeft);

// se PELO MENOS UM return da iteração for verdadeiro ele retorna true com .some()
const temBanana = frutas.some((item) => {
  return item === "Banana";
});
console.log(temBanana);

// se TODOS os return da iteração forem verdadeiros ele retorna true, se não será false
const Todos = frutas.every((fruta) => {
  return fruta;
});
console.log(Todos);

// verificar se é maior que N numero
const MaiorQueCinco = numeros.every((n) => n >= 5);
console.log(MaiorQueCinco);

/*
.find()
Retorna o valor atual da primeira iteração que retornar um valor verdadeiro
.findIndex()
Ao invés de retornar o valor, vai retornar o index deste valor na array 
*/
const indexBanana = frutas.findIndex((item) => item === "Banana");
console.log("O index é " + indexBanana);
const findUva = frutas.find((item) => item === "Uva");
console.log("o item é " + findUva);

/* 
Retorna uma array com a lista de valores que durante sua iteração retornam verdadeiro
.filter()
*/
const arrayBaguncada = ["Banana", undefined, null, "", "Uva", 0, "Maçã"];
const arrayFruta = arrayBaguncada.filter((item) => item);
console.log(arrayFruta);
const numeroBaguncado = [6, 43, 55, 8456, 1, 2, 27, 69];
const maiorQueQuarenta = numeroBaguncado
  .filter((numeros) => numeros > 40)
  .sort();
console.log(maiorQueQuarenta);
