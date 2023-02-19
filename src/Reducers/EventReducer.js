const event = {
    eventName: "",
    description: "",
    location: "",
    date: "",
    startTime: "",
    endTime: "",
}

const eventReducer = (state = event, action) => {
    switch(action.type){
        case 'setEvent' : 
            return action.payload;
        default : 
            return state;
    }
}

export default eventReducer;