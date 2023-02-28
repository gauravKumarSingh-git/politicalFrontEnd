import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { fetchAllUsers, setToBeUpdated } from '../../Actions/UserActions';
import AdminNav from '../navbar/AdminNav'
import AllUsers from '../user/AllUsers'

function UserForAdmin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [])

  const handleUserUpdate = (user) => {
    dispatch(setToBeUpdated(user))
    navigate("/admin/users/updateUser")
  }

  return (
    <div className='eventBackground' style={{height:"100%"}}>
        <AdminNav />
        <AllUsers users = {users} handleUserUpdate = {handleUserUpdate}/>
    </div>
  )
}

export default UserForAdmin