export const agendaReducer = (state = {}, action) => {
    switch(action.type){
        case 'setAgenda' : 
            return action.payload;
        default : 
            return state;
    }
}

const initialState = {
    agendas : []
}

export const agendasRed = (state = initialState, action) =>{
    switch(action.type){
        case 'fetchAgendas' : {
            return {...state, agendas : action.payload};
        }
        default : 
            return state;
    }
}

export default agendaReducer;