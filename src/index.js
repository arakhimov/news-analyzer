// стили
import './pages/index.css';
// классы
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import NewsApi from './js/modules/NewsApi.js';
import DataStorage from './js/modules/DataStorage.js';
// функции
import {translateDate} from './js/utils/translateDate.js';
import SearchInput from './js/components/SearchInput';
// константы
import {wordTemplate} from './js/constants/constants.js';
import {AUTHORIZATION_KEY} from './js/constants/constants.js';
import {regexp} from './js/constants/constants.js';

(function() {

  const elementsDOM = {
    searchForm: document.forms.search,
    searchInput: document.forms.search.elements.newsText,
    preloader: document.querySelector('.loading'),
    results: document.querySelector('.results'),
    notFound: document.querySelector('.not-found'),
    newsCardList: document.querySelector('.results__cardlist'),
    submitButton: document.querySelector('.search__button'),
    buttonShowMore: document.querySelector('.results__button'),
  };

  // экземпляр Date
  let date = new Date;

  // экземпляр NewsApi
  const newsApi = new NewsApi ({
    baseURL: 'http://newsapi.org',
    endPoint: '/v2/everything',
    pageSize: '100',
    key: AUTHORIZATION_KEY
  });
  

  // экземпляр NewsCard
  const newsCard = new NewsCard(translateDate);

  // экземпляр NewsCardList
  const newsContainer = new NewsCardList(elementsDOM.newsCardList, newsCard);

  // экземпляр DataStorage
  const dataStorage = new DataStorage();

  // экземпляр SearchInput
  const searchInput = new SearchInput(elementsDOM.searchInput, {
    elementsDOM,
    components : {
      dataStorage: dataStorage,
      newsApi: newsApi,
      date: date,
      newsContainer: newsContainer
    },
    wordTemplate,
    regexp
  });
  
  // валидация формы
  elementsDOM.searchInput.addEventListener('input', () => searchInput.validate());
  elementsDOM.searchInput.addEventListener('click', () => searchInput.validate());
  elementsDOM.searchInput.addEventListener('focus', () => searchInput.validate());
  // поясняющий текст при неативном поле ввода
  elementsDOM.submitButton.addEventListener('click', () => {
    if (elementsDOM.searchInput.value.length === 0) {
      elementsDOM.searchInput.nextElementSibling.classList.add('search__explanation-text_active');
      elementsDOM.searchInput.nextElementSibling.textContent = wordTemplate.nesessaryField;
    }
  });

  // получение новостей
  elementsDOM.searchForm.addEventListener('submit', () => {
    event.preventDefault();
    searchInput.getNews();
    elementsDOM.searchForm.reset()
  });

  // добавление новостей
  elementsDOM.buttonShowMore.addEventListener('click', () => searchInput.addNews({}));

} ());
