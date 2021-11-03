export const ACOMMODATION_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

export const getType = (type) => (
  ACOMMODATION_TYPES[type]
);

export const card = document.querySelector('#card').content.querySelector('.popup');
export const canvas = document.querySelector('#map-canvas');

export const getOffer = (data) => {
  card.cloneNode(true);

  const setCardContent = (isCondition, selector, content) => {
    if (!isCondition) {
      card.querySelector(selector).classList.add('hidden');
      return;
    }
    if (card.querySelector(selector).classList.contains('hidden')) {
      card.querySelector(selector).classList.remove('hidden');
    }
    if (data.author.avatar) {
      card.querySelector(selector).src = content;
      return;
    }
    card.querySelector(selector).textContent = content;
  };

  setCardContent(data.offer.title, '.popup__title', data.offer.title);
  setCardContent(data.offer.address, '.popup__text--address', data.offer.address);
  setCardContent(data.offer.price, '.popup__text--price', data.offer.price);
  setCardContent(data.offer.type, '.popup__type', getType(data.offer.type));
  setCardContent(data.offer.guests || data.offer.rooms, '.popup__text--capacity', `${data.offer.rooms} комнаты для ${data.offer.guests} гостей.`);
  setCardContent(data.offer.checkin || data.offer.checkout, '.popup__text--time', `Заезд после ${data.offer.checkin}, выезд до ${data.offer.checkout}`);
  setCardContent(data.offer.description, '.popup__description', data.offer.description);
  setCardContent(data.author.avatar, '.popup__avatar', data.author.avatar);

  if (!data.offer.features) {
    card.querySelector('.popup__features').classList.add('hidden');
  } else {
    if (card.querySelector('.popup__photos').classList.contains('hidden')) {
      card.querySelector('.popup__features').classList.remove('hidden');
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
    card.querySelector('.popup__photos').classList.add('hidden');
  } else {
    if (card.querySelector('.popup__photos').classList.contains('hidden')) {
      card.querySelector('.popup__photos').classList.remove('hidden');
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
