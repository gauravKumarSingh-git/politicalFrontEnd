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
        <div className='d-flex col-sm-10 m-auto mt-5 mb-0 shadow rounded' style={{backgroundColor: "white"}}>
          <h2 className='m-2 p-2 col-10'>Events</h2>
          <button className='btn btn-success col-2 m-auto p-1' style={{width:"120px", height:"40px"}} onClick={() => handleAddEvent()}>+ Add Event</button>
        </div>
        <AdminEvents events = {events} handleUpdate = {handleUpdate} />
    </div>
  )
}

export default EventForAdmin