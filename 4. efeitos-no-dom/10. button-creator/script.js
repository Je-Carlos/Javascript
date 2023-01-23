const controller = document.getElementById("controller");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

//Função que lida com as mudanças passadas pelo handleChange
const handleStyle = {
  element: btn,
  text(value) {
    this.element.innerText = value;
  },
  color(value) {
    this.element.style.color = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "rem";
  },
};

/* Recebe a mudança de evento do controller, dai em base de onde ocorre a 
mudança ele pega o nome e o valor e repassa para a função handleStyle */
controller.addEventListener("change", handleChange);
function handleChange(e) {
  const name = e.target.name;
  const value = e.target.value;
  handleStyle[name](value);
  showCss();
}

/* modifica o conteudo do HTML dentro da classe .css criando um span e sepando 
aonde termina com ;  */
function showCss() {
  cssText.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span><span>");
}
