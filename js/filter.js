import {getData} from './load.js';
import {showData} from './map.js';
import {SIMILAR_DATA_COUNT} from './model.js';

const mapFilters = document.querySelector('.map__filters');
const filters = mapFilters.querySelectorAll('select');

  // const price = mapFilters.querySelector('[name="housing-price"]');
  // const rooms = mapFilters.querySelector('[name="housing-rooms"]');
  // const guests = mapFilters.querySelector('[name="housing-guests"]');
  // const features = mapFilters.querySelector('.map__features');
let feature = mapFilters.querySelectorAll('[name="features"]');

export const getFilter = (data) => {
  const type = mapFilters.querySelector('[name="housing-type"]');
  const dataList = data;
  let rank = 0;

  const getFilterValue = (element) => {
    element.onchange = () => {
      console.log(type.value);
      if (data[element].feature.element === type.value) {
        console.log(type.value);
      }
    };

  };

  filters.forEach(element => {
    getFilterValue(element);
  });

  feature.forEach(element => {
    getFilterValue(element);
  });

};

getData((data) => {
  showData(data.slice(0, SIMILAR_DATA_COUNT));
  getFilter(data);
});
