function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(5));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(total);
console.log(pi());

function imc(peso, altura) {
  var imc = peso / altura ** 2;
  return imc;
}
console.log(imc(83, 1.66));

function corFav(cor) {
  if (cor === "azul") {
    return "Eu gosto do céu";
  } else if (cor === "verde") {
    return "Eu gosto de mato";
  } else if (cor === "amarelo") {
    return "Eu gosto de ovo";
  } else {
    return "Eu não gosto de cores";
  }
}

addEventListener("click", function () {
  console.log("clicou");
});

function imc2(peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(80, 1.8); // retorna o imc
console.log(imc2(8000, 1.8)); // retorna o imc e undefined

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe sua idade corretamente!.";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60));

// Escopo: Variáveis e funções definidas dentro de um bloco {}
// não são visíveis fora dele.
function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  if (paisesVisitados > 193) {
    return "Valor inválido";
  } else if (paisesVisitados === 193) {
    return "Todos os países foram visitados";
  } else {
    return `Falta visitar ${totalPaises - paisesVisitados} países`;
  }
}
console.log(faltaVisitar(20));

// Escopo Léxico: Funções conseguem acessar variáveis que foram criadas
// no contexto pai

var profissao = "Programador JavaScript";

function dados() {
  var nome = "Jean";
  var idade = 21;
  function outrosDados() {
    var cidade = "São Paulo";
    var idade = 22;
    return `${nome}, ${idade}, ${cidade}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados()); // Jean, 22, São Paulo, Programador JavaScript
// outrosDados(); // Erro, outrosDados is not defined