import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/navbar/Navbar'
import UserEvents from '../components/event/UserEvents'
import axios from 'axios'
import { updateUser } from '../Actions/UserActions'

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user)

    const handleRemove = (eventId) => {
        const newEvent = user.events.filter((eve) => eve.eventId !== eventId);
        const newUser = {...user, events : newEvent}
        console.log(newUser);
        axios.put("http://localhost:8080/api/updateUser" , newUser)
        .then((data) => console.log(data))
        .catch((err) => console.log(err))

        dispatch(updateUser(user.userId));
    }

  return (
    <div>
        <Navbar />
        <UserEvents user = {user} handleRemove = {handleRemove} />

    </div>
  )
}

export default Profile