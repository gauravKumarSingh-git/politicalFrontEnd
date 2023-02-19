import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
import MerchCard from './MerchCard'
import NavMerch from './NavMerch'
import { addMerch, removeMerch } from '../../Actions/MerchActions'
import { useDispatch } from 'react-redux'

function Merch() {
  const dispatch = useDispatch();
  const [merchs, setMerchs] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/getItems")
    .then((data) => {
      console.log(data.data)
      setMerchs(data.data);
    })
    .catch((err) => console.log(err));
  }, [])

  const addToCartHandler = (merch) => {
    dispatch(addMerch(merch));
  }

  return (
    <div>
      <Navbar />
      <NavMerch />
      <div className='container m-auto row row-cols-1 row-cols-md-3'>
        {merchs.map((merch) => (
          <MerchCard key={merch.itemId} merch = {merch} addToCartHandler= {addToCartHandler} />
        ))}
      </div>
      
    </div>
  )
}

export default Merch