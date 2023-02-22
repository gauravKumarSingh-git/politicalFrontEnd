import React, { useEffect } from 'react'
import Navbar from '../navbar/Navbar'
import AllEvents from './AllEvents'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../Actions/UserActions'

function Event() {
  const dispatch = useDispatch();
  const [events, setEvents] = useState([])
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios.get('http://localhost:8080/api/getEvents')
    .then((data) => {
      console.log(data);
      setEvents(data.data);
    })
    .catch((err) => console.log(err))
  },[])

  const handleEventJoin = (event) => {
    for(let eve in user.events){
      if(eve.eventId === event.eventId) return;
    }
    let newEvent;
    if(user.events.length === 0) newEvent = [event];
    else newEvent = [...user.events, event];
    const newUser = {...user, events : newEvent}
    axios.put('http://localhost:8080/api/updateUser', newUser)
    .then((data) => {
      console.log(data)
      dispatch(updateUser(user.userId));
      document.getElementById(`join${event.eventId}`).innerHTML = 'Joined'
      document.getElementById(`join${event.eventId}`).className = 'btn btn-success disabled'
    })
    .catch((err) => console.log(err));
  }

  return (
    <div>
      <Navbar />
      <AllEvents events={events} handleEventJoin = {handleEventJoin} user = {user}/>
    </div>
  )
}

export default Event