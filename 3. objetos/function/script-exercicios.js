// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const selecionaParagrafos = document.querySelectorAll("p");
const arrayParagrafos = Array.prototype.reduce.call(
  selecionaParagrafos,
  (acumulador, i) => {
    return acumulador + i.innerText.length;
  },
  0
);
console.log(arrayParagrafos);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function novosElementos(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null;
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico
const tituloH1 = novosElementos.bind(null, "h1", "titulo");
