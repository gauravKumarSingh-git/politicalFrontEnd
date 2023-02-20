import React from 'react'
import { useNavigate } from 'react-router-dom'

function NavBeforeLogin() {
    const navigate = useNavigate();
    const handleHome = () => {
      navigate("/")
    }
    const handleLogin = () => {
      navigate("/login")
    }
    const handleRegister = () => {
      navigate("/register");
    }
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark px-5 text-light ">
        <span onClick={handleHome}>Apna Political Party</span>
        <div>
          <button type="button" className="btn btn-outline-light mx-2  float-right" onClick={handleLogin}>Login</button>
          <button type="button" className="btn btn-outline-light mx-2 float-right" onClick={handleRegister} >Register</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBeforeLogin