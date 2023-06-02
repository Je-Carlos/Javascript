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
