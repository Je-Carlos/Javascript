/* Parâmetros

Nem todos os parâmetros que definimos são utilizados quando uma função é executada
Devido a falta de argumentos. Por isso é importante preparar para caso estes 
argumentos não sejam declarados.

Arguments, é um array-like criado dentro da função, esse objeto contem os valores
dos argumentos 
*/
function perimetroForma(lado, totalLados = 4) {
  // No ES6, pode passar direto o valor padrão
  totalLados = totalLados || 4; // Caso não seja passado o parametro, será 4 por padrão
  const argArray = Array.from(arguments); // nessa constante os arguments se tornaram uma array-like
  console.log(argArray);

  argArray.forEach((arg) => {
    console.log(arg);
  });
  return lado * totalLados;
}
console.log(perimetroForma(10, 4));

/* Parâmetro Rest, é possivel declararmos um parametro utilizando "..." na frente do 
mesmo. Assim todos argumentos passados na ativação da função ficarão dentro do parâmetro */
function anunciarGanhadores(...ganhadores) {
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " foi sorteado.");
  });
}
anunciarGanhadores("Gabriel", "José", "Marta");

// A grande diferença entre Rest e Arguments é que um é uma Array e a outra uma Array-like

/* Assim como rest, o operador Spread também utiliza os ... para ser ativado. O spread irá
distribuir um item iterável, um por um */
const frutas = ["banana", "uva", "pera"];
const legumes = ["brocolis", "tomate"];
console.log([...frutas, "erro", ...legumes]);

const listaNumeros = [1, 13, 21, 12, 55, 2, 3, 43];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);

// é possível transformar itens iteráveis em uma arrey real com o spread
const btn = document.querySelectorAll("button");
const btnArray = [...btn];
