/* Estrutura / preferência, vai de cada um se usa expression ou declarition, 
porém a Expression força a criação antes da ativação pelo hoisting, isso pode
contribuir para um código mais limpo e estruturado*/

somar(4, 4); // 8
// somar2(4, 4); // erro

// sofre hoisting
function somar(a, b) {
  return a + b;
}
// não sofre hoisting
const somar2 = function (a, b) {
  return a + b;
};

// arrow function
const soma = (a, b) => a + b;
const quadrado = (a) => Math.sqrt(a);

/* Antes da implementação de modules, era utilizado as IIFE (Immediately 
Invoked Function Expression)*/
var instrumento = "Violão";

(function () {
  // código isolado do escopo global
  var instrumento = "Guitarra";
  console.log(instrumento); // Guitarra
})();

console.log(instrumento); // Violão
