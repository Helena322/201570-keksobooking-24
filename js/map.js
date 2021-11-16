import { TOKYO_COORDS, MAIN_PIN_MARKER, MAIN_PIN_ICON } from './model.js';
import { getOffer } from './card.js';
import { enableForm, address } from './form.js';
import { REFERENCE, MAP_ZOOM, FIXED_СOORDINATES} from './constants.js';

const appMap = {
  map: null,
  mainPinIcon: null,
  mainPinMarker: null,
  markerGroup: null,
};

const createMap = (callback) => {
  appMap.map = L.map('map-canvas')
    .on('load', () => {
      address.value = `${TOKYO_COORDS.LG}, ${TOKYO_COORDS.LN}`;
      callback();
    })
    .setView(
      {
        lat: TOKYO_COORDS.LG,
        lng: TOKYO_COORDS.LN,
      },
      MAP_ZOOM,
    );

  const layer = () =>
    L.tileLayer(REFERENCE, {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(appMap.map);

  appMap.mainPinIcon = L.icon({
    iconUrl: MAIN_PIN_MARKER.URL,
    iconSize: [MAIN_PIN_MARKER.WIDTH, MAIN_PIN_MARKER.HEIGHT],
    iconAnchor: [MAIN_PIN_MARKER.MIDDLE, MAIN_PIN_MARKER.HEIGHT],
  });

  appMap.mainPinMarker = L.marker(
    {
      lat: TOKYO_COORDS.LG,
      lng: TOKYO_COORDS.LN,
    },

    {
      draggable: true,
      icon: appMap.mainPinIcon,
    },
  );

  appMap.mainPinMarker.addTo(appMap.map);

  appMap.mainPinMarker.on('move', (evt) => {
    const coordinatesOfPlace = evt.target.getLatLng();
    address.value = `${coordinatesOfPlace.lat.toFixed(
      FIXED_СOORDINATES,
    )} ${coordinatesOfPlace.lng.toFixed(FIXED_СOORDINATES)}`;
  });

  appMap.markerGroup = L.layerGroup().addTo(appMap.map);

  layer();
};

const showData = (data) => {
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

    marker.addTo(appMap.markerGroup).bindPopup(() => getOffer(point));
  });
  enableForm();
};

const resetMarkersGroups = () => {
  appMap.markerGroup.clearLayers();
};

const resetMap = () => {
  resetMarkersGroups();
  appMap.mainPinMarker.setLatLng({
    lat: TOKYO_COORDS.LG,
    lng: TOKYO_COORDS.LN,
  });
  appMap.map.setView(
    {
      lat: TOKYO_COORDS.LG,
      lng: TOKYO_COORDS.LN,
    },
    MAP_ZOOM,
  );
};

export { createMap, showData, resetMap, resetMarkersGroups };
