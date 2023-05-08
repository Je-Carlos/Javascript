// Referência da seleção
// É possível utiliza o "$&" para referenciar a seleção da substituição.

const regexpSeleciona = /Java/g;
console.log(
  "PHP e Java são linguagens diferentes".replace(
    regexpSeleciona,
    "--$&Script--"
  )
);

// Grupo de Captura
// É possível definir um grupo de captura com parênteses (). Assim podemos utilizar
// o $1 ou $& para substituir o valor que foi capturado.
const regexpCaptura = /(\w+)@[\w.]+/g;
console.log("jean@email.com".replace(regexpCaptura, "$1@gmail.com"));

// Mais de um grupo
// Podemos definir mais de um grupo de captura (parênteses) na expressão.
const regexpMaisGrupos = /(\w+),\s(\w+)/g;
console.log(
  "Liskov, Barbara\nMcCarthy, John\nWadler, Philip".replace(
    regexpMaisGrupos,
    "$2 $1"
  )
);

// Agrupar uma sequência de caracteres
// É possível ignorar a caputura através de (?:), mas não poderemos referenciar

const regexpAgrupaCaractere = /(?:je)+/gi;
console.log("jessica jessica jessica".replace(regexpAgrupaCaractere, "jean"));

// Positive Lookahead
// É possível fazer um lookahead positivo para frente utilizando (?=).
// Assim a seleção só irá ocorrer se tivermos o que está dentro do lookahead

const regexpLookahead = /\d(?=px)/g;
console.log("2em, 4px, 5%, 2px, 1px".replace(regexpLookahead, "X"));

// Negative Lookahead
// É possível fazer um lookahead negativo para frente utilizando (?!).
// Assim a seleção só irá ocorrer se não tivermos o que está dentro do lookahead

const regexpNegativeLookahead = /\d(?!px)/g;
console.log("2em, 4px, 5%, 2px, 1px".replace(regexpNegativeLookahead, "X"));
