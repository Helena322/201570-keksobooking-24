import {showData, resetMarkersGroups} from './map.js';
import {SIMILAR_DATA_COUNT, DEFAULT_GUEST_ZERO, DEFAULT_ANY, TIME_OUT_DELAY} from './constants.js';
import {PRICE, FILTER_TYPES} from './model.js';

const mapFilters = document.querySelector('.map__filters');
const filters = mapFilters.querySelectorAll('select');
const type = mapFilters.querySelector('[name="housing-type"]');
const price = mapFilters.querySelector('[name="housing-price"]');
const rooms = mapFilters.querySelector('[name="housing-rooms"]');
const guests = mapFilters.querySelector('[name="housing-guests"]');
const feature = mapFilters.querySelectorAll('[name="features"]');

const initFilter = (_.debounce((data) => {
  const dataList = data;

  const getFilterValue = (filterElement) => {
    filterElement.onchange = () => {
      resetMarkersGroups ();

      const getFiltereCheckBoxes = () => {
        const featuresChecked = document.querySelectorAll('[name="features"]:checked');
        const checkedValues = Array.from(featuresChecked).map((checkBoxElement) => checkBoxElement.value);
        return dataList.filter((elementOfDada) => {
          if (elementOfDada.offer.features) {
            return checkedValues.every((features) => elementOfDada.offer.features.includes(features));
          }
        });
      };

      const getFilteredGuests = () => (
        getFiltereCheckBoxes().filter((elementOfDada) => elementOfDada.offer.guests === Number(guests.value) || guests.value === DEFAULT_ANY || guests.value === DEFAULT_GUEST_ZERO)
      );

      const getFilteredRooms = () => (
        getFilteredGuests().filter((elementOfDada) => elementOfDada.offer.rooms === Number(rooms.value) || rooms.value === DEFAULT_ANY)
      );

      const getFilteredPrice = () => {
        if (price.value === FILTER_TYPES.low) {
          return getFilteredRooms().filter((elementOfDada) => elementOfDada.offer.price < PRICE.min);
        } else if (price.value === FILTER_TYPES.middle) {
          return getFilteredRooms().filter((elementOfDada) => elementOfDada.offer.price >= PRICE.min && elementOfDada.offer.price <= PRICE.middle);
        } else if (price.value === FILTER_TYPES.high) {
          return getFilteredRooms().filter((elementOfDada) => elementOfDada.offer.price > PRICE.middle || price.value === DEFAULT_ANY);
        } else if (price.value === DEFAULT_ANY) {
          return getFilteredRooms();
        }
      };

      const getFilteredType = () => (
        getFilteredPrice().filter((elementOfDada) => elementOfDada.offer.type === type.value || type.value === DEFAULT_ANY)
      );

      showData(getFilteredType().slice(0, SIMILAR_DATA_COUNT));
    };

  };

  filters.forEach((element) => {
    getFilterValue(element);
  });

  feature.forEach((element) => {
    getFilterValue(element);
  });

}, TIME_OUT_DELAY));

export {initFilter};
