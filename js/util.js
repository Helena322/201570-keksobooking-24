import {AUTOR, TITLE, TYPE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS} from './data.js';

export const getRandomFloatRange = ((from, to, point = 0) => {
  const min = Math.min(from, to);
  const max = Math.max(from, to);
  return parseFloat((Math.random() * (max - min) + min).toFixed(point));
});

export const getRandomIntFromRange = ((min, max) => (
  Math.round(getRandomFloatRange(min, max))
));

export const getRandomArrayElement = ((elements) =>
  elements[_.random(0, elements.length - 1)]
);

export const getRandomLat = (() => (
  getRandomFloatRange(35.65000, 35.70000, 5)
));

export const getRandomLng = (() => (
  getRandomFloatRange(139.70000, 139.80000, 5)
));

export const getRandomAdress = (() => (
  [getRandomLat(), getRandomLng()]
));

export const getRandomPrice = (() => (
  getRandomIntFromRange(1000, 6000)
));

export const getRandomRooms = (() => {
  const room = 'Комнат: ';
  return room + getRandomIntFromRange(1, 10);
});

export const getRandomGiests = (() => {
  const giest = 'Гостей: ';
  return giest + getRandomIntFromRange(1, 10);
});

export const getOfferDescription = ((elements) => {
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

export const getRandomAvatarNumber = () => {
  const getAvatarNumber = getRandomIntFromRange(1, 10);
  const avatarNumberZero = 'img/avatars/user0';
  const avatarNumberWithoutZero = 'img/avatars/user';
  const avatarFormat = '.png';
  return (getAvatarNumber < 10) ? avatarNumberZero + getAvatarNumber + avatarFormat : avatarNumberWithoutZero + getAvatarNumber + avatarFormat;
};

export const getOffers = (() => (
  {
    autor: [getRandomArrayElement(AUTOR), getRandomAvatarNumber()],
    offer: [getRandomArrayElement(TITLE), getRandomAdress(), getRandomPrice(), getRandomArrayElement(TYPE), getRandomRooms(), getRandomGiests(), getRandomArrayElement(CHECKIN), getRandomArrayElement(CHECKOUT), getOfferDescription(FEATURES), getRandomArrayElement(DESCRIPTION), getRandomArrayElement(PHOTOS)],
    location: [getRandomAdress()],
  }
));
