export const setEvent = (event) => 
    function (dispatch){
        dispatch({type: 'setEvent', payload: event});
    };