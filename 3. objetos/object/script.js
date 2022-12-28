// Object é criado com construtor Object que herda as propriedades e metodos do prototype
const automovel = {
  marca(marca) {
    this.marca = marca;
    return this;
  },
  ano: 2019,
  rodas: 4,
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  },
};
const Animal = new Object({
  especie: "mamifero",
  familia: "canidae",
});

// retornar um novo objeto que terá como base o objeto do primeiro argumento
const fiat = Object.create(automovel).marca("Fiat");

// adicionar ao alvo as propriedades e metodos dos demais objetos
const Moto = {
  rodas: 2,
  capacete: true,
};
const yamaha = Object.assign(Moto, automovel);
//automovel substitui a propriedade rodas, assim passa a ter 4 rodas e não 2

// Adicionar novas propreidades ao alvo que não podem ser alteradas
Object.defineProperties(Moto, {
  rodas: {
    value: 2, // quantas rodas
    configurable: false, // nao pode ser deletado
    writable: false, // nao pode ser reecrito, por padrao vem tudo false
    enumerable: false,
  },
});

// get e set
Object.defineProperties(Animal, {
  pernas: {
    get() {
      return this._pernas; // retornando o objeto _pernas
    },
    set(valor) {
      this._pernas = valor * 4;
    },
  },
});

// Listar os metodos e propriedads de um objeto, além de suas configs

Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

const innerHeightConfig = Object.getOwnPropertyDescriptor(
  window,
  "innerHeight"
);
// Puxa de uma única propriedade

/*
Object.keys(obj) retorna uma array com as chaves de todas as propriedades 
diretas e enumeráveis do objeto. Object.values(obj) retorna uma array com 
os valores do objeto. Object.entries(obj) retorna uma array com array's contendo
a chave e o valor. 
*/
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis

console.log(Object.keys(automovel));
// retorna as arrays
console.log(Object.values(automovel));
// valores dentro das arrays
console.log(Object.entries(automovel));
// retorna arrays contendo as arrays e seus valores

// Retonar uma array com todas as propriedades diretas do objeto(sem prototype)
console.log(Object.getOwnPropertyNames(Array)); // sem prototype
Object.getOwnPropertyNames(Array.prototype); // com prototype

console.log(Object.getOwnPropertyNames(automovel));

/*
Retornar o protótipo do objeto. 
Object.is(obj1, obj2) vericia se os objtos são iguais retornando um bool
*/
const frutas = ["Morango", ["Melancia"]];
let novaFruta = frutas.slice();
console.log(Object.getPrototypeOf(frutas));

console.log(Object.is(frutas, novaFruta));

Object.freeze(automovel); // impede mudanças nas propriedades
Object.preventExtensions(automovel); //previne a adição de novas propriedades
Object.seal(automovel); // impede a adição de novas propriedades e impede as atuais de serem deletadas
automovel.portas = 4; // não muda
delete automovel.ano; // não deleta

console.log(Object.isFrozen(automovel));
console.log(Object.isSealed(automovel));
console.log(Object.isExtensible(automovel));

// Propriedades e metodos
const frase = "Isso é uma string";
console.log(frase.constructor); // Retorna a função construtora do objeto
console.log(Array.prototype.hasOwnProperty("map")); // Verifica se possui a propriedade
console.log(Array.prototype.propertyIsEnumerable("map")); // verifica se é enumerável
console.log(Array.prototype.isPrototypeOf(frutas)); // verifica se é prototipo do valor passado

// Transforma em String
console.log(frase.toString()); // Isso é uma String
console.log(frutas.toString()); // Morango,Melancia
console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(frase));
