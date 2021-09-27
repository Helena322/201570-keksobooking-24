const swap = function (x, y) {
  return x > y ? [y, x] : [x, y];
}

const arrWithNumbers = function (x, y) {
  const [min, max] = swap (x, y);
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
