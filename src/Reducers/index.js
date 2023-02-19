import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import eventReducer from "./EventReducer";
import merchReducer from "./MerchReducer";

const allReducers = combineReducers ({
    user : userReducer, 
    event: eventReducer,    
    merch: merchReducer
})

export default allReducers;

