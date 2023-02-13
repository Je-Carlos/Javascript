// Extends cria uma subclasse, esta irá ter acesso aos métodos da classe que
// estendeu
class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  acelerar() {
    console.log("Acelerou");
  }
}
// Moto é uma subclasse de Veiculo, herdando seus métodos e constructor
class Moto extends Veiculo {
  /* caso queira criar um novo constructor, é necessário utilizar o super e 
  referenciar os objetos que estão dentro do pai */
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  empinar() {
    console.log("moto empinou com " + this.rodas + " rodas");
  }
  /* se o método ter o mesmo nome de quem ele herdou, ele irá substituir, porém 
  ele ainda estará presente no protótipo*/
  acelerar() {
    /* Através do super, torna possível acessar as classes pai */
    super.acelerar();
    console.log("Acelerou demais");
  }
}
const honda = new Moto(2, "gasolina", true);
const civic = new Veiculo(4);
