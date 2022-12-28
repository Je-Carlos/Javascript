// function
function areaQuadrado(lado) {
  return lado * lado;
}
const perimetro = new Function("lado", "return lado * 4");

const areaTotal = (lado) => lado * 3;

// algumas propriedades das functions
// dentro do Function.prototype pode checar outras propriedades
const somar = (n1, n2) => n1 + n2;
console.log(somar.length);
console.log(somar.name.toUpperCase());

/*
function.call()
Executa a função, sendo possivel usar o this na nova referencia
*/
function carroDescription(condicao) {
  console.log(this.marca + " " + this.ano + " " + condicao);
}
carroDescription.call({ marca: "Jaguar", ano: "1990" }, "novo");

const carros = ["Ford", "Fiat", "VW"];
const generosDeFilme = ["Ação", "Terror", "Aventura"];
carros.forEach.call(generosDeFilme, (item) => console.log(item));

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}
Dom.prototype.ativo = function (classe) {
  console.log(this);
  this.element.classList.add(classe);
};
const li = {
  element: document.querySelector("li"),
};
Dom.prototype.ativo.call(li, "ativo");
// const ul = new Dom("ul");
// ul.ativo.call(li, "ativo");
// console.log(ul);

/* é comum utilizar o call() nas funções do protótipo do construtor Array.Assim podemos estender todos os métodos de 
Array à objetos que se parecem com uma Array (array-like). */
const frutas = ["Uva", "Maçã", "Banana"];
Array.prototype.pop.call(frutas);
// Ambos ↕ são a mesma coisa, porém não é boa prática mexer dentro do prototype
frutas.pop();

// Utilizar o call() com arrays-like
const li2 = document.querySelectorAll("li");
const filtro = Array.prototype.filter.call(li2, (item) => {
  return item.classList.contains("ativo");
});
console.log(filtro);

// Existe tbm o apply() que funciona igual ao call() porém os argumentos passados são através de arrays
const numeros = [1, 2, 43, 5343, 542, 531, 213, 23];
console.log(Math.max.apply(null, numeros));

/* 
.bind()
Não executa a função mas retorna ela com um novo contexto do this.
*/
const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: "ford",
  ano: 2018,
  acelerar: function (acelerar, tempo) {
    return `${this.marca} acelerou ${acelerar} em ${tempo}`;
  },
};

const honda = {
  marca: "honda"
}
const acelerarCarro = carro.acelerar.bind(honda)
console.log(carro.acelerar(100, 30));
console.log(acelerarCarro(400, 10));
