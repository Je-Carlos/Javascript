import initScrollSuave from "./modules/scroll-suave.js";
import initScrollAnimation from "./modules/scroll-animation.js";
import initAccordionList from "./modules/accordion-list.js";
import initTabNav from "./modules/tabnav.js";
import * as config from "./modules/exemplosConfig.js";
initScrollSuave();
initScrollAnimation();
initAccordionList();
initTabNav();

console.log(config.obj);
console.log(config.str);
console.log(config.ano);
