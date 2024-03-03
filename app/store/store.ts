import { combineReducers, createStore } from 'redux';
import locationReducers from './locationReducers';
import visaTypeReducers from './visaTypeReducers';

const rootReducer = combineReducers({
  location: locationReducers,
  visaType: visaTypeReducers,
});

const store = createStore(rootReducer);

export default store;