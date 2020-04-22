import {regexp} from '../constants/constants.js';
import {months} from '../constants/constants.js';

// перевод даты в другой формат
export function translateDate(date) {
  // выделяем из исходного формата только дату в формата yyyy-mmy-dd
  let temp = date.match(regexp.dateDigits)[0].split('-');
  // заменяем числовой индекс месяца на строчный
  temp[1] = months[+temp[1] - 1];
  // изменяем порядок следования
  return temp.join('-').replace(regexp.dateString, `$3 $2, $1`);
}