export default class DataStorage {

  constructor() {
    if(!localStorage.news) {
      localStorage.setItem('news', null);
      localStorage.request = 0;
      localStorage.newsCounter = 0;
    }
  }

  // запись в хранилище
  setData(newsData) {
    localStorage.news = JSON.stringify(newsData);
  }

  //получение количества резулататов
  getNewsData() {
    return JSON.parse(localStorage.news);
  }

  // получение карточек
  getCards(amount) {
    return JSON.parse(localStorage.news).articles.slice(+localStorage.newsCounter, +localStorage.newsCounter + amount);
  }

  // получение количества отображенных карточек
  getIndex() {
    return +localStorage.newsCounter;
  }

  // установка индекса
  setIndex({value = 3}) {
    if (!value) {
      localStorage.newsCounter = 0;
    }
    localStorage.newsCounter = +localStorage.newsCounter + value;
    if (+localStorage.newsCounter > 99) {
      localStorage.newsCounter = 0;
    }
  }

  // сохранение значения запроса
  setRequest(request) {
    localStorage.request = JSON.stringify(request);
  }

  // получение значения запроса
  getRequest() {
    return JSON.parse(localStorage.request);
  }
}