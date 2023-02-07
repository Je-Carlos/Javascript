// Constructor Function
function Button(text, bg) {
  this.text = text;
  this.bg = bg;
}
Button.prototype.element = function () {
  const buttonElement = document.createElement("button");
  buttonElement.innerText = this.text;
  buttonElement.style.background = this.background;
  return buttonElement;
};
const buttonPurple = new Button("Buy", "purple");
console.log(buttonPurple.element());

// Class => Syntatical Sugar
class ButtonClass {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;

    return buttonElement;
  }
  appendTo(target) {
    const targetElement = document.querySelector(target);
    targetElement.appendChild(this.element());
    return targetElement;
  }
}
const buttonOnClass = new ButtonClass("Eu sou um botão", "red", "purple");
console.log(buttonOnClass);
console.log(buttonOnClass.appendTo("body"));

// Criar o objeto contendo tudo dentro
class ButtonOptions {
  constructor(options) {
    this.options = options;
  }
  static createButton(text, background) {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = text;
    buttonElement.style.background = background;
    return buttonElement;
  }
}
const newButton = new ButtonOptions({
  backgroundColor: "yellow",
  text: "im error",
  color: "white",
});
const newButtonStatic = ButtonOptions.createButton("imm erroor", "green");
console.log(newButton);
console.log(newButtonStatic);
