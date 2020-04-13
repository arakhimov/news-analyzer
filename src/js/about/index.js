// стили
import "../../pages/about.css";

// инициализация слайдера
let Flickity = require('flickity');
new Flickity( '.flickity__carousel', {
  cellAlign: document.documentElement.clientWidth >= 900 ? 'center' : 'left',
  contain: true,
  freeScroll: true,
  wrapAround: true,
  cellSelector: '.flickity__carousel-cell'
});