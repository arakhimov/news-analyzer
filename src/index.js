// стили
import './pages/index.css';

// классы
import NewsCard from './js/components/NewsCard.js';
import NewsCardList from './js/components/NewsCardList.js';
import NewsApi from './js/modules/NewsApi.js';
import FormValidator from './js/components/FormValidator.js';
import DataStorage from './js/modules/DataStorage.js';
// функции
import {translateDate} from './js/utils/translateDate.js';

(function() {

  // элементы DOM
  const elementsDOM = {
    searchForm: document.forms.search,
    searchInput: document.forms.search.elements.newsText,
    preloader: document.querySelector('.loading'),
    results: document.querySelector('.results'),
    notFound: document.querySelector('.not-found'),
    newsCardList: document.querySelector('.results__cardlist'),
    submitButton: document.querySelector('.search__button')
  };

  // поясняющие шаблоны
  const wordTemplate = {
    nesessaryField: 'Введите ключевое слово',
    validationLength: 'Должно быть от 2 до 30 символов',
    text: 'Должно содержать текст'
  };

  // проверка содержания текта - может содержать  от 2 до 30 символов - латинские буквы и цифры, кириллицу, тире и пробелы,
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
  const newsCard = new NewsCard(translateDate);
  const buttonShowMore = document.querySelector('.results__button');

  // экземпляр NewsCardList
  const newsContainer = new NewsCardList(elementsDOM.newsCardList, newsCard);

  // экземпляр DataStorage
  const dataStorage = new DataStorage();

  // получение и сохранение новостей
  function getNews(event) {
    event.preventDefault();
    // удаляем слушатели ранее использованных карточек
    for (let image of document.querySelectorAll('.card__image_section_results')) {
      image.removeEventListener('error', errorImageListener);
    }
    // удаляем старые карточки
    if (elementsDOM.newsCardList.children.length > 0) {
      elementsDOM.newsCardList.innerHTML = '';
    }
    // валидация
    if (elementsDOM.submitButton.classList.contains('search__button_active')) {
      elementsDOM.preloader.classList.add('loading_active');
      // сохранение значения запроса в LocalStorage
      dataStorage.setRequest(elementsDOM.searchInput.value);
      // получение данных из localStorage
      newsApi.getNews(elementsDOM, date, newsContainer, dataStorage) //TODO
        .then(res => {
          if (res.articles.length === 0) {
            elementsDOM.results.classList.remove('results_active');
            elementsDOM.notFound.classList.add('not-found_active');
          } else {
            elementsDOM.results.classList.add('results_active');
            elementsDOM.notFound.classList.remove('not-found_active');
            elementsDOM.results.querySelector('.results__header').classList.add('results__header_state_active');
            elementsDOM.results.querySelector('.results__cardlist').classList.add('results__cardlist_active');
            elementsDOM.results.querySelector('.results__button').classList.add('results__button_active');
            // сохраняем в локальном хранилище
            dataStorage.setData(res);
            // добавление карточек
            dataStorage.setIndex({value: 0});
            addNews({});
          }
        })
        .catch(error => {
          console.log(error);
          elementsDOM.results.classList.add('results_active');
          elementsDOM.results.querySelector('.results__not-found').classList.add('results__not-found_active');
          elementsDOM.results.querySelector('.results__header').classList.add('results__header_state_disabled');
          elementsDOM.results.querySelector('.results__cardlist').classList.remove('results__cardlist_active');
          elementsDOM.results.querySelector('.results__button').classList.remove('results__button_active');
        })
        .finally(() => elementsDOM.preloader.classList.remove('loading_active'));
        elementsDOM.searchForm.reset(); 
    }
  }

  // добавление новостей
  function addNews({amount = 3, index = 3}) {
    newsContainer.render(dataStorage.getCards(amount));
    if (dataStorage.getIndex() > 99) {
      buttonShowMore.classList.remove('results__button_active');
    }
    // на последние добавленные карточки вешаем слушатель на загрузку изображения и если ошибка удаляем карточку и
    // добавляем еще одну
    let cards = Array.from(document.querySelectorAll('.card__image_section_results'));
    for(let i = cards.length -1; i >= cards.length - amount; i--) {
      cards[i].addEventListener('error', errorImageListener);
    }
    dataStorage.setIndex({value: index});
  }

  //ошибка загрузки изображения
  function errorImageListener(event) {
    elementsDOM.newsCardList.removeChild(event.currentTarget.parentElement);
    addNews({amount: 1, index: 1});
  }
  
  // валидация формы
  elementsDOM.searchInput.addEventListener('input', () => validation.submitButtonState(elementsDOM));
  elementsDOM.searchInput.addEventListener('click', () => validation.submitButtonState(elementsDOM));
  elementsDOM.searchInput.addEventListener('focus', () => validation.submitButtonState(elementsDOM));
  // получение новостей
  elementsDOM.searchForm.addEventListener('submit', getNews);
  // добавление новостей
  buttonShowMore.addEventListener('click', () => addNews({}));


} ());
