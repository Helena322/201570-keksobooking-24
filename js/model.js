export const MIN_TITLE_LENGTH = 30;
export const MAX_TITLE_LENGTH = 100;
export const MIN_PRICE = 0;
export const MAX_PRICE = 1000000;
export const SIMILAR_DATA_COUNT = 10;
export const FILE_TYPES = ['webp', 'jpg', 'jpeg', 'png'];
export const RERENDER_DELAY = 500;
export const DEFAULT_ANY = 'any';
export const DEFAULT_GUEST_ZERO = 0;

export const PRICE_FOR_NIGHT = Object.freeze({
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
});

export const ROOM_FOR_GIESTS = Object.freeze({
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
});

export const TOKYO_COORDS = Object.freeze({
  LG: 35.67508,
  LN: 139.73490,
});

export const PRICE = Object.freeze({
  min: 10000,
  middle: 50000,
});

export const ACOMMODATION_TYPES = Object.freeze({
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
});
