// простановка текущих дней недели
export function getDays(elementsDOM, date) {
  let counter = date.getDate() - 6;
  const days = ['вс','пн','вт','ср','чт','пт','сб'];
  for(let day of elementsDOM) {
    date.setDate(counter);
    day.textContent = String(date.getDate()) + ',' + String(days[date.getDay()]);
    counter++;
  }
}