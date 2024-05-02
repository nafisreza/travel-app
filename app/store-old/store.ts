import { combineReducers, createStore } from 'redux';
import locationReducers from './locationReducers';
import visaTypeReducers from './visaTypeReducers';
import holidayCategoryReducer from './holidayCategoryReducer';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  location: locationReducers,
  visaType: visaTypeReducers,
  holidayCategory: holidayCategoryReducer,
});

const store = createStore(rootReducer);

export default store;
