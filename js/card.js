import {ACOMMODATION_TYPES, SHOW_STATES} from './model.js';

const getType = (type) => (
  ACOMMODATION_TYPES[type]
);

const card = document.querySelector('#card').content.querySelector('.popup');
const avatar = card.querySelector('.popup__avatar');

const getPhotos = (photos) => {
  const photo = card.querySelector('.popup__photos');
  photo.innerHTML = '';

  photos.forEach((element) => {
    const photoItem = document.createElement('img');
    photoItem.classList.add('popup__photo');
    photoItem.width = 45;
    photoItem.height = 40;
    photoItem.src = element;
    card.querySelector('.popup__photos').appendChild(photoItem);
  });
};

const setCardPhotos = (isCondition, selector, photos) => {
  if (!isCondition) {
    card.querySelector(selector).classList.add(SHOW_STATES.hidden);
    return;
  } else if (card.querySelector(selector).classList.contains(SHOW_STATES.hidden)) {
    card.querySelector(selector).classList.remove(SHOW_STATES.hidden);
  }
  getPhotos(photos);
};

const getFeatures = (features) => {
  const feature = card.querySelector('.popup__features');
  feature.innerHTML = '';

  features.forEach((element) => {
    const featureItem = document.createElement('li');
    featureItem.classList.add('popup__feature');
    featureItem.classList.add(`popup__feature--${element}`);
    card.querySelector('.popup__features').appendChild(featureItem);
  });
};

const setCardFeatures = (features) => {
  if (!features) {
    card.querySelector('.popup__features').classList.add(SHOW_STATES.hidden);
  } else {
    if (card.querySelector('.popup__photos').classList.contains(SHOW_STATES.hidden)) {
      card.querySelector('.popup__features').classList.remove(SHOW_STATES.hidden);
    }
    getFeatures(features);
  }
};

const setCardContent = (isCondition, selector, content) => {
  if (!isCondition) {
    card.querySelector(selector).classList.add(SHOW_STATES.hidden);
    return;
  }
  if (card.querySelector(selector).classList.contains(SHOW_STATES.hidden)) {
    card.querySelector(selector).classList.remove(SHOW_STATES.hidden);
  }
  card.querySelector(selector).textContent = content;
};

const setCardAvatar = (isCondition) => {
  if (!isCondition) {
    avatar.classList.add(SHOW_STATES.hidden);
    return;
  }
  if (avatar.classList.contains(SHOW_STATES.hidden)) {
    avatar.classList.remove(SHOW_STATES.hidden);
  }
  avatar.src = isCondition;
};

const getOffer = (data) => {
  card.cloneNode(true);

  setCardAvatar(data.author.avatar);
  setCardContent(data.offer.title, '.popup__title', data.offer.title);
  setCardContent(data.offer.address, '.popup__text--address', data.offer.address);
  setCardContent(data.offer.price, '.popup__text--price', data.offer.price);
  setCardContent(data.offer.type, '.popup__type', getType(data.offer.type));
  setCardContent(data.offer.guests || data.offer.rooms, '.popup__text--capacity', `${data.offer.rooms} ?????????????? ?????? ${data.offer.guests} ????????????.`);
  setCardContent(data.offer.checkin || data.offer.checkout, '.popup__text--time', `?????????? ?????????? ${data.offer.checkin}, ?????????? ???? ${data.offer.checkout}`);
  setCardContent(data.offer.description, '.popup__description', data.offer.description);
  setCardPhotos(data.offer.photos, '.popup__photos', data.offer.photos);
  setCardFeatures(data.offer.features);

  return card;
};

export {getOffer};
