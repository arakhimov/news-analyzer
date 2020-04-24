// стили
import "../../pages/about.css";

// классы
import CommitCard from '../components/CommitCard.js';
import CommitCardList from '../components/CommitCardList.js';
import GithubApi from '../modules/GithubApi.js';

// функции
import {translateDate} from '../utils/translateDate.js';
import {sanitizeHTML} from '../utils/sanitizeHTML.js';

// константы
import {tokenGithub} from '../constants/constants.js';

const elementsDOM = {
  slider: document.querySelector('.github__slider'),
  errorTextElement: document.querySelector('.github__error')
};

 // экземпляр GithubApi
const githubApi = new GithubApi({
  baseUrl: 'https://api.github.com', 
  owner: 'arakhimov',
  repository: 'news-analyzer', 
  target: 'commits',
  headers: {
  autorization: tokenGithub,
  'Content-Type': 'application/json'
  }
});

// экземпляр commitCard
const commitCard = new CommitCard(translateDate, sanitizeHTML);

// экземпляр CommitCardList
const commitCardList = new CommitCardList(elementsDOM.slider, commitCard);

// получение данных
githubApi.getCommits(commitCardList)
.then(res => {
  elementsDOM.errorTextElement.classList.remove('github__error_active');
  commitCardList.render(res);
    // инициализация слайдера
    // насколько я знаю файл pkgd для подключения слайдера предназначен для <script> элементов, а не для загрузчиков 
    // модулей или импорта ES6 (т.к содержит другие файлы, такие как imagesLoaded) - поэтому подключаю через require
    const Flickity = require('flickity');
    new Flickity( '.flickity__carousel', {
      // выравнивания ячеек по левому краю или по центру в зависимости от разрешения экрана
      cellAlign: document.documentElement.clientWidth >= 900 ? 'center' : 'left',
      contain: true,
      freeScroll: true,
      wrapAround: true,
      cellSelector: '.flickity__carousel-cell'
    });
  })
  .catch(error => {
    console.log(error);
    elementsDOM.errorTextElement.classList.add('github__error_active');
  });