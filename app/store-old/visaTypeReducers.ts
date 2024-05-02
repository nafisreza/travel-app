const initialState = {
	visaTypes: [],
  };
  
  const visaTypeReducers = (state = initialState, action: any) => {
	switch (action.type) {
	  case 'SET_VISA_TYPES':
		return { ...state, visaTypes: action.payload };
	  default:
		return state;
	}
  };
  
  export default visaTypeReducers;
  