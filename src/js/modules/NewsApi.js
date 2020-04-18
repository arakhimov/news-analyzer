export default class NewsApi {
  constructor(parameters) {
    this.baseURL = parameters.baseURL;
    this.endPoint = parameters.endPoint;
    this.pageSize = parameters.pageSize;
    this.key = parameters.key;
    this.dateFrom = null;
    this.dateTo = null;
    this.request = null;
  }

  getNews(elementsDOM, date) {
    return fetch(`${this.baseURL}${this.endPoint}?q=${elementsDOM.searchInput.value}&from=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}&to=${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() - 7}&pageSize=${this.pageSize}&apiKey=${this.key}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}