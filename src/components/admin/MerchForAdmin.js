import React, { useEffect, useState } from 'react'
import AllMerch from '../merchandise/AllMerch'
import AdminNav from '../navbar/AdminNav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toUpdateMerch } from '../../Actions/MerchActions'

function MerchForAdmin() {
  const [merchs, setMerchs] = useState([])
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:8080/api/getItems")
    .then((data) => setMerchs(data.data))
    .catch((err) => console.log(err));
  },[])

  const handleAddMerch = () => {
    navigate("/admin/merchandise/addMerch")
  }

  const handleMerchUpdate = (merch) => {
    dispatch(toUpdateMerch(merch))
    navigate("/admin/merchandise/updateMerch")
  }

  return (
    <div>
      <AdminNav />
      <div className='d-flex justify-content-center'>
          <button className='btn btn-success mt-5 w-50' onClick={() => handleAddMerch()}> Add Merchandise</button>
      </div>
      <AllMerch merchs = {merchs} handleMerchUpdate = {handleMerchUpdate} />
    </div>
  )
}

export default MerchForAdmin