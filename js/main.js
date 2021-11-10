import {SIMILAR_DATA_COUNT} from './constants.js';
import {showData} from './map.js';
import {getData} from './request.js';
import {initFilter} from './filter.js';

getData((data) => {
  initFilter(data);
  showData(data.slice(0, SIMILAR_DATA_COUNT));
});
