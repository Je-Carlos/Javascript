var idade = 23e4 // 230000
var idade2 = 23e-4 // 0.0023

console.log(idade, idade2)

var total = 10 + (5 * 2) / 2 + 20 // 35
var divisao = 200 / 5 // 40
var modulo = 2548481551 % 5 // 1

console.log(total, divisao, modulo)

var total2 = '10' + 5 * 2 // 1010
var testeNaN = 'Isso é 100' / 2 // NaN
console.log(total2, testeNaN, isNaN(testeNaN))

// operadores unários

var incremento = 5
console.log(incremento++) // 5
console.log(incremento) // 6
console.log(++incremento) // 7

var decremento = 5
console.log(decremento--) // 5
console.log(decremento) // 4
console.log(--decremento) // 3

var frase = 'Isso é uma string'
+frase // NaN
-frase // NaN
console.log(+frase, -frase)

var idade = '28'
+idade // 28
-idade // -28
console.log(+idade + -5)