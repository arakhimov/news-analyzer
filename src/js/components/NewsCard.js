export default class NewsCard {

  constructor(translateDate, sanitizeHTML) {
    // функция для изменения формата даты
    this._translateDate = translateDate;
    // функция для безопасного добавления innerHTML
    this._sanitizeHTML = sanitizeHTML;
  }

  // создание шаблона 
  _getTemplate(news) {
    return `<div class="card">
              <img src="${this._sanitizeHTML(news.urlToImage)}" alt="фото ${this._sanitizeHTML(news.title)}" 
                class="card__image card__image_section_results">
              <div class="card__wrapper card__wrapper_section_results">
                <time datetime="2019-08-02" class="card__date card__date_section_results">${this._sanitizeHTML(news.publishedAt)}</time>
                <h3 class="card__title card__title_section_results">${this._sanitizeHTML(news.title)}</h3>
                <p class="card__text">${this._sanitizeHTML(news.description)}</p>
                <span class="card__source">${this._sanitizeHTML(news.source.name)}</span>
              </div>
              <a target="_blank" class="card__link" href="${this._sanitizeHTML(news.url)}"></a>
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