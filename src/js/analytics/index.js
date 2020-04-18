// стили
import '../../pages/analytics.css';

// классы
import Statistics from '../components/Statistics.js';
import DataStorage from '../modules/DataStorage.js';

// экземпляр DataStorage
const dataNews = new DataStorage();
// экземпляр Statistics
const statistics = new Statistics(dataNews.getNewsData(), dataNews.getRequest());
// экземпляр Date
let date = new Date;

// функции
import {getDays} from '../utils/getDays.js';

// элементы DOM
const elementsDOM = {
  title:  document.querySelector('.content__title_section_request-answer'),
  headers: document.querySelector('.request-answer__amount_content_headers'),
  text: document.querySelector('.request-answer__amount_content_text'),
  days: document.querySelectorAll('.analytics__day'),
  ranges: document.querySelectorAll('.analytics__range')
};

// простановка заголовков
elementsDOM.title.insertAdjacentHTML('beforeend', ` &laquo;${dataNews.getRequest()}&raquo;`);
elementsDOM.text.textContent = dataNews.getNewsData().totalResults;

// простановка дней недели
getDays(elementsDOM.days, date);

// получение данных статистики
let rangeValue = statistics.getMentionAmount();
elementsDOM.headers.textContent = rangeValue.common;

// отображение статистики
function imageRange() {
  let counter = Object.keys(rangeValue)[0];
  for(let day of elementsDOM.ranges) {
    day.textContent = rangeValue[counter];
    day.style.width = `${rangeValue[counter]}%`;
    counter++;
  }
}
imageRange();



