import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, MIN_PRICE, MAX_PRICE, PRICE_FOR_NIGHT} from './data.js';

const form = document.querySelector('.ad-form');
let formElement = form.querySelector('fieldset');
const formElements = form.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
let mapFiltersElement = mapFilters.querySelector('select');
const mapFiltersElements = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelector('fieldset');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const type = form.querySelector('#type');
const room = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const success = document.querySelector('#success');
const submit = document.querySelector('.ad-form__submit');

title.oninput = () => {
  if (title.value.length < MIN_TITLE_LENGTH) {
    title.setCustomValidity('Заголовок меньше 30 символов.');
  } else if (title.value.length >= MAX_TITLE_LENGTH) {
    title.setCustomValidity('Заголовок не должен превышать 100 символов.');
  } else {
    title.setCustomValidity('');
  }
};

price.onchange = () => {
  if (price.value < MIN_PRICE) {
    price.setCustomValidity('Цена за ночь не меньше 1000');
  } else if (price.value >= MAX_PRICE) {
    price.setCustomValidity('Цена за ночь не больше 1 000 000.');
  } else {
    price.setCustomValidity('');
  }
};

type.onchange = () => {
  price.placeholder = PRICE_FOR_NIGHT[type.value];
  price.min = PRICE_FOR_NIGHT[type.value];
};

room.onchange = () => {
  if (room.value === '100' && capacity.value !== '0') {
    room.setCustomValidity('Комнаты не для гостей');
  } else if (room.value < capacity.value) {
    room.setCustomValidity('Комнат меньше, чем гостей');
  } else if (room.value === '100' && capacity.value === '0') {
    room.setCustomValidity('');
  } else if (room.value === capacity.value || room.value > capacity.value) {
    room.setCustomValidity('');
  }
};

capacity.onchange = () => {
  if (room.value === '100' && capacity.value !== '0') {
    room.setCustomValidity('Комнаты не для гостей');
  } else if (room.value < capacity.value) {
    room.setCustomValidity('Комнат меньше, чем гостей');
  } else if (room.value === '100' && capacity.value === '0') {
    room.setCustomValidity('');
  } else if (room.value === capacity.value || room.value > capacity.value) {
    room.setCustomValidity('');
  }
};

// submit.addEventListener('click', (evt) => {
//   evt.preventDefault();
//   const actualDisplay = getComputedStyle(success).display;
//   if (actualDisplay === 'none') {
//     success.style.display = 'block';
//   }
// });

export const disableForm = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  for (formElement of formElements) {
    formElement.classList.add('disabled');
  }

  for (mapFiltersElement of mapFiltersElements) {
    mapFiltersElement.classList.add('disabled');
  }

  mapFiltersFieldset.classList.add('disabled');
};

export const enableForm = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  for (formElement of formElements) {
    formElement.classList.remove('disabled');
  }

  for (mapFiltersElement of mapFiltersElements) {
    mapFiltersElement.classList.remove('disabled');
  }

  mapFiltersFieldset.classList.remove('disabled');
};

disableForm();
enableForm();
