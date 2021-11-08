import {getData} from './load.js';
import {showData, resetMap} from './map.js';
import {SIMILAR_DATA_COUNT} from './model.js';


const mapFilters = document.querySelector('.map__filters');
const filters = mapFilters.querySelectorAll('select');
const type = mapFilters.querySelector('[name="housing-type"]');
const price = mapFilters.querySelector('[name="housing-price"]');
const rooms = mapFilters.querySelector('[name="housing-rooms"]');
const guests = mapFilters.querySelector('[name="housing-guests"]');
const feature = mapFilters.querySelectorAll('[name="features"]');

const DEFAULT_ANY = 'any';
const DEFAULT_GUEST_ZERO = 0;

const PRICE = {
  min: 10000,
  middle: 50000,
};

const RERENDER_DELAY = 500;

export const getFilter = (_.debounce((data) => {
  const dataList = data;

  const getFilterValue = (filterElement) => {
    filterElement.onchange = () => {
      resetMap();

      const filtereCheckBoxes = () => {
        const featuresChecked = document.querySelectorAll('[name="features"]:checked');
        const checkedValues = Array.from(featuresChecked).map((checkBoxElement) => checkBoxElement.value);
        return dataList.filter((elementOfDada) => {
          if (elementOfDada.offer.features) {
            return checkedValues.every((features) => elementOfDada.offer.features.includes(features));
          }
        });
      };

      const filteredGuests = () => (
        filtereCheckBoxes().filter((elementOfDada) => elementOfDada.offer.guests === Number(guests.value) || guests.value === DEFAULT_ANY || guests.value === DEFAULT_GUEST_ZERO)
      );

      const filteredRooms = () => (
        filteredGuests().filter((elementOfDada) => elementOfDada.offer.rooms === Number(rooms.value) || rooms.value === DEFAULT_ANY)
      );

      const filteredPrice = () => {
        if (price.value === 'low') {
          return filteredRooms().filter((elementOfDada) => elementOfDada.offer.price < PRICE.min);
        } else if (price.value === 'middle') {
          return filteredRooms().filter((elementOfDada) => elementOfDada.offer.price >= PRICE.min && elementOfDada.offer.price <= PRICE.middle);
        } else if (price.value === 'high') {
          return filteredRooms().filter((elementOfDada) => elementOfDada.offer.price > PRICE.middle || price.value === DEFAULT_ANY);
        } else if (price.value === DEFAULT_ANY) {
          return filteredRooms();
        }
      };

      const filteredType = () => (
        filteredPrice().filter((elementOfDada) => elementOfDada.offer.type === type.value || type.value === DEFAULT_ANY)
      );

      showData(filteredType().slice(0, SIMILAR_DATA_COUNT));
    };

  };

  filters.forEach((element) => {
    getFilterValue(element);
  });

  feature.forEach((element) => {
    getFilterValue(element);
  });

}, RERENDER_DELAY));


getData((data) => {
  showData(data.slice(0, SIMILAR_DATA_COUNT));
  getFilter(data);
});
