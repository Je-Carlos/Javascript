// Array -
// É um grupo de valores geralmente relacionados. Servem para guardarmos
// diferentes valores em uma única variável.

var videoGames = ["Switch", "PS5", "Xbox Series X", "3DS"];

var testarPop = videoGames.pop();
console.log(testarPop);
videoGames.push("Nintendo 64");
console.log(videoGames);

// Loop -
// Fazem algo repetidamente até que uma condição seja atingida.
for (let numero = 1; numero <= 10; numero++) {
  // for
  console.log(numero);
}
var i = 0;
while (i < 10) {
  // while
  console.log(i);
  i++;
}
for (var item = 0; item < videoGames.length; item++) {
  console.log(videoGames[item]);
  if (videoGames[item] === "PS5") {
    break;
  }
}

// forEach -
// forEach é um método que executa uma função para cada item da Array.
// É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)
videoGames.forEach(function (item, index, array) { // item, index, array são parâmetros
  console.log("Rapaazzzz");
  console.log(item, index, array);
});

