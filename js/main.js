const getRandomFloatRange = function (from, to, point) {
  const min = Math.min(from, to);
  const max = Math.max(from, to);
  return parseFloat((Math.random() * (max - min) + min).toFixed(point));
};

const getRandomIntFromRange = function (min, max) {
  return Math.round(getRandomFloatRange(min, max));
};

getRandomIntFromRange(0, 10);

getRandomFloatRange(100, 200, 2);

//Использовались материалы https://learn.javascript.ru/number
