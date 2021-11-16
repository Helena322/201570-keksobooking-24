import {ALERT_SHOW_TIME} from './constants.js';
import {getFailKey} from './messages.js';
import {NOTIFICATION_TYPES, checkIsEscape} from './model.js';

const NOTIFICATIONS_MESSAGES = {
  [NOTIFICATION_TYPES.errorPost]: document.querySelector('#error').content.querySelector('.error'),
  [NOTIFICATION_TYPES.successPost]: document.querySelector('#success').content.querySelector('.success'),
};

const creatErrorGetMessage = () => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = getFailKey;
  return alertContainer;
};

const showErrorGet = () => {
  const notification = creatErrorGetMessage();
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, ALERT_SHOW_TIME);
};

const showNotification = (type) => {
  if (type === NOTIFICATION_TYPES.errorGet) {
    showErrorGet();
    return;
  }

  const notification = NOTIFICATIONS_MESSAGES[type];
  document.body.append(notification);

  const onKeydown = ({key}) => {
    if (checkIsEscape(key)) {
      onClickNotification();
    }
  };

  const onClickNotification = () => {
    document.removeEventListener('keydown', onKeydown);
    notification.remove();
  };

  notification.addEventListener('click', onClickNotification);
  document.addEventListener('keydown', onKeydown);
};

export {showNotification, creatErrorGetMessage};
