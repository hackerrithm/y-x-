import { combineReducers } from "redux";
import authenticationReducer from "../../authentication/core/lib/adapter/redux/reducer";


export default combineReducers({
	authenticationReducer,
});