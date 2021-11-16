import {SIMILAR_DATA_COUNT} from './constants.js';
import {map} from './map.js';
import {getData} from './request.js';
import {initFilter} from './filter.js';
import {disableForm, enableForm} from './form.js';
import {creatErrorGetMessage} from './notification.js';

disableForm();

map.whenReady(() => {
  enableForm();
  getData(
    (data) => initFilter((data.slice(0, SIMILAR_DATA_COUNT))),
    () => creatErrorGetMessage('Ошибка на стороне сервера. Попробуйте позже'),
  );
});
