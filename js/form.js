import {MIN_TITLE_LENGTH, MAX_TITLE_LENGTH, PRICE_FOR_NIGHT, ROOM_FOR_GIESTS} from './data.js';

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
<<<<<<< HEAD
options[2].setAttribute('selected', true);
=======
const button = form.querySelector('.ad-form__submit');
// const success = document.querySelector('#success').content.querySelector('.success');
// const error = document.querySelector('#error').content.querySelector('.error');

capacity.value = ROOM_FOR_GIESTS[1];
price.placeholder = PRICE_FOR_NIGHT[type.value];
>>>>>>> 040424e157d8fc1c527a1e2a60be79f688307a99
price.min = PRICE_FOR_NIGHT[type.value];

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
<<<<<<< HEAD
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
=======
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
>>>>>>> 040424e157d8fc1c527a1e2a60be79f688307a99
    }
  });
};

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

<<<<<<< HEAD
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

timein.addEventListener('change', () => {
  timeout.value = timein.value;
});

=======
>>>>>>> 040424e157d8fc1c527a1e2a60be79f688307a99
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

button.addEventListener('click', (event) => {
  event.preventDefault();

  if (!price.value || !title.value) {
    const errorMessage = document.querySelector('#error').content.querySelector('.error');
    const error = errorMessage.cloneNode(true);
    document.body.appendChild(error);
    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        document.body.removeChild(error);
      }
    });
  } else {
    const successMessage = document.querySelector('#success').content.querySelector('.success');
    const success = successMessage.cloneNode(true);
    document.body.appendChild(success);
    document.addEventListener('keydown', (evt) => {
      if (evt.keyCode === 27) {
        document.body.removeChild(success);
      }
    });
  }
});

disableForm();
