// стили
import "./pages/index.css";

// классы
import NewsCard from "./js/components/NewsCard.js";
import NewsCardList from './js/components/NewsCardList.js';
import NewsApi from './js/modules/NewsApi.js';
import FormValidator from "./js/components/FormValidator.js";

(function() {
  // форма поиска
  const searchForm = document.forms.search;
  const searchInput = searchForm.elements.newsText;
  const submitButton = document.querySelector('.search__button');

  // контейнер для новостей
  const newsCardList = document.querySelector('.results__cardlist');


  // поясняющие шаблоны
  const wordTemplate = {
    nesessaryField: 'Введите ключевое слово',
    validationLength: 'Должно быть от 2 до 30 символов',
    text: 'Должно содержать текст'
  };

  // изменение формата даты
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const regexpDate = [
    /((\d{4})-(\d{2})-(\d{2}))/,
    /(\d{4})-([а-я]{3,8})-(\d{2})/
  ];

  // проверка содержания текта - может содержать  от 2 до 30 символов - латинские буквы и цифры, кириллицу и пробелы,
  // но должно содержать хоть одну букву
  const regExp = /(?=^[\w\sа-яёА-ЯЁ-]{2,30}$)(?=.*[a-zA-Zа-яёА-ЯЁ])/;

  // ключ авторизации newsApi
  const AUTHORIZATION_KEY = '1ba3c67f762c470a985974c9866763fa';

  // экземпляр Date
  let date = new Date;

  // экземпляр NewsApi
  const newsApi = new NewsApi ({
    baseURL: 'http://newsapi.org',
    endPoint: '/v2/everything',
    pageSize: '100',
    key: AUTHORIZATION_KEY
  });

  // экземпляр FormValidator
  const validation = new FormValidator(wordTemplate, regExp);

  // экземпляр NewsCard
  const newsCard = new NewsCard(months, regexpDate);
  const buttonShowMore = document.querySelector('.results__button');

  // экземпляр NewsCardList
  const newsContainer = new NewsCardList(newsCardList, newsCard);
  
  // добавление новостей
  function addNews() {
    newsContainer.render(JSON.parse(localStorage.newsArray).slice(+localStorage.newsIndex, +localStorage.newsIndex + 3));
    localStorage.newsIndex = +localStorage.newsIndex + 3;
  }

  // получение и сохранение новостей
  function getNews(event) {
    event.preventDefault();
    if (submitButton.classList.contains('search__button_active')) {
      // preloader
      const preloader = document.querySelector('.loading');
      // секция результаты поиска
      const results = document.querySelector('.results'); 
      // секция ничего не найдено
      const notFound = document.querySelector('.not-found');
      preloader.classList.add('loading_active');
      newsApi.getNews(searchInput.value, date, results, newsContainer, notFound, preloader) //TODO
        .then(res => {
          if (res.articles.length === 0) {
            results.classList.remove('results_active');
            notFound.classList.add('not-found_active');
          } else {
            results.classList.add('results_active');
            notFound.classList.remove('not-found_active');
            results.querySelector('.results__header').classList.add('results__header_state_active');
            results.querySelector('.results__cardlist').classList.add('results__cardlist_active');
            results.querySelector('.results__button').classList.add('results__button_active');
            // сохраняем в локальном хранилище
            localStorage.newsArray = JSON.stringify(res.articles);
            localStorage.setItem('newsIndex', 0);
            addNews();
          }
        })
        .catch(error => {
          console.log(error);
          results.classList.add('results_active');
          results.querySelector('.results__not-found').classList.add('results__not-found_active');
          results.querySelector('.results__header').classList.add('results__header_state_disabled');
          results.querySelector('.results__cardlist').classList.remove('results__cardlist_active');
          results.querySelector('.results__button').classList.remove('results__button_active');
        })
        .finally(() => preloader.classList.remove('loading_active'));
      searchForm.reset(); 
    }
  }
  
  // слушатели
  // валидация формы
  searchInput.addEventListener('input', () => validation.submitButtonState(searchInput, submitButton));
  searchInput.addEventListener('click', () => validation.submitButtonState(searchInput, submitButton));
  searchInput.addEventListener('focus', () => validation.submitButtonState(searchInput, submitButton));
  // получение новостей
  searchForm.addEventListener('submit', getNews);
  // добавление новостей
  buttonShowMore.addEventListener('click', () => {
    addNews();
    if (+localStorage.newsIndex > 99) {
      buttonShowMore.classList.remove('results__button_active');
    }
  });

} ());