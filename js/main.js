import {SIMILAR_OFFERS_COUNT} from './data.js';
import {getOffers} from './util.js';
import './card.js';
import './form.js';
import './map.js';

const similarOffers = Array.from({length: SIMILAR_OFFERS_COUNT}, getOffers);
similarOffers;
