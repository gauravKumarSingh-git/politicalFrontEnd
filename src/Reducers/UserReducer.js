
export const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'fetchUser' : 
            return {...state, ...action.payload}
        case 'updateUser' :
            return action.payload
        case 'deleteUser' : 
            return {}
        default : 
            return state; 
    }
}

const initialState = {
    users : []
}

export const allUserReducer = (state = initialState, action) => {
    switch(action.type){
        case 'fetchAll' :
            return {...state, users : action.payload}
        default : 
            return state;
    }
}

export const toBeUpdatedReducer = (state = {}, action) => {
    switch(action.type){
        case 'setToBeUpdated' : 
            return action.payload;
        default : 
            return state;
    }
}
