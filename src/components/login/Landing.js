import React from 'react'
import { Nav } from 'react-bootstrap'
import NavBeforeLogin from '../navbar/NavBeforeLogin'

function Landing() {
  return (
    <div>
        <NavBeforeLogin />
        <div>hello</div>
        <img className='width-auto' src="https://www.legalindia.com/wp-content/uploads/2019/04/Indian-Democracy.jpg" alt="img"/>
        
    </div>
  )
}

export default Landing