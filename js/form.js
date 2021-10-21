import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, PRICE_FOR_NIGHT} from './data.js';

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
const options = capacity.children;
const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');
const button = form.querySelector('.ad-form__submit');

title.oninput = () => {
  if (title.value.length < MIN_TITLE_LENGTH) {
    title.setCustomValidity('Заголовок меньше 30 символов.');
  } else if (title.value.length >= MAX_TITLE_LENGTH) {
    title.setCustomValidity('Заголовок не должен превышать 100 символов.');
  } else {
    title.setCustomValidity('');
  }
};

type.onchange = () => {
  price.placeholder = PRICE_FOR_NIGHT[type.value];
  price.min = PRICE_FOR_NIGHT[type.value];
};

room.onchange = () => {
  if (room.value !== '100') {
    options[2].setAttribute('selected', true);
    options[3].style.display = 'none';
    if (room.value === '3') {
      options[2].style.display = 'block';
      options[1].style.display = 'block';
      options[0].style.display = 'block';
    } else if (room.value === '2') {
      options[2].style.display = 'block';
      options[1].style.display = 'block';
      options[0].style.display = 'none';
    } else if (room.value === '1') {
      options[2].style.display = 'block';
      options[1].style.display = 'none';
      options[0].style.display = 'none';
    }
  } else {
    for (let i = 0; i < 3; i++) {
      options[i].style.display = 'none';
    }
    options[3].style.display = 'block';
    options[3].setAttribute('selected', true);
    options[0].setAttribute('selected', false);
  }
};

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (room.value > capacity.value) {
    button.addEventListener("submit", (event) => {
      event.preventDefault();
      room.setCustomValidity('Комнат меньше, чем гостей.');
    });

  } else {
    room.setCustomValidity('');
    form.submit();
  }
});

button.addEventListener('submit', (event) => {
  event.preventDefault();
  if (room.value > capacity.value) {
    room.setCustomValidity('Комнат меньше, чем гостей.');
  }
  else {
    room.setCustomValidity('');
    form.submit();
  }
});

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
