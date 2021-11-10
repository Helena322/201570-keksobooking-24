import {API, formFailKey} from './constants.js';

const getData = (onSuccess) => {
  fetch(`${API}/data`)
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    API,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      }
    })
    .catch(() => {
      onFail(formFailKey);
    });
};

export {sendData, getData};
