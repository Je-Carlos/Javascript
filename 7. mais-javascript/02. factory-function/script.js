/* Funções que retornam um objeto sem tem que utilizar new são chamadas de Factory 
Function. Possuem a mesma função que um constructor/classe*/
function createButton(text) {
  // Se não declarar ela no return, será privada, assim não terá como acessa-la
  const numeroSecreto = "audu121iwi39d222";
  function element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    return buttonElement;
  }
  return Object.freeze({
    // Object.freeze vai fazer que não possa ser modificada
    text,
    element,
  });
}
const btnBuy = createButton("Comprar");
const btnSell = createButton("Vender");
console.log(btnBuy, btnSell);

function Pessoa(nome) {
  // Se this não for uma instância de Pessoa, retorne uma new Pessoa
  // tbm pode fazer como (!new.target)
  if (!(this instanceof Pessoa)) return new Pessoa(nome);
  this.nome = nome;
}

Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
};

// Pela verificação da instância da Pessoa, não precisa colocar o new na frente de pessoa
const desenvolvedor = Pessoa("Jean");
console.log(desenvolvedor);
