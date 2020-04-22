export default class NewsCard {

  constructor(translateDate) {
    // функция для изменения формата даты
    this._translateDate = translateDate;
  }

  // создание шаблона 
  _getTemplate(news) {
    return `<div class="card">
              <img src="${news.urlToImage}" alt="фото ${news.title}" class="card__image card__image_section_results">
              <div class="card__wrapper card__wrapper_section_results">
                <time datetime="2019-08-02" class="card__date card__date_section_results">${news.publishedAt}</time>
                <h3 class="card__title card__title_section_results">${news.title}</h3>
                <p class="card__text">${news.description}</p>
                <span class="card__source">${news.source.name}</span>
              </div>
              <a target="_blank" class="card__link" href="${news.url}"></a>
            </div>`;
  }

  // создание карточки
  create(news) {
    const container = document.createElement('div');
    news.publishedAt = this._translateDate(news.publishedAt);
    container.insertAdjacentHTML('beforeend', this._getTemplate(news));
    return container.firstElementChild;
  }

}