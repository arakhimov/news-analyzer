export default class NewsCard {

  constructor(months, regexpDate) {
    this.months = months;
    this.regexpDate = regexpDate;
  }

  translateDateFormat(news) {
    let temp = news.publishedAt.match(this.regexpDate[0])[0].split('-');
    temp[1] = this.months[+temp[1]];
    return temp.join('-').replace(this.regexpDate[1], `$3 $2, $1`);
  }

  getTemplate(news) {
    return `<div class="card">
              <img src="${news.urlToImage}" alt="фото ${news.title}"
              class="card__image card__image_section_results">
              <div class="card__wrapper card__wrapper_section_results">
                <time datetime="2019-08-02" class="card__date card__date_section_results">${news.publishedAt}</time>
                <h3 class="card__title card__title_section_results">${news.title}</h3>
                <p class="card__text">${news.description}</p>
                <span class="card__source">${news.source.name}</span>
              </div>
            </div>`;
  }

  create(news) {
    const container = document.createElement('div');
    news.publishedAt = this.translateDateFormat(news);
    container.insertAdjacentHTML('beforeend', this.getTemplate(news));
    return container.firstElementChild;
  }
}