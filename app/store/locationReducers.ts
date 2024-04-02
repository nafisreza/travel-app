const initialState = {
	visaCountry: null,
	nationality: null,
	from: null,
	to: null,
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
  