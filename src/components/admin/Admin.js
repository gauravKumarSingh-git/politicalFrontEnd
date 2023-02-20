import React from 'react'
import { Link } from 'react-router-dom'
import AdminNav from '../navbar/AdminNav'
import AgendaForAdmin from './AgendaForAdmin'
import EventForAdmin from './EventForAdmin'
import MerchForAdmin from './MerchForAdmin'
import UserForAdmin from './UserForAdmin'
import ContactForAdmin from './ContactForAdmin'

function Admin() {
  
  return (
    <div>
      <AdminNav />
      <div className="p-5" style={{backgroundImage: "linear-gradient(black,#0C1B6B)",
       height:"100vh"}}>
        <div className='d-flex container mt-5 p-5 w-55 justify-content-around'>
          <ul style={{listStyle : "none"}}>
            <li className='m-2 p-5 d-inline-block rounded' style={{background:'#FAE5D3'}}><Link style={{textDecoration: "none", color: "black"}} to="/admin/event" element={EventForAdmin}> Events</Link> </li>
            <li className='m-2 p-5 d-inline-block rounded' style={{background:'#FAE5D3'}}><Link style={{textDecoration: "none", color: "black"}} to="/admin/users" element={UserForAdmin} > Users</Link></li>
            <li className='m-2 p-5 d-inline-block rounded' style={{background:'#FAE5D3'}}><Link style={{textDecoration: "none", color: "black"}} to="/admin/queries" element={ContactForAdmin} > User Queries</Link></li>
            <li className='m-2 p-5 d-inline-block rounded' style={{background:'#FAE5D3'}}><Link style={{textDecoration: "none", color: "black"}} to="/admin/agenda" element={AgendaForAdmin} >Agenda </Link></li>
            <li className='m-2 p-5 d-inline-block rounded' style={{background:'#FAE5D3'}}><Link style={{textDecoration: "none", color: "black"}} to="/admin/merchandise" element={MerchForAdmin} > Merchandise</Link></li>
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Admin