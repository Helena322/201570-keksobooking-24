const getRandomIntFromRange = function (min, max) {
  return (min < max) ? Math.round(Math.random() * (max - min) + min) : false;
};

getRandomIntFromRange(0, 10);

const coordinates = function (from, to, point) {
  return (from < to) ? parseFloat((Math.random() * (to - from) + from).toFixed(point)) :  parseFloat((Math.random() * (from - to) + to).toFixed(point));
};

coordinates(100, 200, 2);

//Использовались материалы https://learn.javascript.ru/number
