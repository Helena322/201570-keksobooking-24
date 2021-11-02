import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, PRICE_FOR_NIGHT, ROOM_FOR_GIESTS} from './data.js';
import {mainPinMarker} from './map.js';
import {showAlert} from './util.js';

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
const options = capacity.querySelectorAll('option');
const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');
const button = form.querySelector('.ad-form__submit');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');

capacity.value = ROOM_FOR_GIESTS[1];
price.placeholder = PRICE_FOR_NIGHT[type.value];
price.min = PRICE_FOR_NIGHT[type.value];

title.oninput = () => {
  if (title.value.length < MIN_TITLE_LENGTH) {
    title.setCustomValidity('Заголовок меньше 30 символов.');
  } else if (title.value.length > MAX_TITLE_LENGTH) {
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
  const values = Object.values(ROOM_FOR_GIESTS[room.value]);

  options.forEach((option) => {
    option.disabled = true;
  });

  options.forEach((option) => {
    for (let i = 0; i < room.value; i++) {
      if (Number(option.value) === values[i]) {
        option.disabled = false;
        capacity.value = option.value;
      }
    }
  });
};

timein.addEventListener('change', () => {
  timeout.value = timein.value;
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

button.addEventListener('click', () => {

  if (!price.value || !title.value || title.value.length < MIN_TITLE_LENGTH || title.value.length >= MAX_TITLE_LENGTH) {
    const error = errorMessage.cloneNode(true);
    document.body.appendChild(error);
    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        document.body.removeChild(error);
      }
    });
    error.addEventListener('click', () => {
      document.body.removeChild(error);
    });
  } else {
    const success = successMessage.cloneNode(true);
    document.body.appendChild(success);
    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        document.body.removeChild(success);
      }
    });
    success.addEventListener('click', () => {
      document.body.removeChild(success);
      title.value = '';
      capacity.value = ROOM_FOR_GIESTS[1];
      room.value = capacity.value;
      type.value = 'flat';
      price.value = '';
      price.placeholder = PRICE_FOR_NIGHT[type.value];
      price.min = PRICE_FOR_NIGHT[type.value];
      mainPinMarker.setLatLng({
        lat: 35.6895000,
        lng: 139.6917100,
      });
    });
  }
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);

  fetch(
    'https://24.javascript.pages.academy/keksobooking/data',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        showAlert('Все оk');
      } else {
        showAlert('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
});

disableForm();
