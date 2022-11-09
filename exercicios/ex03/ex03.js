console.log('Exercício 03')
// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20 // R: 35
console.log(total)
// Crie duas expressões que retornem NaN
let expressao1NaN = 'Isso é 100' / 2 // R: NaN
let expressao2NaN = 'Isso é NaN' - 5 // R: NaN
console.log(
  expressao1NaN,
  expressao2NaN,
  isNaN(expressao1NaN),
  isNaN(expressao2NaN)
)
// Somar a string '200' com o número 50 e retornar 250
let somarString = +"200" + 50 // R: 250
console.log(somarString)
// Incremente o número 5 e retorne o seu valor incrementado
let incremento = 5
console.log(incremento++ + " Será incrementado em :") // R: 5
console.log(incremento) // R: 6

// Como dividir o peso por 2?
var numero = '80'
var unidade = 'kg'
var peso = +numero// '80kg'
var pesoPorDois = peso / 2 // NaN (Not a Number)
console.log(pesoPorDois + unidade) // '40kg'