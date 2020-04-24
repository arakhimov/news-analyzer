export default class Statistics {

  constructor(newsData, request) {
    this.newsData = newsData;
    this.request = request;
    this._amount = {common: 0};  // количество упоминаний
  }

  // подсчет общего количества упоминаний и количества упоминаний по дням недели
  getMentionAmount() {
    const regexp = new RegExp(this.request, 'ig');
    for(let news of this.newsData.articles) {
      // общее количество
      this._amount.common = this._amount.common + (news.description.match(regexp) || []).length 
        + (news.title.match(regexp) || []).length;
      // запишем в объект в качестве ключей даты новостей, а в качестве значений их количество
      const date = news.publishedAt.match(/\d{4}-\d{2}-(\d{2})/)[1];
      if(!this._amount[date]) {
        this._amount[date] = (news.description.match(regexp) || []).length + (news.title.match(regexp) || []).length;
      } 
      else {
        this._amount[date] = this._amount[date] + (news.description.match(regexp) || []).length + (news.title.match(regexp) || []).length;
      }
    }
    return this._amount;
  }

}