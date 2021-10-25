import {POINTS} from './data.js';
import {enableForm} from './form.js';
export const TOKYO_LG = 35.6895000;
export const TOKYO_LN = 139.6917100;
export const adress = document.querySelector('#address');
adress.value = `${TOKYO_LG}, ${TOKYO_LN}`;

export const map = L.map('map-canvas')
  .on('load', () => {
    enableForm();
  })

  .setView({
    lat: 35.6895000,
    lng: 139.6917100,
  }, 15);

export const layer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

export const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

export const mainPinMarker = L.marker(
  {
    lat: 35.6895000,
    lng: 139.6917100,
  },

  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const lll = evt.target.getLatLng();
  adress.value = `${lll.lat.toFixed(6)} ${lll.lng.toFixed(6)}`;
});

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#card').content.querySelector('.popup');
  const popupElement = balloonTemplate.cloneNode(true);

  popupElement.querySelector('.popup__title').textContent = point.title;
  popupElement.querySelector('.popup__text--address').textContent = point.adress;

  return popupElement;
};

// const createCustomPopup = ({lat, lng, title, adress}) => `<section class="balloon">
//   <h3 class="balloon__title">${title}</h3>
//   <p class="popup__text--address">Адресс: ${adress}</p>
// </section>`;

POINTS.forEach((point) => {
  const {lat, lng} = point;

  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [26, 52],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(createCustomPopup(point));
});
