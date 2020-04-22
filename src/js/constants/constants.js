// поясняющие шаблоны для input
export const wordTemplate = {
  nesessaryField: 'Введите ключевое слово',
  validationLength: 'Должно быть от 2 до 30 символов',
  text: 'Должно содержать текст'
};

// месяцы для перевода формата даты
export const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

// дни недели
export const days = ['вс','пн','вт','ср','чт','пт','сб'];

// ключ авторизации newsApi
export const AUTHORIZATION_KEY = '1ba3c67f762c470a985974c9866763fa';

// токен GitHub API
export const tokenGithub = 'token 20e8681bb1fdda2d035897183307e867a598ca63';

// регулярные выражения
export const regexp = {
  text: /(?=^[\w\sа-яёА-ЯЁ-]{2,30}$)(?=.*[a-zA-Zа-яёА-ЯЁ])/, //проверка содержания текта - может содержать  от 2 до 30 символов, 
  // латинские буквы и цифры, кириллицу, тире и пробелы, но должно содержать хоть одну букву
  dateDigits: /((\d{4})-(\d{2})-(\d{2}))/,
  dateString: /(\d{4})-([а-я]{3,8})-(\d{2})/
}; 