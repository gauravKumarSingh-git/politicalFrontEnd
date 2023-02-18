import React from 'react'

function NavBeforeLogin() {
    const handleHome = () => {}
    const handleLogin = () => {}
    const handleRegister = () => {}
  return (
    <div>
      <nav className="navbar navbar-warning bg-warning px-5 ">
        <span className='text-dark' onClick={handleHome}>Political Party</span>
        <div>
          <button type="button" className="btn btn-outline-dark mx-2 text-dark float-right" onClick={handleLogin}>Login</button>
          <button type="button" className="btn btn-outline-dark mx-2 text-dark float-right" onClick={handleRegister} >Register</button>
        </div>
      </nav>
    </div>
  )
}

export default NavBeforeLogin