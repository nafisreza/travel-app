// locationReducers.ts

const initialState = {
    visaCountry: { countryCode: '', country: '', city: '' },
    nationality: { countryCode: '', country: '', city: '' },
  };
  
  const locationReducers = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_VISA_COUNTRY':
        return { ...state, visaCountry: action.payload };
      case 'SET_NATIONALITY':
        return { ...state, nationality: action.payload };
      default:
        return state;
    }
  };
  
  export default locationReducers;
  