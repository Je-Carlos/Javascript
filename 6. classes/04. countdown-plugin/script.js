import Countdown from "./countdown.js";
// passando o dia para o natal
const natal = new Countdown("24 December 2023 23:59:59 GMT-0300");
const pascoa = new Countdown("8 April 2023 23:59:59 GMT-0300");
console.log(natal.total);
console.log(pascoa.total);
setInterval(() => {}, 1000);
