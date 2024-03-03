// locationReducers.ts

const initialState = {
  visaCountry: { countryCode: "BD", country: "Bangladesh", city: "Dhaka"  },
  nationality: { countryCode: "BD", country: "Bangladesh", city: "Dhaka"  },
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
  