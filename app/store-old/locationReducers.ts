const initialState = {
	visaCountry: null,
	nationality: null,
	departure: null,
	destination: null,
  };
  
  const locationReducers = (state = initialState, action: any) => {
	switch (action.type) {
	  case 'SET_VISA_COUNTRY':
		return { ...state, visaCountry: action.payload };
	  case 'SET_NATIONALITY':
		return { ...state, nationality: action.payload };
	  case 'SET_DEPARTURE':
		return { ...state, from: action.payload };
	  case 'SET_DESTINATION':
		return { ...state, to: action.payload };
	  default:
		return state;
	}
  };
  
  export default locationReducers;
  