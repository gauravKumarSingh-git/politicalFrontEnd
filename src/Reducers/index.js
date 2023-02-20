import { combineReducers } from "redux";
import { allUserReducer, toBeUpdatedReducer, userReducer } from "./UserReducer";
import eventReducer from "./EventReducer";
import { merchReducer, toUpdateMerchReducer } from "./MerchReducer";
import { agendaReducer, agendasRed } from "./AgendaReducer";

const allReducers = combineReducers ({
    user : userReducer, 
    users: allUserReducer,
    toBeUpdate : toBeUpdatedReducer,
    event: eventReducer,    
    merch: merchReducer,
    toUpdateMerch : toUpdateMerchReducer,
    agenda : agendaReducer,
    agendas : agendasRed
})

export default allReducers;

