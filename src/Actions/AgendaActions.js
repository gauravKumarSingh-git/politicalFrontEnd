import axios from "axios";

export const setAgenda = (agenda) => 
    function (dispatch){
        dispatch({type: 'setAgenda', payload: agenda});
    };

export const fetchAgendas = () => 
    async function (dispatch) {
        await axios.get('http://localhost:8080/api/getAgendas')
        .then((res) => {
            dispatch({type:'fetchAgendas', payload: res.data})
        })
        .catch((err) => console.log(err));
    }

// export const deleteAgenda = (agenda) => 
//     async function (dispatch) {
//         await axios.delete(`http://localhost:8080/api/${agenda.agendaId}`)
//         .then((res) => {
//             dispatch({type: 'deleteAgenda', payload: agenda.agendaId})
//         })
//     }
