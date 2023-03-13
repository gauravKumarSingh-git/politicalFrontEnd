import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar';
import AllAgendas from './AllAgendas'

function Agenda() {

  const [agendas, setAgendas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/getAgendas")
    .then((data) => {
      console.log(data);
      setAgendas(data.data);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <div className='eventBackground'>
      <Navbar />
      <AllAgendas agendas = {agendas} />
    </div>
  )
}

export default Agenda