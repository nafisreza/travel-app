// locationReducers.ts

const initialState = {
	visaCountry: { countryCode: 'USA', country: 'United States', city: 'New York' },
	nationality: { countryCode: 'BD', country: 'Bangladesh', city: 'Dhaka' },
	from: { countryCode: 'BD', country: 'Bangladesh', city: 'Dhaka' },
	to: { countryCode: 'THAI', country: 'Thailand', city: 'Bangkok' },
  };
  
  const locationReducers = (state = initialState, action: any) => {
	switch (action.type) {
	  case 'SET_VISA_COUNTRY':
		return { ...state, visaCountry: action.payload };
	  case 'SET_NATIONALITY':
		return { ...state, nationality: action.payload };
	  case 'SET_FROM':
		return { ...state, from: action.payload };
	  case 'SET_TO':
		return { ...state, to: action.payload };
	  default:
		return state;
	}
  };
  
  export default locationReducers;
  