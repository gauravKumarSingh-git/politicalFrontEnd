import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand mx-5" href="/home">Apna Political Party</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link to="/admin" className="nav-link text-weight">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link text-weight">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default AdminNav