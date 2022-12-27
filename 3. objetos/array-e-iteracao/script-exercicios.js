// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objtosCurso = arrayCursos.map((i) => {
  const title = i.querySelector("h1").innerText;
  const description = i.querySelector("p").innerText;
  const quantity = i.querySelector(".aulas").innerText;
  const hours = i.querySelector(".horas").innerText;
  return {
    title,
    description,
    quantity,
    hours,
  };
});
console.log(objtosCurso);
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQueCem = numeros.filter((n) => n > 100).sort();
console.log(maiorQueCem);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"].some(
  (i) => i == "Baixo"
);
console.log(instrumentos);

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];

let valor = 0
const precoTotal = compras.map((precos) => {
  let precosFiltrados = +precos.preco.replace("R$ ", "").replace(",", ".");
  return valor+=precosFiltrados;
});
console.log("O valor total dos produtos será de " + precoTotal[precoTotal.length-1]);
