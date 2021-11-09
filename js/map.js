import {TOKYO_COORDS} from './model.js';
import {getOffer} from './card.js';
import {enableForm, address} from './form.js';

address.value = `${TOKYO_COORDS.LG}, ${TOKYO_COORDS.LN}`;

const map = L.map('map-canvas')
  .on('load', () => {
    enableForm();
  })

  .setView({
    lat: TOKYO_COORDS.LG,
    lng: TOKYO_COORDS.LN,
  }, 13);

const layer = () => L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TOKYO_COORDS.LG,
    lng: TOKYO_COORDS.LN,
  },

  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  const coordinatesOfPlace = evt.target.getLatLng();
  address.value = `${coordinatesOfPlace.lat.toFixed(5)} ${coordinatesOfPlace.lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const showData = ((data) => {
  data.forEach((point) => {

    const lat = point.location.lat;
    const lng = point.location.lng;

    const icon = L.icon({
      iconUrl: '../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
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
      .addTo(markerGroup)
      .bindPopup(() => getOffer(point));
  });
});

const resetMap = () => {
  markerGroup.clearLayers();
};

layer();

export {mainPinMarker, showData, resetMap};
