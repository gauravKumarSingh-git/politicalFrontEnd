import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import eventReducer from "./EventReducer";

const allReducers = combineReducers ({
    user : userReducer, 
    event: eventReducer
})

export default allReducers;

