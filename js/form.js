import {SIMILAR_DATA_COUNT} from './constants.js';
import {titleMinKey, titleMaxKey} from './messages.js';
import {TITLE_LENGTH, PRICE_FOR_NIGHT, ROOM_FOR_GIESTS, TOKYO_COORDS, HOUSING_TYPES, NOTIFICATION_TYPES} from './model.js';
import {showData, resetMap} from './map.js';
import {sendData, getData} from './request.js';
import {clearAvatarImage} from './avatar.js';
import {showNotification} from './notification.js';

const form = document.querySelector('.ad-form');
const formElements = form.querySelectorAll('fieldset');

const address = document.querySelector('#address');
const mapFilters = document.querySelector('.map__filters');
const mapFiltersSelects = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelector('fieldset');
const title = form.querySelector('#title');
const price = form.querySelector('#price');
const type = form.querySelector('#type');
const room = form.querySelector('#room_number');
const capacity = form.querySelector('#capacity');
const options = capacity.querySelectorAll('option');
const timein = form.querySelector('#timein');
const timeout = form.querySelector('#timeout');
const reset = document.querySelector('.ad-form__reset');

capacity.value = ROOM_FOR_GIESTS[1];
price.placeholder = PRICE_FOR_NIGHT[type.value];
price.min = PRICE_FOR_NIGHT[type.value];

title.oninput = () => {
  if (title.value.length < TITLE_LENGTH.MIN) {
    title.setCustomValidity(titleMinKey);
  } else if (title.value.length > TITLE_LENGTH.MAX) {
    title.setCustomValidity(titleMaxKey);
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
    values.forEach((element) => {
      if (element === Number(option.value)) {
        option.disabled = false;
        capacity.value = option.value;
      }
    });
  });
};

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

const disableForm = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  for (const formElement of formElements) {
    formElement.classList.add('disabled');
  }

  for (const mapFiltersSelect of mapFiltersSelects) {
    mapFiltersSelect.classList.add('disabled');
  }

  mapFiltersFieldset.classList.add('disabled');
};

const enableForm = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  for (const formElement of formElements) {
    formElement.classList.remove('disabled');
  }

  for (const mapFiltersSelect of mapFiltersSelects) {
    mapFiltersSelect.classList.remove('disabled');
  }

  options[0].disabled = true;
  options[1].disabled = true;
  options[3].disabled = true;
  mapFiltersFieldset.classList.remove('disabled');
};

const showError = () => {
  showNotification(NOTIFICATION_TYPES.errorPost);
};

const showSuccess = () => {
  mapFilters.reset();
  form.reset();
  resetMap();
  getData((data) => {
    showData(data.slice(0, SIMILAR_DATA_COUNT));
  });
  clearAvatarImage();
  title.value = '';
  capacity.value = ROOM_FOR_GIESTS[1];
  room.value = capacity.value;
  type.value = HOUSING_TYPES.flat;
  price.value = '';
  price.placeholder = PRICE_FOR_NIGHT[type.value];
  price.min = PRICE_FOR_NIGHT[type.value];
  address.value = `${TOKYO_COORDS.LG}, ${TOKYO_COORDS.LN}`;

  showNotification(NOTIFICATION_TYPES.successPost);
};

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  sendData(
    showSuccess,
    showError,
    new FormData(evt.target),
  );
});

reset.addEventListener('click', (evt) => {
  evt.preventDefault();
  mapFilters.reset();
  form.reset();
  resetMap();
  getData((data) => {
    showData(data.slice(0, SIMILAR_DATA_COUNT));
  });
  clearAvatarImage();
  title.value = '';
  capacity.value = ROOM_FOR_GIESTS[1];
  room.value = capacity.value;
  type.value = HOUSING_TYPES.flat;
  price.value = '';
  price.placeholder = PRICE_FOR_NIGHT[type.value];
  price.min = PRICE_FOR_NIGHT[type.value];
  address.value = `${TOKYO_COORDS.LG}, ${TOKYO_COORDS.LN}`;
});

disableForm();

export {address, enableForm};
