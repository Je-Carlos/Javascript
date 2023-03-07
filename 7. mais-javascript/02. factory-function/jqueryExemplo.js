// Função para selecionar todos os elements
function $$(selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  // Função para esconder os elementos
  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    // Retornando a factory function para poder continuar selecionando os elements
    return this;
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return this;
  }

  // Função para criação de eventListener's
  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return this;
  }
  return {
    elements,
    hide,
    show,
    on,
    addClass,
  };
}

const btns = $$("button");
console.log(btns.hide().show().addClass("ClasseTest"));

function handleClick(e) {
  console.log(event.target);
}
btns.on("click", handleClick);
