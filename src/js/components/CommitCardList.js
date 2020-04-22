export default class CommitCardList {

  constructor(slider, commitCard) {
    this.slider = slider;
    this.commitCard = commitCard;
  }

  // добавление карточек
  render(commitArray) {
    for (let commit of commitArray) {
      this.slider.insertAdjacentElement('afterbegin', this.commitCard.create(commit));
    }
  }

}