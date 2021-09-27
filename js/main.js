const coordinates = function (from, to, point) {
  return (from < to) ? parseFloat((Math.random() * (to - from) + from).toFixed(point)) : parseFloat((Math.random() * (from - to) + to).toFixed(point));
};

const getRandomIntFromRange = function (min, max) {
  return Math.round(coordinates(min, max));
};

getRandomIntFromRange(0, 10);

coordinates(100, 200, 2);

//Использовались материалы https://learn.javascript.ru/number
