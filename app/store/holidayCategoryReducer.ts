import { SET_HOLIDAY_CATEGORY } from './holidayCategoryActions';

const initialState = {
  holidayCategory: 'Bachelor Trip', // Set your default category here
};

const holidayCategoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_HOLIDAY_CATEGORY:
      return { ...state, holidayCategory: action.payload };
    default:
      return state;
  }
};

export default holidayCategoryReducer;
