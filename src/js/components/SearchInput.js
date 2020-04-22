export default class SearchInput {
  constructor(input, options) {
    this.input = input;
    this.elementsDOM = options.elementsDOM;
    this.components = options.components;
    this.storage = options.components.dataStorage;
    this.api = options.components.newsApi;
    this.date = options.components.date;
    this.cardList = options.components.newsContainer;
    this._messages = options.wordTemplate;
    this._regexp = options.regexp.text;
    this._isValid = false;
  }

  // в случае успешного запроса к API
  _requestSuccess(res) {
    // новостей на данную тему не найдено
    if (res.articles.length === 0) {
      this.elementsDOM.results.classList.remove('results_active');
      this.elementsDOM.notFound.classList.add('not-found_active');
    }
    // новости найдены
    else {
      this.elementsDOM.results.classList.add('results_active');
      this.elementsDOM.notFound.classList.remove('not-found_active');
      this.elementsDOM.results.querySelector('.results__error').classList.remove('results__error_active');
      this.elementsDOM.results.querySelector('.results__header').classList.add('results__header_state_active');
      this.elementsDOM.results.querySelector('.results__header').classList.remove('results__header_state_disabled');
      this.elementsDOM.results.querySelector('.results__cardlist').classList.add('results__cardlist_active');
      this.elementsDOM.results.querySelector('.results__button').classList.add('results__button_active');
      // сохраняем в локальном хранилище
      this.storage.setData(res);
      // сбрасываем индекс
      this.storage.setIndex({value: 0});
      // добавление карточек
      this.addNews({});
    }
  }

  // в случае ошибочного запроса
  _requestError(error) {
    console.log(error);
    this.elementsDOM.results.classList.add('results_active');
    this.elementsDOM.results.querySelector('.results__error').classList.add('results__error_active');
    this.elementsDOM.results.querySelector('.results__header').classList.add('results__header_state_disabled');
    this.elementsDOM.results.querySelector('.results__header').classList.remove('results__header_state_active');
    this.elementsDOM.results.querySelector('.results__cardlist').classList.remove('results__cardlist_active');
    this.elementsDOM.results.querySelector('.results__button').classList.remove('results__button_active');
  }

  // валидация текстового поля
  _checkInputValidity(input) {
    // проверка - обязательное поле
    if (input.value.length < 1) {
      input.nextElementSibling.classList.add('search__explanation-text_active');
      input.nextElementSibling.textContent = this._messages.nesessaryField;
      return false;
    }

    // проверка - должно быть от 2 до 30 символов
    if (input.value.length < 2 || input.length > 30) {
      input.nextElementSibling.classList.add('search__explanation-text_active');
      input.nextElementSibling.textContent = this._messages.validationLength;
      return false;
    }
    
    // проверка - должно содержать текст
    if (!this._regexp.test(input.value)) {
      input.nextElementSibling.classList.add('search__explanation-text_active');
      input.nextElementSibling.textContent = this._messages.text;
      return false;
    }
    
    input.nextElementSibling.classList.remove('search__explanation-text_active');
    input.nextElementSibling.textContent = '';
    return true;
  }

  // статус submit и _isValid в зависимости от того, пройдена ли валидация текстового поля
  validate() {
    if (this._checkInputValidity(this.input)) {
      this.elementsDOM.submitButton.classList.add('search__button_active');
      this._isValid = true;
    }
    else {
      this.elementsDOM.submitButton.classList.remove('search__button_active');
      this._isValid = false;
    }
  }

  // добавление новостей на страницу
  addNews({amount = 3, index = 3}) {
    // отрисовываем карточки
    this.cardList.render(this.storage.getCards(amount));
    // увеличиваем индекс количества отображенных карточек
    this.storage.setIndex({value: index});
    // скрываем кнопку показать еще если карточек больше 100 или больше нет карточек
    if (this.storage.getIndex() >= this.storage.getNewsData().articles.length) {
      this.elementsDOM.buttonShowMore.classList.remove('results__button_active');
    }
    this.elementsDOM.submitButton.classList.remove('search__button_active');
    // добавляем слушатель загрузки изображения на добавленные карточки и удаляем карточки без изображений
    let _imageDelete = this._errorImageLoading.bind(this);
    // последние добавленные карточки
    let cards = Array.from(this.elementsDOM.newsCardList.querySelectorAll('.card__image_section_results')).slice(-amount);
    cards.forEach(card => {
      // добавляем слушатель
      card.addEventListener('error', _imageDelete);
      // удаляем слушатель
      setTimeout(() => card.removeEventListener('error', _imageDelete), 10000);
    });
  }

  // получение новостей
  getNews() {
    // валидация
    if (this._isValid && this.elementsDOM.submitButton.classList.contains('search__button_active')) {
      // удаляем старые новости
      this._deleteNews();
      // прелоадер
      this.elementsDOM.preloader.classList.add('loading_active');
      // input и submit делаем неактивными на время загрузки
      this.input.disabled = true;
      this.elementsDOM.submitButton.disabled = true;
      // сохранение значения запроса в LocalStorage
      this.storage.setRequest(this.input.value);
      // получение данных из localStorage
      this.api.getNews(this.input, this.date) 
        .then(res => this._requestSuccess(res))
        .catch(error => this._requestError(error))
        .finally( () => {
        this.elementsDOM.preloader.classList.remove('loading_active');
        this.input.disabled = false;
        this.elementsDOM.submitButton.disabled = false;
      });
    }
  }

  // удаление новостей
  _deleteNews() {
    if (this.elementsDOM.newsCardList.children.length > 0) {
      let cards = Array.from(this.elementsDOM.newsCardList.children);
      cards.forEach(card => card.remove());
    }
  }

  //ошибка загрузки изображения
  _errorImageLoading(event) {
    event.currentTarget.parentElement.remove();
    this.addNews({amount: 1, index: 1});
  }

}