// стили
import './pages/index.css';
// классы
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import NewsApi from './js/modules/NewsApi.js';
import DataStorage from './js/modules/DataStorage.js';
import SearchInput from './js/components/SearchInput';
// функции
import {translateDate} from './js/utils/translateDate.js';
import {sanitizeHTML} from './js/utils/sanitizeHTML.js';
// константы
import {wordTemplate} from './js/constants/constants.js';
import {AUTHORIZATION_KEY} from './js/constants/constants.js';
import {regexp} from './js/constants/constants.js';
import {msecondsOfWeek} from './js/constants/constants.js';


const elementsDOM = {
  searchForm: document.querySelector('.search__form'),
  searchInput: document.querySelector('.search__input'),
  preloader: document.querySelector('.loading'),
  results: document.querySelector('.results'),
  notFound: document.querySelector('.not-found'),
  newsCardList: document.querySelector('.results__cardlist'),
  submitButton: document.querySelector('.search__button'),
  buttonShowMore: document.querySelector('.results__button'),
};

// экземпляры Date
const today = new Date;
const weekAgo = new Date((today.getTime() - msecondsOfWeek));

 // экземпляр NewsApi
const newsApi = new NewsApi ({
  baseURL: 'https://newsapi.org',
  endPoint: '/v2/everything',
  pageSize: '100',
  key: AUTHORIZATION_KEY,
  from: weekAgo,
  to: today
});

 // экземпляр NewsCard
const newsCard = new NewsCard(translateDate, sanitizeHTML);

// экземпляр DataStorage
const dataStorage = new DataStorage();

// экземпляр NewsCardList
const newsContainer = new NewsCardList(elementsDOM.newsCardList, newsCard, dataStorage.getNewsData().articles);

 // экземпляр SearchInput
const searchInput = new SearchInput(elementsDOM.searchInput, {
  elementsDOM,
  components : {
    dataStorage,
    newsApi,
    newsContainer
  },
  const: {
    wordTemplate,
    regexp
  }
});

// валидация формы
function handleValidate(event) {
  searchInput.validate(event);
}
elementsDOM.searchInput.addEventListener('input', handleValidate);
elementsDOM.searchInput.addEventListener('click', handleValidate);
elementsDOM.searchInput.addEventListener('focus', handleValidate);

// поясняющий текст при неативном поле ввода
function showExplanationText () {
  if (elementsDOM.searchInput.value.length === 0) {
    elementsDOM.searchInput.nextElementSibling.classList.add('search__explanation-text_active');
    elementsDOM.searchInput.nextElementSibling.textContent = wordTemplate.nesessaryField;
  }
}
elementsDOM.submitButton.addEventListener('click', showExplanationText);

 // получение новостей
function handleGetNews(event) {
  event.preventDefault();
  searchInput.getNews(event);
}
elementsDOM.searchForm.addEventListener('submit', handleGetNews);

// добавление новостей
function handleAddNews(event) {
  searchInput.addNews({buttonShowMore: event.target});
}
elementsDOM.buttonShowMore.addEventListener('click', handleAddNews);
