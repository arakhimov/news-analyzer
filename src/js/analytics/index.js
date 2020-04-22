// стили
import '../../pages/analytics.css';

// классы
import Statistics from '../components/Statistics.js';
import DataStorage from '../modules/DataStorage.js';

// константы
import {days} from '../constants/constants.js';

(function() {
  
  // экземпляр DataStorage
  const dataNews = new DataStorage();
  // экземпляр Statistics
  const statistics = new Statistics(dataNews.getNewsData(), dataNews.getRequest());
  // экземпляр Date
  let date = new Date;
  
  // элементы DOM
  const elementsDOM = {
    title:  document.querySelector('.content__title_section_request-answer'),
    headers: document.querySelector('.request-answer__amount_content_headers'),
    text: document.querySelector('.request-answer__amount_content_text'),
    daysWrapper: document.querySelector('.analytics__day-wrapper'),
    daysTemplate: document.querySelector('.analytics__day-template'),
    ranges: document.querySelectorAll('.analytics__range')
  };
  
  // простановка заголовков
  elementsDOM.title.insertAdjacentHTML('beforeend', ` &laquo;${dataNews.getRequest()}&raquo;`);
  elementsDOM.text.textContent = dataNews.getNewsData().totalResults;
  
  // простановка текущих дней недели
  function getDays() {
    // добавляем дни недели в DOM
    for (let i = 0; i <= 6; i++) {
      elementsDOM.daysWrapper.append(elementsDOM.daysTemplate.content.cloneNode(true));
    }
    let counter = date.getDate() - 6;
    // проставляем даты
    for (let day of document.querySelectorAll('.analytics__day')) {
      date.setDate(counter);
      day.textContent = String(date.getDate()) + ',' + String(days[date.getDay()]);
      counter++;
    }
  }
  getDays();

  // получение данных статистики
  let rangeValue = statistics.getMentionAmount();
  elementsDOM.headers.textContent = rangeValue.common;

  // отображение статистики
  function imageRange() {
    let counter = Object.keys(rangeValue)[0];
    for(let day of elementsDOM.ranges) {
      day.textContent = rangeValue[counter] ? rangeValue[counter] : 0;
      day.style.width = rangeValue[counter] ? `${rangeValue[counter]}%` : `10px`;
      counter++;
    }
  }
  imageRange();

} ())