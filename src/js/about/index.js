// стили
import "../../pages/about.css";

// классы
import CommitCard from '../components/CommitCard.js';
import CommitCardList from '../components/CommitCardList.js';
import GithubApi from '../modules/GithubApi.js';

// инициализация слайдера
let Flickity = require('flickity');
new Flickity( '.flickity__carousel', {
  // выравнивания ячеек по левому краю или по центру в зависимости от разрешения экрана
  cellAlign: document.documentElement.clientWidth >= 900 ? 'center' : 'left',
  contain: true,
  freeScroll: true,
  wrapAround: true,
  cellSelector: '.flickity__carousel-cell'
});