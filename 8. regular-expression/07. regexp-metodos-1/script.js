// regexp constructor
const regexp1 = /\w+/gi;
// ou
const regexpObj1 = new RegExp("\\w+", "gi");
// ou
const regexpObj2 = new RegExp(/\w+/, "gi");

// test()
const regexp2 = /Java/g;
const frase = "JavaScript e Java, Java e Java";

// console.log(regexp2.lastIndex);
// console.log(regexp2.test(frase));

// console.log(regexp2.lastIndex);
// console.log(regexp2.test(frase));

// console.log(regexp2.lastIndex);
// console.log(regexp2.test(frase));

let i = 1;
while (regexp2.test(frase)) {
  console.log(i++, regexp2.lastIndex);
}

// exec()
const regexp3 = /\w+/g;
const frase3 = "JavaScript, TypeScript, CoffeeScript";
let regexpResult;

while ((regexpResult = regexp3.exec(frase3)) !== null) {
  console.log(regexpResult[0]);
}

// Métodos 2

// match(), caso não tenha match retorna null
const regexp4 = /[A-Za-z]+/g;
const resultados = frase3.match(regexp4);

console.log(resultados);

// split()
const regexp5 = /Script/g;
const resultados2 = frase3.split(regexp5);
console.log(resultados2);

// replace()
const tags = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;
const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

console.log(tags.replace(/(?<=<\/?)\w+/g, "div"));
console.log(tags.replace(/<li/g, "$& class='active'"));

console.log(emails.replace(/(\w+@)[\w.]+/g, "$1gmail.com"));

// callback
const regexp6 = /(\w+)(@[\w]+)/g;
const emails2 = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`;

const resultado = emails2.replace(regexp6, function (...args) {
  console.log(args);
  if (args[2] === "@homail") {
    return `${args[1]}@hotmail`;
  } else if (args[2] === "@ggmail") {
    return `${args[1]}@gmail`;
  } else if (args[2] === "@oulook") {
    return `${args[1]}@outlook`;
  } else {
    return args[0];
  }
});
console.log(resultado);
