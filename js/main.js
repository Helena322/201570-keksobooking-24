//Использовались материалы https://learn.javascript.ru/number
const AUTOR = [
  'Вася Пупкин',
  'Саша Иванов',
  'Настя Иванова',
];

const TITLE = [
  'Отличное предложение',
  'Хорошие соседи',
  'Неплохое место',
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKIN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Отличная квартира',
  'Великолепный вид',
  'Со всеми удобствами',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const SIMILAR_OFFER_COUNT = 10;

const getRandomFloatRange = function (from, to, point = 0) {
  const min = Math.min(from, to);
  const max = Math.max(from, to);
  return parseFloat((Math.random() * (max - min) + min).toFixed(point));
};

const getRandomIntFromRange = function (min, max) {
  return Math.round(getRandomFloatRange(min, max));
};

const getRandomArrayElement = ((elements) =>
  elements[_.random(0, elements.length - 1)]
);

const getRandomLat = (() => (
  getRandomFloatRange(35.65000, 35.70000, 5)
));

const getRandomLng = (() => (
  getRandomFloatRange(139.70000, 139.80000, 5)
));

const getRandomAdress = (() => (
  [getRandomLat(), getRandomLng()]
));

const getRandomPrice = (() => (
  getRandomIntFromRange(1000, 6000)
));

const getRandomRooms = (() => {
  const room = 'Комнат: ';
  return room + getRandomIntFromRange(1, 10);
});

const getRandomGiests = (() => {
  const giest = 'Гостей: ';
  return giest + getRandomIntFromRange(1, 10);
});

const getOfferDescription = ((elements) => {
  const descriptionNumber = getRandomIntFromRange(1, 6);
  let descriptionArray = [];
  let uniqArray = [];

  for (let descriptionItem = 0; descriptionItem < descriptionNumber; descriptionItem++) {
    descriptionArray = descriptionArray.concat(getRandomArrayElement(elements));

    uniqArray = descriptionArray.filter((item, pos) => (
      descriptionArray.indexOf(item) === pos
    ));
  }

  return uniqArray;
});

const getRandomAvatarNumber = () => {
  const num1 = getRandomIntFromRange(1, 10);
  const t1 = 'img/avatars/user0';
  const t2 = 'img/avatars/user';
  const p11 = '.png';
  return (num1 < 10) ? t1 + num1 + p11 : t2 + num1 + p11;
};

const getOffer = (() => (
  {
    autor: [getRandomArrayElement(AUTOR), getRandomAvatarNumber()],
    offer: [getRandomArrayElement(TITLE), getRandomAdress(), getRandomPrice(), getRandomArrayElement(TYPE), getRandomRooms(), getRandomGiests(), getRandomArrayElement(CHECKIN), getRandomArrayElement(CHECKOUT), getOfferDescription(FEATURES), getRandomArrayElement(DESCRIPTION), getRandomArrayElement(PHOTOS)],
    location: [getRandomAdress()],
  }
));

const similarOffer = Array.from({length: SIMILAR_OFFER_COUNT}, getOffer);
similarOffer;
