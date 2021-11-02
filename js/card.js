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

export const getOffer = (call) => {
  card.cloneNode(true);

  if (!call.offer.title) {
    card.querySelector('.popup__title').textContent.classList.add('hidden');
  } else {
    // card.querySelector('.popup__title').textContent.classList.remove('hidden');
    card.querySelector('.popup__title').textContent = call.offer.title;
  }

  if (!call.offer.address) {
    card.querySelector('.popup__text--address').classList.add('hidden');
  } else {
    // card.querySelector('.popup__text--address').classList.remove('hidden');
    card.querySelector('.popup__text--address').textContent = call.offer.address;
  }

  if (!call.offer.price) {
    card.querySelector('.popup__text--price').classList.add('hidden');
  } else {
    // card.querySelector('.popup__text--price').classList.remove('hidden');
    card.querySelector('.popup__text--price').textContent = call.offer.price;
  }

  if (!call.offer.type) {
    card.querySelector('.popup__type').classList.add('hidden');
  } else {
    // card.querySelector('.popup__type').classList.remove('hidden');
    card.querySelector('.popup__type').textContent = getType(call.offer.type);
  }

  if (!call.offer.giests || !call.offer.rooms) {
    card.querySelector('.popup__text--capacity').classList.add('hidden');
  } else {
    // card.querySelector('.popup__text--capacity').classList.remove('hidden');
    const roomsForGuests = ' для ';
    card.querySelector('.popup__text--capacity').textContent = call.offer.rooms + roomsForGuests + call.offer.giests;
  }

  if (!call.offer.checkin || !call.offer.checkout) {
    card.querySelector('.popup__text--time').classList.add('hidden');
  } else {
    // card.querySelector('.popup__text--time').classList.remove('hidden');
    const timeIn = 'Заезд после ';
    const timeOut = ', выезд до ';
    card.querySelector('.popup__text--time').textContent = timeIn + call.offer.checkin + timeOut + call.offer.checkout;
  }

  if (!call.offer.features) {
    card.querySelector('.popup__features').classList.add('hidden');
  } else {
    // card.querySelector('.popup__features').classList.remove('hidden');
    const features = call.offer.features;
    const feature = card.querySelector('.popup__features');
    feature.innerHTML = '';

    features.forEach((element) => {
      const featureItem = document.createElement('li');
      featureItem.classList.add('popup__feature');
      featureItem.classList.add(`popup__feature--${element}`);
      card.querySelector('.popup__features').appendChild(featureItem);
    });
  }

  if (!call.offer.description) {
    card.querySelector('.popup__description').classList.add('hidden');
  } else {
    // card.querySelector('.popup__description').classList.remove('hidden');
    card.querySelector('.popup__description').textContent = call.offer.description;
  }

  if (!call.offer.photos) {
    card.querySelector('.popup__photos').classList.add('hidden');
  } else {
    // card.querySelector('.popup__photos').classList.remove('hidden');
    const photos = call.offer.photos;
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

  if (!call.author.avatar) {
    card.querySelector('.popup__avatar').classList.add('hidden');
  } else {
    card.querySelector('.popup__avatar').classList.remove('hidden');
    card.querySelector('.popup__avatar').src = call.author.avatar;
  }

  return card;
};
