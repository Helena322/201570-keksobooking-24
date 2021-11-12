import {API, POST_METHOD} from './constants.js';
import {formFailKey} from './messages.js';
import {showAlert} from './utils.js';

const getData = (onSuccess) => {
  fetch(`${API}/data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      showAlert('Не удалось получить объявления');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API,
    {
      method: POST_METHOD,
      body,
    },
  )
    .then((response) => {
      if (!response.ok) {
        throw Error('Ошибка');
      }
      onSuccess();
    })
    .catch(() => {
      onFail(formFailKey);
    });
};

export {sendData, getData};
