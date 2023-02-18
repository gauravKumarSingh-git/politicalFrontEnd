import axios from "axios";

export const fetchUser = (user) => 
    function (dispatch){
        dispatch({type: 'fetchUser', payload: user});
    };

export const updateUser = (userId) => 
    async function (dispatch){
        await axios.get(`http://localhost:8080/api/getUser/${userId}`)
        .then((res) => {
            dispatch({type:"updateUser", payload: res.data})
        })
        .catch((err) => console.log(err));
    }

export const deleteUser = () => 
    function (dispatch){
        dispatch({type: 'deleteUser'});
    }

