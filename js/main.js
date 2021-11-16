import {SIMILAR_DATA_COUNT} from './constants.js';
import {createMap, showData} from './map.js';
import {getData} from './request.js';
import {initFilter} from './filter.js';

const getMapLoad = () => {
  getData((data) => {
    initFilter(data);
    showData(data.slice(0, SIMILAR_DATA_COUNT));
  });
};

createMap(getMapLoad);
