export default function workingTime() {}

// Ver dia -
// const agora = new Date();
// console.log(agora);
// const futuro = new Date("Sep 03 2023");
// console.log(futuro.getTime());

// function birthday(time) {
//   return time / (24 * 60 * 60 * 1000); //horas/min/seg/miliseg
// }
// console.log(birthday(futuro.getTime() - agora.getTime()));

const diasAberto = document.querySelector("[data-semana]");
const diasSemana = diasAberto.dataset.semana.split(",").map(Number);
const horasSemana = diasAberto.dataset.horario.split(",").map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

/* Irá ver ser os dias da semana, se o index for diferente dos dias passados
irá retornar -1 (fechado) */
const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;
const horarioAberto =
  horarioAgora >= horasSemana[0] && horarioAgora < horasSemana[1];

if (semanaAberto && horarioAberto) {
  diasAberto.classList.add("aberto");
}
