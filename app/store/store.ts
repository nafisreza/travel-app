// store.ts

import { legacy_createStore as createStore } from 'redux';
import locationReducers from './locationReducers';

const store = createStore(locationReducers);

export default store;
