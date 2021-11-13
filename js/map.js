import {TOKYO_COORDS, MAIN_PIN_MARKER, MAIN_PIN_ICON} from './model.js';
import {getOffer} from './card.js';
import {enableForm, address} from './form.js';
import {REFERENCE, MAP_ZOOM} from './constants.js';

const map = L.map('map-canvas')
  .on('load', () => {
    address.value = `${TOKYO_COORDS.LG}, ${TOKYO_COORDS.LN}`;
  })
  .setView({
    lat: TOKYO_COORDS.LG,
    lng: TOKYO_COORDS.LN,
  }, MAP_ZOOM);

const layer = () => L.tileLayer(
  REFERENCE,
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: MAIN_PIN_MARKER.URL,
  iconSize: [MAIN_PIN_MARKER.WIDTH, MAIN_PIN_MARKER.HEIGHT],
  iconAnchor: [MAIN_PIN_MARKER.MIDDLE, MAIN_PIN_MARKER.HEIGHT],
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

mainPinMarker.on('move', (evt) => {
  const coordinatesOfPlace = evt.target.getLatLng();
  address.value = `${coordinatesOfPlace.lat.toFixed(5)} ${coordinatesOfPlace.lng.toFixed(5)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const showData = ((data) => {
  data.forEach((point) => {

    const lat = point.location.lat;
    const lng = point.location.lng;

    const icon = L.icon({
      iconUrl: MAIN_PIN_ICON.URL,
      iconSize: [MAIN_PIN_ICON.WIDTH, MAIN_PIN_ICON.HEIGHT],
      iconAnchor: [MAIN_PIN_ICON.MIDDLE, MAIN_PIN_ICON.HEIGHT],
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
  enableForm();
});

const resetMarkersGroups = () => {
  markerGroup.clearLayers();
};

const resetMap = () => {
  resetMarkersGroups();
  mainPinMarker.setLatLng({
    lat: TOKYO_COORDS.LG,
    lng: TOKYO_COORDS.LN,
  });
  map.setView({
    lat: TOKYO_COORDS.LG,
    lng: TOKYO_COORDS.LN,
  }, MAP_ZOOM);
};

layer();

export {mainPinMarker, showData, resetMap, map, resetMarkersGroups};
