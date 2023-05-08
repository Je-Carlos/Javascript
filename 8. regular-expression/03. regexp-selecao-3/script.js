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

// Ponto
// O . irá selecionar qualquer caracter, com exceção de quebras de linha.

const regexp9 = /./g;
console.log("O Brasil é lindo".replace(regexp9, "X"));

// Word
// O \w irá selecionar somente a primeira letra, números e underscore. O \W (maisculo
// ) irá selecionar tudo que não for caracteres citados anteriormente.

const regexp10 = /\w/g;
const regexp11 = /\W/g;

console.log("Guarda-chuva R$ 23,00.".replace(regexp10, "-"));
console.log("Guarda-chuva R$ 23,00.".replace(regexp11, "-"));

// Macete para selecionar tudo
// Utilizando o [\s\S] iremos selecionar tudo, pois estamos dizendo que queremos
// qualquer coisa que seja espaço ou não espaço.

const regexp12 = /[\S\s]/g;
console.log("Guarda-chuva R$ 23,00.".replace(regexp12, "-"));

// Quantificador
// É possível quantificar a quantidade de caracteres seguidos utilizando chaves {}.
// Podemos informar o min e max do quantificador com {1,5} vai selecionar quando
// aparecer duas ou até cinco vezes.

const regexp13 = /a{2,4}/g;
console.log("Vaaaaaii Corinthians!!".replace(regexp13, "u"));

// Mais+
// O + é um atalho para {1,}. Ou seja, irá selecionar um ou mais caracteres.
const regexp14 = /\i/g; // seleciona cada i
console.log("Vaiiiiiii Corinthians!!".replace(regexp14, "u"));

const regexp15 = /\i+/g; // seleciona todos os i de uma vez
console.log("Vaiiiiiii Corinthians!!".replace(regexp15, "u"));

// Asterisco *
// O * é um atalho para {0,}. Ou seja, irá selecionar zero ou mais caracteres.

// Opcional ?
// O ? irá indicar que um caractere é opcional, ou seja, pode aparecer zero ou uma vez.
const regexp16 = /d\w*/g;
console.log("Dígitos, dados, desenhos, Dito, d".replace(regexp16, "X"));

// Alternado |
// O | irá indicar alternativas. Ou seja, separe cada alternativa entre parênteses () e
// coloque o | entre elas.

// Boundry \b
// O \b é um limitador de palavra. Ou seja, seleciona somente a palavra completa.

const regexp17 = /\b\Vasco\b/;
console.log("Vasco é o melhor time.".replace(regexp17, "Corinthians"));

// Not Word Boundary \B
// O \B irá selecionar tudo que não for um limitador de palavra.
const regexpDigito = /\B\d+\B/gi;

console.log("11_22 33-44 55é66 77e88".replace(regexpDigito, "X"));

// Archor Beginning
// O ^ irá indicar que a seleção só pode ocorrer no início da linha.
// Procura: sequência de alfanuméricos
// no início da linha.

// Flag: M
// O m irá permitir que o archor ^ e $ possam funcionar em múltiplas linhas dentro
// de um texto.
const regexp18 = /^\w+/gm;
console.log(
  `jean@gmail.com
jean@gmail.com`.replace(regexp18, "X")
);

// Archor End
// O $ irá indicar que a seleção só pode ocorrer no final da linha.
const regexp19 = /\w+$/gm;
console.log(
  `jean@gmail.com
jean@gmail.com`.replace(regexp19, "X")
);

// Line Feed \n
// O \n irá selecionar quebras de linha.
const regexp20 = /\n/g;
console.log(`jean@gmail.com\njean@gmail.com`.replace(regexp20, "---"));

// Unicode
// O \u seguido de quatro caracteres irá selecionar o unicode do mesmo.
const regexp21 = /\u0040/g;
console.log("jean@gmail.com".replace(regexp21, "-"));
