import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminEvents from '../event/AdminEvents';
import AdminNav from '../navbar/AdminNav';
import AddEvent from '../event/AddEvent';
import { useNavigate } from 'react-router-dom';

function EventForAdmin() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [updated, setUpdated] = useState(0);

    useEffect(() => {
        axios.get("http://localhost:8080/api/getEvents")
        .then((data) => setEvents(data.data))
        .catch((err) => console.log(err));
    },[updated])

    const handleAddEvent = () => {
        navigate("/admin/event/addEvent")
    }

    const handleUpdate = (event) => {
        // axios.put("http://localhost:8080/api/updateEvent", event)
        // .then((data) => console.log(data))
        // .catch((err) => console.log(err))

        // setUpdated(updated + 1);
    }

    
  return (
    <div>
        <AdminNav />
        <div className='d-flex justify-content-center'>
            <button className='btn btn-success mt-5 w-50' onClick={() => handleAddEvent()}> Add Event</button>
        </div>
        <AdminEvents events = {events} handleUpdate = {handleUpdate} />
    </div>
  )
}

export default EventForAdmin