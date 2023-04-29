const frase = "JavaScript";
const regexp = /v/;
const fraseNova = frase.replace(/a/, "e").replace(regexp, "b");
console.log(fraseNova);

// Literal
// Utilizar um caracter literal irá realizar uma busca especifica deste caracter
const regexp1 = /Java/;

console.log("JavaScript".replace(regexp1, "Type"));
// TypeScript

// Flag: g
// A flag g irá realizar uma busca global, ou seja, irá buscar por todas as o
// corrências do padrão.

const regexp2 = /a/g;
console.log("JavaScript".replace(regexp2, "i"));
// JiviScript

// Flag: i
// A flag i irá ignorar o case sensitive, ou seja, não irá diferenciar letras.

const regexp3 = /p/gi;
console.log("Peter Parker".replace(regexp3, "Spider"));
// Spiderter Spiderarker;

// Character Class
// Utilizando colchetes [] podemos especificar uma busca por um conjunto de
// caracteres, por exemplo, [abc] irá buscar por a, b ou c. Ele também funciona para
// caracteres únicos como [.-].

const regexp4 = /[PR]/gi;
console.log("Peter Parker".replace(regexp4, "ERRO"));

// Um ou outro
// Podemos combinar caracteres literais com uma classe para buscar variações de palavras

const regexp5 = /Ju[nl]ho/g;
console.log("Os meses de Junho e Julho são lindos".replace(regexp5, "Inverno"));

// Range de Caracteres
// Podemos utilizar um range para especificar um conjunto de caracteres, por exemplo,
// [a-z] irá buscar por qualquer letra entre a até z. Ou até mesmo [0-9] que irá
// buscar por números de 0 até 9. O range varia de acordo com a tabela unicode.

const regexp6 = /[0-9]/g;
console.log(
  "Tem os números de 2 0 0 1 e até mesmo 1 7 8 9".replace(regexp6, "*")
);

const regexp7 = /[a-zA-Z]/g;
console.log("JavaScript é a linguagem.".replace(regexp7, "1"));
// 1111111111 é 1 111111111.

// Negação
// Utilizando o circunflexo ^ logo após o colchetes, nós negamos uma busca, ou seja,
// o resultado não irá conter os valores do conjunto. Por exemplo, [^abc] irá buscar
// por qualquer caractere que não seja a, b ou c.

const regexp8 = /[^a-z]/g;
console.log("Brasil é com z: Brazil".replace(regexp8, " "));
// rasil   com z   razil
