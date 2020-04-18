// перевод даты в другой формат
export function translateDate(news) {
  const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const regexpDate = [
    /((\d{4})-(\d{2})-(\d{2}))/,
    /(\d{4})-([а-я]{3,8})-(\d{2})/
  ];
  let temp = news.publishedAt.match(regexpDate[0])[0].split('-');
  temp[1] = months[+temp[1]];
  return temp.join('-').replace(regexpDate[1], `$3 $2, $1`);
}
