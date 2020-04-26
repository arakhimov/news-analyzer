export default class NewsCardList {

  constructor(container, card, dataStorage) {
    this.container = container;
    this.card = card;
    this._newsCards = dataStorage.getNewsData() ? dataStorage.getNewsData().articles : null;
    this._cardIndex = 0;
  }

  // добавление карточек на страницу
  render(newsArray) {
    for(let news of newsArray) {
      this.container.insertAdjacentElement('beforeend', this.card.create(news));
    }
  }

  // отделение части добавляемых новостей 
  // по умолчанию добавляется три новости или добавляется одна карточка при ошибке загрузки изображения
  _separatePartNews(amount) {
    return this._newsCards.slice(this._cardIndex, this._cardIndex + amount);
  }

  // установка индекса добавляемых карточек
  setIndex({value = 3}) {
    if (!value) {
      this._cardIndex = 0;
    }
    this._cardIndex = this._cardIndex + value;
  }

  // получение количества отображенных карточек
  getIndex() {
    return this._cardIndex;
  }

  // сохранение новых новостей
  setNewsData(newsCards) {
    this._newsCards = newsCards;
  }

  // получение карточек
  getNewsData() {
    return this._newsCards;
  }
  
  // удаление новостей
  deleteNews() {
    if (this.container.children.length > 0) {
      const cards = Array.from(this.container.children);
      cards.forEach(card => card.remove());
    }
  }

}