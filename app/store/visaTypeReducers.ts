const initialState = {
    visaType: 'Travel Visa',
  };
  
  const visaTypeReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VISA_TYPE':
        return { ...state, visaType: action.payload };
      default:
        return state;
    }
  };
  
  export default visaTypeReducers;
  