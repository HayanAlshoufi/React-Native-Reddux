import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";
// All Reducers // Combine Reducers //Redux Thunk
export default combineReducers({
    counter:counterReducer,
    user:userReducer
})