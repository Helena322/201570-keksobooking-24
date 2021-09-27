const swap = function (min, max) {
  return min > max ? [max, min] : [min, max];
};

const arrWithNumbers = function (from, to) {
  const [min, max] = swap (from, to);
  return Math.random() * (max - min) + min;
};

const coordinates = function (from, to, point) {
  return (from < to) ? parseFloat((Math.random() * (to - from) + from).toFixed(point)) : parseFloat(arrWithNumbers(from, to).toFixed(point));
};

const getRandomIntFromRange = function (min, max) {
  return Math.round(coordinates(min, max));
};

getRandomIntFromRange(0, 10);

coordinates(100, 200, 2);

//Использовались материалы https://learn.javascript.ru/number
