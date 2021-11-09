import {FILE_TYPES} from './model.js';

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
    previewPhoto.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
    previewPhoto.style.backgroundRepeat = 'no-repeat';
    previewPhoto.style.backgroundSize = '100%';
  }
});

const clearAvatarImage = () => {
  previewAvatar.src = 'img/muffin-grey.svg';
  previewPhoto.style.backgroundImage = '';
};


export {clearAvatarImage};
