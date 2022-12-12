// const Dom = {
//   seletor: "li",
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   ativar(){
//     return this.element().classList.toggle('ativar');
//   }
// };

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }
  this.ativar = function(classe){
    return this.element().classList.toggle(classe);

  }
};

const li = new Dom('li');
const ul = new Dom('ul');

const liLast = new Dom('li:last-child');
liLast.ativar("ativar")