import { combineReducers, createStore } from 'redux';
import locationReducers from './locationReducers';
import visaTypeReducers from './visaTypeReducers';
import holidayCategoryReducer from './holidayCategoryReducer';

const rootReducer = combineReducers({
  location: locationReducers,
  visaType: visaTypeReducers,
  holidayCategory: holidayCategoryReducer,
});

const store = createStore(rootReducer);

export default store;