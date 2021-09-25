const getRandomIntFromRange = function (min, max) { //Функция, возвращающая случайное целое число из переданного диапазона включительно.
  return (min < max) ? Math.round(Math.random() * (max - min) + min) : 'Введите корректные данные';
};

getRandomIntFromRange(0, 10);

const coordinates = function (from, to, point) { //Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.
  return (from < to) ? (Math.random() * (to - from) + from).toFixed(point) : 'Введите корректные данные'; //Использовались материалы https://learn.javascript.ru/number
};

coordinates(100, 200, 2);
