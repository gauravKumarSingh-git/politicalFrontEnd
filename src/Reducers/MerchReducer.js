const initialState = {
    merchs: [],
    total: 0
}

const merchReducer = (state = initialState, action) => {
    switch(action.type){
        case 'addMerch': {
            const newMerchs = [...state.merchs, action.payload]
            const newTotal = state.total + action.payload.price;
            return {...state, merchs : newMerchs, total : newTotal};
        }
        case 'removeMerch' :{
            const newMerchs = state.merchs.filter((m) => m.itemId != action.payload.itemId);
            const newTotal = state.total - action.payload.price;
            return {...state, merchs: newMerchs, total : newTotal}
        }
        default:
            return state;
    }
}

export default merchReducer;