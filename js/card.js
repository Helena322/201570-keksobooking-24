import {getOffers} from './util.js';

export const TYPE = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

export const getNewType = (newT) => (
  TYPE[newT]
);

export const card = document.querySelector('#card').content.querySelector('.popup');
export const canvas = document.querySelector('#map-canvas');

// export const getOffer = (call) => {
//   card.cloneNode(true);

//   if (!call.offer.title) {
//     card.querySelector('.popup__title').textContent.classList.add('hidden');
//   } else {
//     card.querySelector('.popup__title').textContent = call.offer.title;
//   }

//   if (!call.offer.address) {
//     card.querySelector('.popup__text--address').classList.add('hidden');
//   } else {
//     card.querySelector('.popup__text--address').textContent = call.offer.address;
//   }

//   if (!call.offer.price) {
//     card.querySelector('.popup__text--price').classList.add('hidden');
//   } else {
//     card.querySelector('.popup__text--price').textContent = call.offer.price;
//   }

//   if (!call.offer.type) {
//     card.querySelector('.popup__type').classList.add('hidden');
//   } else {
//     card.querySelector('.popup__type').textContent = getNewType(call.offer.type);
//   }

//   if (!call.offer.giests || !call.offer.rooms) {
//     card.querySelector('.popup__text--capacity').classList.add('hidden');
//   } else {
//     const roomsForGuests = ' для ';
//     card.querySelector('.popup__text--capacity').textContent = call.offer.rooms + roomsForGuests + call.offer.giests;
//   }

//   if (!call.offer.checkin || !call.offer.checkout) {
//     card.querySelector('.popup__text--time').classList.add('hidden');
//   } else {
//     const timeIn = 'Заезд после ';
//     const timeOut = ', выезд до ';
//     card.querySelector('.popup__text--time').textContent = timeIn + call.offer.checkin + timeOut + call.offer.checkout;
//   }

//   if (!call.offer.features) {
//     card.querySelector('.popup__features').classList.add('hidden');
//   } else {
//     for (let i = 0; i < call.offer.features.length - 1; i++) {
//       card.querySelector('.popup__features').textContent = call.offer.features.join(', ');
//     }
//   }

//   if (!call.offer.description) {
//     card.querySelector('.popup__description').classList.add('hidden');
//   } else {
//     card.querySelector('.popup__description').textContent = call.offer.description;
//   }

//   if (!call.offer.photo) {
//     card.querySelector('.popup__photo').src.classList.add('hidden');
//   } else {
//     card.querySelector('.popup__photo').src = call.offer.photo;
//   }

//   if (!call.autor.avatar) {
//     card.querySelector('.popup__avatar').src.classList.add('hidden');
//   } else {
//     card.querySelector('.popup__avatar').src = call.autor.avatar;
//   }

//   canvas.appendChild(card);
// };

// getOffer(getOffers());
