import {SIMILAR_DATA_COUNT} from './constants.js';
import {showData} from './map.js';
import {getData} from './load.js';
import {getFilteredData} from './filter.js';

getData((data) => {
  showData(data.slice(0, SIMILAR_DATA_COUNT));
  getFilteredData(data);
});
