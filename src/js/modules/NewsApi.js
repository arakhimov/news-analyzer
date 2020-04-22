export default class NewsApi {

  constructor(parameters) {
    this._baseURL = parameters.baseURL;
    this._endPoint = parameters.endPoint;
    this._pageSize = parameters.pageSize;
    this._key = parameters.key;
  }

  // получение новостей
  getNews(input, date) {
    return fetch(`${this._baseURL}${this._endPoint}?q=${input.value}&from=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}&to=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 7}&pageSize=${this._pageSize}&apiKey=${this._key}`)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  }

}