export default class Statistics {
  constructor(newsData, request) {
    this.newsData = newsData;
    this.request = request;
  }

  getMentionAmount() {
    let regexp = new RegExp(this.request, 'ig');
    const amount = {common: 0};
    for(let news of this.newsData.articles) {
      amount.common = amount.common + (news.description.match(regexp) || []).length + (news.title.match(regexp) || []).length;
      // запишем в объект в качестве ключей даты новостей, а в качестве значений их количество
      if(!amount[news.publishedAt.match(/\d{4}-\d{2}-(\d{2})/)[1]]) {
        amount[news.publishedAt.match(/\d{4}-\d{2}-(\d{2})/)[1]] = (news.description.match(regexp) || []).length 
          + (news.title.match(regexp) || []).length;
      } 
      else {
        amount[news.publishedAt.match(/\d{4}-\d{2}-(\d{2})/)[1]] = amount[news.publishedAt.match(/\d{4}-\d{2}-(\d{2})/)[1]] 
          + (news.description.match(regexp) || []).length + (news.title.match(regexp) || []).length;
      }
    }
    return amount;
  }
}