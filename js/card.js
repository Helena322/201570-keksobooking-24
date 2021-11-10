import {ACOMMODATION_TYPES, SHOW_STATES} from './model.js';

const getType = (type) => (
  ACOMMODATION_TYPES[type]
);

const card = document.querySelector('#card').content.querySelector('.popup');
const avatar = card.querySelector('.popup__avatar');

const getOffer = (data) => {
  card.cloneNode(true);

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

  setCardAvatar(data.author.avatar);
  setCardContent(data.offer.title, '.popup__title', data.offer.title);
  setCardContent(data.offer.address, '.popup__text--address', data.offer.address);
  setCardContent(data.offer.price, '.popup__text--price', data.offer.price);
  setCardContent(data.offer.type, '.popup__type', getType(data.offer.type));
  setCardContent(data.offer.guests || data.offer.rooms, '.popup__text--capacity', `${data.offer.rooms} комнаты для ${data.offer.guests} гостей.`);
  setCardContent(data.offer.checkin || data.offer.checkout, '.popup__text--time', `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`);
  setCardContent(data.offer.description, '.popup__description', data.offer.description);

  if (!data.offer.features) {
    card.querySelector('.popup__features').classList.add(SHOW_STATES.hidden);
  } else {
    if (card.querySelector('.popup__photos').classList.contains(SHOW_STATES.hidden)) {
      card.querySelector('.popup__features').classList.remove(SHOW_STATES.hidden);
    }
    const features = data.offer.features;
    const feature = card.querySelector('.popup__features');
    feature.innerHTML = '';

    features.forEach((element) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add(`popup__feature--${element}`);
      card.querySelector('.popup__features').appendChild(featureItem);
    });
  }

  if (!data.offer.photos) {
    card.querySelector('.popup__photos').classList.add(SHOW_STATES.hidden);
  } else {
    if (card.querySelector('.popup__photos').classList.contains(SHOW_STATES.hidden)) {
      card.querySelector('.popup__photos').classList.remove(SHOW_STATES.hidden);
    }
    const photos = data.offer.photos;
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
  }

  return card;
};

export {getOffer};
