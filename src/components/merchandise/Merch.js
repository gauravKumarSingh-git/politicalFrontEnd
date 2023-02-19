import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import axios from 'axios'
import MerchCard from './MerchCard'

function Merch() {

  const [merchs, setMerchs] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/getItems")
    .then((data) => {
      console.log(data.data)
      setMerchs(data.data);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <div>
      <Navbar />
      <div className='container m-auto row row-cols-1 row-cols-md-3'>
        {merchs.map((merch) => (
          <MerchCard merch = {merch} />
        ))}
      </div>
      
    </div>
  )
}

export default Merch