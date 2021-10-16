export const form = document.querySelector('.ad-form');
export const formElement = document.querySelector('.ad-form').querySelector('fieldset');
export const formElements = document.querySelector('.ad-form').querySelectorAll('fieldset');

export const mapFilters = document.querySelector('.map__filters');
export const mapFiltersElement = document.querySelector('.map__filters').querySelector('select');
export const mapFiltersElements = document.querySelector('.map__filters').querySelectorAll('select');
export const mapFiltersFieldset = document.querySelector('.map__filters').querySelector('fieldset');

export const t1 = () => {
  form.classList.add('ad-form--disabled');
  mapFilters.classList.add('map__filters--disabled');

  for (let formElement of formElements) {
    formElement.classList.add('disabled');
  }

  for (let mapFiltersElement of mapFiltersElements) {
    mapFiltersElement.classList.add('disabled');
  }

  mapFiltersFieldset.classList.add('disabled');
};

export const t2 = () => {
  form.classList.remove('ad-form--disabled');
  mapFilters.classList.remove('map__filters--disabled');

  for (let formElement of formElements) {
    formElement.classList.remove('disabled');
  }

  for (let mapFiltersElement of mapFiltersElements) {
    mapFiltersElement.classList.remove('disabled');
  }

  mapFiltersFieldset.classList.remove('disabled');
};
