// Prototype
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
Pessoa.prototype.latir = function () { // A função criada pode ser usada tbm
  return this.nome + " latiu";
};
const Jean = new Pessoa("Jean", 21);
console.log(Pessoa.prototype);
console.log(Jean.prototype); // undefinined
