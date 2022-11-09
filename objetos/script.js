// Objeto -
// Conjunto de variáveis e funções,que são chamadas de propriedades e métodos.
// Objtos servem para organizar o código em pequenas partes reutilizáveis.
var pessoa = {
  nome: "Leorio",
  idade: 21,
};

// Métodos -
// É uma propriedade que possui uma função no local de seu valor.

var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  },
  perimetro(lado) {
    // Forma reduzida de escrever uma função
    return lado * this.lados; // this faz referência ao objeto
  },
};
console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

var height = 120;
var menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
  metadeHeight() {
    return this.height / 2; // Caso não use o this, o valor de height será 120
  },
};

menu.backgroundColor = "#000";
var bg = menu.backgroundColor;

// Protótipo e Herença -
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
