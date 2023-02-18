import React, { useEffect, useState } from 'react'
import Navbar from '../navbar/Navbar'
import axios from 'axios'

function Merch() {

  const [merchs, setMerchs] = useState([])

  useEffect(() => {
    axios.get("http://localhost:8080/api/getItems")
    .then((data) => {
      console.log(data)
      setMerchs(data);
    })
    .catch((err) => console.log(err));
  }, [])

  return (
    <div>
      <Navbar />
      Merch
    </div>
  )
}

export default Merch