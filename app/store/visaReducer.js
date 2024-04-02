import { ActionTypes } from "../react-redux/constants/action-types";

const initialState = {
    visa: [
        {
            id: '9aec83ec-4c96-4c7c-aa25-37fa216e8f31',
            title: 'Thailand',
            iso2: 'TH',
            flag: 'th'
          }
    ]
}

export const visaReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ActionTypes.SET_VISA_COUNTRY:
            return state;
        default:
            return state;
    }
}