import {getOffer} from './card.js';
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
  adress.value = `${lll.lat.toFixed(5)} ${lll.lng.toFixed(5)}`;
});

const showData = ((data) => {
  data.forEach((point) => {

    const lat = point.location.lat;
    const lng = point.location.lng;

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
      .bindPopup(() => getOffer(point));
  });
});

export { showData };
