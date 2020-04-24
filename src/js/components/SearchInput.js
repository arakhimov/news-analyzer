export default class SearchInput {

  constructor(input, options) {
    this.input = input;
    this.elementsDOM = options.elementsDOM;
    this.elementsDOM.resultsChild = {
      error: options.elementsDOM.results.querySelector('.results__error'),
      header: options.elementsDOM.results.querySelector('.results__header'),
      cardlist: options.elementsDOM.results.querySelector('.results__cardlist'),
      button: options.elementsDOM.results.querySelector('.results__button')
    };
    this.components = options.components;
    this.storage = options.components.dataStorage;
    this.request = options.components.dataStorage.getRequest();
    this.api = options.components.newsApi;
    this.cardList = options.components.newsContainer;
    this._messages = options.const.wordTemplate;
    this._regexp = options.const.regexp.text;
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
      this.elementsDOM.resultsChild.error.classList.remove('results__error_active');
      this.elementsDOM.resultsChild.header.classList.add('results__header_state_active');
      this.elementsDOM.resultsChild.header.classList.remove('results__header_state_disabled');
      this.elementsDOM.resultsChild.cardlist.classList.add('results__cardlist_active');
      this.elementsDOM.resultsChild.button.classList.add('results__button_active');
      // сохранение значения запроса в LocalStorage
      this.storage.setRequest(this.input.value);
      // сохраняем новости в локальном хранилище
      this.storage.setNewsData(res);
      // сохраняем карточки в с списке карточек
      this.cardList.setNewsData(res.articles);
      // сохраняем значение запроса
      this.request = this.input.value;
      // сбрасываем индекс
      this.cardList.setIndex({value: 0});
      // добавление карточек
      this.addNews({});
    }
  }

  // в случае ошибочного запроса
  _requestError(error) {
    console.log(error);
    this.elementsDOM.results.classList.add('results_active');
    this.elementsDOM.resultsChild.error.classList.add('results__error_active');
    this.elementsDOM.resultsChild.header.classList.add('results__header_state_disabled');
    this.elementsDOM.resultsChild.header.classList.remove('results__header_state_active');
    this.elementsDOM.resultsChild.cardlist.classList.remove('results__cardlist_active');
    this.elementsDOM.resultsChild.button.classList.remove('results__button_active');
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
  validate(event) {
    if (this._checkInputValidity(event.target)) {
      this.elementsDOM.submitButton.classList.add('search__button_active');
      this._isValid = true;
    }
    else {
      this.elementsDOM.submitButton.classList.remove('search__button_active');
      this._isValid = false;
    }
  }

  // добавление новостей на страницу
  addNews({amount = 3, index = 3, buttonShowMore = this.elementsDOM.buttonShowMore}) {
    // отрисовываем карточки
    this.cardList.render(this.cardList._separatePartNews(amount));
    // увеличиваем индекс количества отображенных карточек
    this.cardList.setIndex({value: index});
    // скрываем кнопку показать еще если больше нет карточек
    if (this.cardList.getIndex() >= this.cardList.getNewsData().length) {
      buttonShowMore.classList.remove('results__button_active');
    }
    this.elementsDOM.submitButton.classList.remove('search__button_active');
    // добавляем слушатель загрузки изображения на добавленные карточки и удаляем карточки без изображений
    const _hundleImageDelete = this._errorImageLoading.bind(this);
    // последние добавленные карточки
    const cards = Array.from(this.elementsDOM.newsCardList.querySelectorAll('.card__image_section_results')).slice(-amount);
    cards.forEach(card => {
      // добавляем слушатель
      card.addEventListener('error', _hundleImageDelete);
      // удаляем слушатель
      setTimeout(() => card.removeEventListener('error', _hundleImageDelete), 10000);
    });
  }

  // получение новостей
  getNews(event) {
    // валидация
    // при передаче event вместо использования глобальных переменных приходится лишний раз осуществлять поиск по DOM-дереву, но
    // я посчитал это рациональнее, т.к. это делает метод более невисимым - например, при передаче ему другой формы
    const submit = event.target.querySelector('.search__button');
    const input = event.target.querySelector('.search__input');
    if (this._isValid && submit.classList.contains('search__button_active')) {
      // удаляем старые новости
      this.cardList.deleteNews();
      // прелоадер
      this.elementsDOM.preloader.classList.add('loading_active');
      // input и submit делаем неактивными на время загрузки
      input.disabled = true;
      submit.disabled = true;
      // получение данных из localStorage
      this.api.getNews(this.input) 
        .then(res => this._requestSuccess(res))
        .catch(error => this._requestError(error))
        .finally( () => {
        this.elementsDOM.preloader.classList.remove('loading_active');
        input.disabled = false;
        submit.disabled = false;
      });
    }
  }

  //ошибка загрузки изображения
  _errorImageLoading(event) {
    event.currentTarget.parentElement.remove();
    this.addNews({amount: 1, index: 1});
  }

}