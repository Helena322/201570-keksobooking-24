import {AUTOR, TITLE, TYPE, CHECKIN, CHECKOUT, FEATURES, DESCRIPTION, PHOTOS} from './data.js';

export const ALERT_SHOW_TIME = 5000;

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

export const getRandomPrice = (() => {
  const night = ' ₽/ночь';
  getRandomIntFromRange(1000, 6000) + night;
});

export const getRandomRooms = (() => {
  const room = ' комнаты';
  return getRandomIntFromRange(1, 10) + room;
});

export const getRandomGiests = (() => {
  const giest = ' гостей';
  return getRandomIntFromRange(1, 10) + giest;
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
  const avatarLink = 'img/avatars/user';
  const avatarFormat = '.png';
  return (getAvatarNumber < 10) ? avatarLink.padEnd(17, '0') + getAvatarNumber + avatarFormat : avatarLink + getAvatarNumber + avatarFormat;
};

export const getOffers = (() => (
  {
    autor: {name: getRandomArrayElement(AUTOR), avatar: getRandomAvatarNumber()},
    offer: {title: getRandomArrayElement(TITLE),
      adress: getRandomAdress(),
      price: getRandomPrice(),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomRooms(),
      giests: getRandomGiests(),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getOfferDescription(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photo: getRandomArrayElement(PHOTOS)},
    location: {adress: getRandomAdress()},
  }
));

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};
