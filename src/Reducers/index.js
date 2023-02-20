import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import eventReducer from "./EventReducer";
import merchReducer from "./MerchReducer";
import { agendaReducer, agendasRed } from "./AgendaReducer";

const allReducers = combineReducers ({
    user : userReducer, 
    event: eventReducer,    
    merch: merchReducer,
    agenda : agendaReducer,
    agendas : agendasRed
})

export default allReducers;

