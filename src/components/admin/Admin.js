import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminEvents from '../event/AdminEvents'
import AdminNav from '../navbar/AdminNav'
import EventForAdmin from './EventForAdmin'

function Admin() {
  
  return (
    <div>
      <AdminNav />
    <div className='d-flex container shadow bg-light w-55 justify-content-around'>
      <ul style={{listStyle : "none"}}>
        <li className='m-2 p-5 d-inline-block bg-warning rounded'><Link style={{textDecoration: "none"}} to="/admin/event" element={EventForAdmin}> Events</Link> </li>
        <li className='m-2 p-5 d-inline-block bg-warning rounded'><Link style={{textDecoration: "none"}} to="/admin/users" element={AdminEvents} > Users</Link></li>
        <li className='m-2 p-5 d-inline-block bg-warning rounded'><Link style={{textDecoration: "none"}} to="/admin/queries" element={AdminEvents} > User Queries</Link></li>
        <li className='m-2 p-5 d-inline-block bg-warning rounded'><Link style={{textDecoration: "none"}} to="/admin/agenda" element={AdminEvents} >Agenda </Link></li>
        <li className='m-2 p-5 d-inline-block bg-warning rounded'><Link style={{textDecoration: "none"}} to="/admin/merchandise" element={AdminEvents} > Merchandise</Link></li>
      </ul>
      
    </div>
    </div>
  )
}

export default Admin