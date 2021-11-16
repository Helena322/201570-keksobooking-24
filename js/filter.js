import { showData, resetMarkersGroups } from "./map.js";
import {
  SIMILAR_DATA_COUNT,
  DEFAULT_GUEST_ZERO,
  DEFAULT_ANY,
} from "./constants.js";
import { PRICE, FILTER_TYPES } from "./model.js";
import { debounce } from "./utils.js";


const mapFilters = document.querySelector(".map__filters");
const filters = mapFilters.querySelectorAll("select");
const type = mapFilters.querySelector('[name="housing-type"]');
const price = mapFilters.querySelector('[name="housing-price"]');
const rooms = mapFilters.querySelector('[name="housing-rooms"]');
const guests = mapFilters.querySelector('[name="housing-guests"]');
const features = mapFilters.querySelectorAll('[name="features"]');
let offersData = [];

const PRICE_CHOICE = {
  [FILTER_TYPES.low]: (elementOfData) =>
    elementOfData.offer.price < PRICE.min,

  [FILTER_TYPES.middle]: (elementOfData) =>
    elementOfData.offer.price >= PRICE.min &&
    elementOfData.offer.price <= PRICE.middle,

  [FILTER_TYPES.high]: (elementOfDada) =>
    elementOfDada.offer.price > PRICE.middle || price.value === DEFAULT_ANY,

  [DEFAULT_ANY]: () => true,
};

const checkGuests = (elementOfData) =>
  elementOfData.offer.guests === Number(guests.value) ||
  guests.value === DEFAULT_ANY ||
  guests.value === DEFAULT_GUEST_ZERO;

const checkFeatures = (elementOfData) => {
  const featuresChecked = [
    ...document.querySelectorAll('[name="features"]:checked'),
  ].map((checkBoxElement) => checkBoxElement.value);

  return featuresChecked.every((features) =>
    elementOfData.offer?.features?.includes(features)
  );
};

const checkRooms = (elementOfData) =>
  elementOfData.offer.rooms === Number(rooms.value) ||
  rooms.value === DEFAULT_ANY;

const checkPrice = (elementOfData) => (PRICE_CHOICE[price.value] || PRICE_CHOICE[DEFAULT_ANY])(elementOfData);

const checkType = (elementOfDada) =>
elementOfDada.offer.type === type.value ||
type.value === DEFAULT_ANY;

const showFilteredData = () => {
  resetMarkersGroups();

  showData(
    offersData
      .filter((offer) =>
        [checkFeatures, checkGuests, checkPrice, checkRooms, checkType].every(
          (filter) => filter(offer)
        )
      )
      .slice(0, SIMILAR_DATA_COUNT)
  );
};

const initFilter = (data) => {
  const onChangeFilter = debounce(showFilteredData, 500);
  offersData = data;
  const getFilterValue = (filterElement) => {
    filterElement.addEventListener("change", onChangeFilter);
  };

  filters.forEach((element) => {
    getFilterValue(element);
  });

  features.forEach((element) => {
    getFilterValue(element);
  });

  showFilteredData();
};

export { initFilter };
