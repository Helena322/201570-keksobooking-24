import {postMethod} from './constants.js';
import {API, formFailKey} from './messages.js';
import {showAlert} from './util.js';

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
      method: postMethod,
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
