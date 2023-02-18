
const userReducer = (state = {}, action) => {
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

export default userReducer;
