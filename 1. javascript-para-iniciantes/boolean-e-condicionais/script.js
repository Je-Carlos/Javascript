var possuiGraduacao = true
var possuiDoutorado = true

if (possuiGraduacao) {
  console.log('Possui graduação')
  var x = 10
} else if (possuiDoutorado) {
  console.log('Possui doutorado')
} else {
  console.log('Não possui graduação')
}
console.log(x)

var nome = ''
if (nome) {
  console.log(nome)
} else {
  console.log('Nome não existe.')
}

if (!possuiGraduacao) {
  console.log('Não possui graduação')
}

// === e !==
var cat = 'gato'
console.log(cat === 'gato') // true
console.log(cat !== 'gato') // false

// && retorna o primeiro valor que for falso
if (5 - 5 && 5 + 5) {
  console.log('Verdadeiro')
} else {
  console.log('Falso')
}

var condicional = 5 - 10 && 5 + 5
if (condicional) {
  console.log('Verdadeiro', condicional)
} else {
  console.log('Falso')
}

// || retorna o primeiro valor que for verdadeiro
var condicional2 = 5 - 5 || 5 + 5 || 10 - 2
console.log(condicional2)

// Switch
var corFavorita = 'Vermelho'
switch(corFavorita){
  case 'Amarelo':
    console.log('Olhe para uma flor')
    break
  case 'Azul':
    console.log('Olhe para o céu')
    break
  case 'Vermelho':
    console.log('Olhe para um tomate')
    break
  default:
    console.log('Feche os olhos')
}