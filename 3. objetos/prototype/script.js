// Prototype
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
Pessoa.prototype.latir = function () {
  // A função criada pode ser usada tbm
  return this.nome + " latiu";
};
const Jean = new Pessoa("Jean", 21);
console.log(Pessoa.prototype);
console.log(Jean.prototype); // undefinined

// Construtores Nativos
const pais = "Brasil";
const cidade = new String("Rio");

pais.charAt(0);
cidade.charAt(0);
String.prototype; // Forma de verificar funções para String

// Forma de acessar função do protótipo
const listaAnimais = ["cachorro", "gato", "porco", "vaca"];
const lista = document.querySelectorAll("li");
const listaArray = Array.prototype.slice.call(lista); // Transforma em uma array
const listaArray2 = Array.from(lista); // Transforma em array de forma mais prática

// Entenda oq está acontecendo
const Carro = {
  marca: "Fiat",
  preco: 4000,
  andar() {
    return true;
  },
};

Carro // Object
Carro.marca // String
Carro.preco // Number
Carro.andar // Function
Carro.andar() // Boolean
Carro.marca.charAt // Function
Carro.marca.charAt(0) // String