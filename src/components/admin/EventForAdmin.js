import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AdminEvents from '../event/AdminEvents';
import AdminNav from '../navbar/AdminNav';
import AddEvent from '../event/AddEvent';
import { useNavigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setEvent } from '../../Actions/EventActions';

function EventForAdmin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [events, setEvents] = useState([]);
    const [updated, setUpdated] = useState(0);

    const initialValues = {
        eventName: "",
        description: "",
        location: "",
        date: "",
        startTime: "",
        endTime: "",
      }
    useEffect(() => {
        axios.get("http://localhost:8080/api/getEvents")
        .then((data) => setEvents(data.data))
        .catch((err) => console.log(err));
    },[updated])

    const handleAddEvent = () => {
        navigate("/admin/event/addEvent")
    }

    const handleUpdate = (event) => {
        dispatch(setEvent(event));
        navigate("/admin/event/updateEvent");
        setUpdated(updated + 1);
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