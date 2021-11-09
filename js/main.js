import {SIMILAR_DATA_COUNT} from './model.js';
import {showData} from './map.js';
import {getData} from './load.js';
import {getFilter} from './filter.js';

getData((data) => {
  showData(data.slice(0, SIMILAR_DATA_COUNT));
  getFilter(data);
});
