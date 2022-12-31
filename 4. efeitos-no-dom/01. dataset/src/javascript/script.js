const div = document.querySelector("div");
console.log(Object.prototype.toString.call());
console.log(div.dataset);

div.dataset.width = 102;
delete div.dataset.cor;
div.dataset.totalHeight = 2000;
