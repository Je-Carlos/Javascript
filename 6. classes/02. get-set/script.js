/* Com get é definido um valor estático, e só é possível muda-lo caso haja um 
set para este valor */
const button = {
  get size() {
    return this._valor || 100;
  },
  set size(valor) {
    this._valor = valor;
  },
};

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  },
};
frutas.nova = "Abacaxi";
frutas.nova = "Abacate";

class Button {
  constructor(text, color) {
    this.text = text;
    this.color = color;
  }
  get element() {
    const type = this._elementType || "button";
    const buttonElement = document.createElement("button");
    buttonElement.innerText = this.text;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type;
  }
}

const blueButton = new Button("Comprar", "blue");
blueButton.element;
