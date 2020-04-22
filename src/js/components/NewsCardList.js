export default class NewsCardList {

  constructor(container, card) {
    this.container = container;
    this.card = card;
  }

  // добавление карточек
  render(newsArray) {
    for(let news of newsArray) {
      this.container.insertAdjacentElement('beforeend', this.card.create(news));
    }
  }
  
}