import {AUTOR} from './data.js';
import {TITLE} from './data.js';
import {TYPE} from './data.js';
import {CHECKIN} from './data.js';
import {CHECKOUT} from './data.js';
import {FEATURES} from './data.js';
import {DESCRIPTION} from './data.js';
import {PHOTOS} from './data.js';
import {SIMILAR_OFFER_COUNT} from './data.js';

const getRandomFloatRange = ((from, to, point = 0) => {
  const min = Math.min(from, to);
  const max = Math.max(from, to);
  return parseFloat((Math.random() * (max - min) + min).toFixed(point));
});

const getRandomIntFromRange = ((min, max) => (
  Math.round(getRandomFloatRange(min, max))
));

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
  const getAvatarNumber = getRandomIntFromRange(1, 10);
  const avatarNumberZero = 'img/avatars/user0';
  const avatarNumberWithoutZero = 'img/avatars/user';
  const avatarFormat = '.png';
  return (getAvatarNumber < 10) ? avatarNumberZero + getAvatarNumber + avatarFormat : avatarNumberWithoutZero + getAvatarNumber + avatarFormat;
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
