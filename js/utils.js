import {TIME_OUT_DELAY} from './constants.js';

const debounce = (callback, timeoutDelay = TIME_OUT_DELAY) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {debounce};
