const form = document.querySelector('.ad-form');
let formElement = form.querySelector('fieldset');
const formElements = form.querySelectorAll('fieldset');

const mapFilters = document.querySelector('.map__filters');
let mapFiltersElement = mapFilters.querySelector('select');
const mapFiltersElements = mapFilters.querySelectorAll('select');
const mapFiltersFieldset = mapFilters.querySelector('fieldset');

export const getFormDisabled = () => {
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

export const getFormEnabled = () => {
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

getFormDisabled();
getFormEnabled();
