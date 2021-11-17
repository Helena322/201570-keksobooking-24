export const MAIN_PIN_ICON = Object.freeze({
  URL: 'img/pin.svg',
  WIDTH: 40,
  HEIGHT: 40,
  MIDDLE: 20,
});

export const MAIN_PIN_MARKER = Object.freeze({
  URL: 'img/main-pin.svg',
  WIDTH: 52,
  HEIGHT: 52,
  MIDDLE: 26,
});

export const TITLE_LENGTH = Object.freeze({
  MIN: 30,
  MAX: 100,
});

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

export const HOUSING_TYPES = Object.freeze({
  palace: 'palace',
  flat: 'flat',
  house: 'house',
  bungalow: 'bungalow',
  hotel: 'hotel',
});

export const ACOMMODATION_TYPES = Object.freeze({
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
});

export const FILTER_TYPES = Object.freeze({
  low: 'low',
  middle: 'middle',
  high: 'high',
});

export const SHOW_STATES = Object.freeze({
  hidden: 'hidden',
  disabled: 'disabled',
});

export const FILE_TYPES = ['webp', 'jpg', 'jpeg', 'png'];

export const NOTIFICATION_TYPES = Object.freeze({
  errorGet: 'errorGet',
  errorPost: 'errorPost',
  successPost: 'successPost',
});

export const checkIsEscape = (key) => ['Escape', 'Esc'].includes(key);
