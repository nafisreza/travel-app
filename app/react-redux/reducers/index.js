import { combineReducers } from "redux";
import { visaReducer } from "../../store/visaReducer";

const reducers = combineReducers({
    visa: visaReducer
})

export default reducers;