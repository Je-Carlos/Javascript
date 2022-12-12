function Carro() {
  this.marca = "inserir Marca";
  this.modelo = "inserir Modelo";
  this.ano = "inserir Ano";
}
const fiat = new Carro();
const ford = new Carro();
ford.ano = 2018;

// This Keyword
function Carro2(marca, precoInicial){
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
}

const jaguar = new Carro2("Jaguar", 10.000)