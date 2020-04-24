export default class CommitCard {

  constructor(translateDate, sanitizeHTML) {
    this._translateDate = translateDate;
    this._sanitizeHTML = sanitizeHTML;
  }

  // получение шаблона
  _getTemplate(commit) {
    return `<div class="card card_section_github flickity__carousel-cell">
              <time datetime="${this._sanitizeHTML(commit.commit.committer.date)}" class="card__date card__date_section_github">
                ${this._sanitizeHTML(commit.commit.committer.date)}
              </time>
              <div class="card__wrapper card__wrapper_section_github">
                <img src="${this._sanitizeHTML(commit.author.avatar_url)}" alt="github commit" class="card__image card__image_section_github">
                <h3 class="card__title card__title_section_github">${this._sanitizeHTML(commit.commit.committer.name)}
                  <span class="card__email">${this._sanitizeHTML(commit.commit.committer.email)}</span>
                </h3>
              </div>
              <p class="card__text">${this._sanitizeHTML(commit.commit.message)}</p>
            </div>`;
  }

  // создание карточки
  create(commit) {
    commit.commit.committer.date = this._translateDate(commit.commit.committer.date);
    const container = document.createElement('div');
    container.insertAdjacentHTML('beforeend', this._getTemplate(commit));
    return container.firstElementChild;
  }

}