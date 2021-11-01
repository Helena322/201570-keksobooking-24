import {showData} from './map.js';

const createLoader = async (onError) => {
  try {
    const response = await fetch(
      'https://24.javascript.pages.academy/keksobooking/data',
      {
        method: 'POST',
        credentials: 'same-origin',
      });

    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  } catch (err) {
    onError(err);
  }
};

fetch('https://24.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((data) => {
    showData(data);
  });

export {createLoader};
