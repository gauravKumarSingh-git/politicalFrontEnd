import React, { useEffect } from 'react'
import AllAgendaAdmin from '../agenda/AllAgendaAdmin'
import AdminNav from '../navbar/AdminNav'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAgenda } from '../../Actions/AgendaActions';
import { fetchAgendas } from '../../Actions/AgendaActions';

function AgendaForAdmin() {
    // const [agendas, setAgendas] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const agendas = useSelector((state) => state.agendas.agendas);

    useEffect(() => {
      // axios.get("http://localhost:8080/api/getAgendas")
      // .then((data) => {
      //   console.log(data);
      //   setAgendas(data.data);
      // })
      // .catch((err) => console.log(err));
      dispatch(fetchAgendas());
    }, [])
  

    const handleAddAgenda = () => {
      navigate("/admin/agenda/addAgenda")
    }

    const handleAgendaDelete = (agenad) => {
      axios.delete(`http://localhost:8080/api/deleteAgenda/${agenad.agendaId}`)
      .then((res) => {
        dispatch(fetchAgendas())
      })
      .catch((err) => console.log(err))
    }

    const handleAgendaUpdate = (agenda) => {
      dispatch(setAgenda(agenda));
      navigate("/admin/agenda/updateAgenda")
    }

  return (
    <div>
        <AdminNav />
        <div className='d-flex justify-content-center'>
            <button className='btn btn-success mt-5 w-50' onClick={() => handleAddAgenda()}> Add Agenda</button>
        </div>
        <AllAgendaAdmin agendas = {agendas} handleAgendaUpdate={handleAgendaUpdate} handleAgendaDelete={handleAgendaDelete} />
    </div>
  )
}

export default AgendaForAdmin