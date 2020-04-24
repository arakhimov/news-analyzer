export default class DataStorage {

  constructor() {
    if(!localStorage.news) {
      localStorage.setItem('news', null);
      localStorage.request = 0;
    }
  }

  // запись в хранилище
  setNewsData(newsData) {
    localStorage.news = JSON.stringify(newsData);
  }

  //получение карточек
  getNewsData() {
    return JSON.parse(localStorage.news);
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