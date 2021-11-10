import {FILE_TYPES} from './model.js';
import {AVATAR_SRC} from './constants.js';

const fileChooserAvatar = document.querySelector('.ad-form__field input[type=file]');
const fileChooserPhoto = document.querySelector('.ad-form__upload input[type=file]');
const previewAvatar = document.querySelector('.ad-form-header__preview').querySelector('img');
const previewPhoto = document.querySelector('.ad-form__photo');

fileChooserAvatar.addEventListener('change', () => {
  const file = fileChooserAvatar.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => (
    fileName.endsWith(it)
  ));

  if (matches) {
    previewAvatar.src = URL.createObjectURL(file);
  }
});

fileChooserPhoto.addEventListener('change', () => {
  const file = fileChooserPhoto.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => (
    fileName.endsWith(it)
  ));

  if (matches) {
    const photoItem = document.createElement('img');
    photoItem.width = 70;
    photoItem.height = 70;
    photoItem.src = URL.createObjectURL(file);
    previewPhoto.appendChild(photoItem);
  }
});

const clearAvatarImage = () => {
  previewAvatar.src = AVATAR_SRC;
  while (previewPhoto.lastElementChild) {
    previewPhoto.removeChild(previewPhoto.lastElementChild);
  }
};

export {clearAvatarImage};
