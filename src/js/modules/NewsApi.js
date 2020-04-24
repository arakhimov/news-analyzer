export default class NewsApi {

  constructor(parameters) {
    this._baseURL = parameters.baseURL;
    this._endPoint = parameters.endPoint;
    this._pageSize = parameters.pageSize;
    this._key = parameters.key;
    this._from = `${parameters.from.getFullYear()}-${parameters.from.getMonth() + 1}-${parameters.from.getDate()}`;
    this._to = `${parameters.to.getFullYear()}-${parameters.to.getMonth() + 1}-${parameters.to.getDate()}`;
  }

  // получение новостей
  getNews(input) {
    return fetch(`${this._baseURL}${this._endPoint}?q=${input.value}&from=${this._from}&to=${this._to}&pageSize=${this._pageSize}&apiKey=${this._key}`)
      .then(res => res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`));
  }

}