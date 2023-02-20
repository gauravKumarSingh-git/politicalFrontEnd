export const addMerch = (merch) => 
    function (dispatch) {
        dispatch({type: 'addMerch', payload: merch})
    }

export const removeMerch = (merch) => 
    function(dispatch) {
        dispatch({type : 'removeMerch', payload : merch})
    }

export const toUpdateMerch = (merch) => 
    function(dispatch) {
        dispatch({type: 'updateMerch', payload : merch})
    }