import React from 'react'
import NavBeforeLogin from '../navbar/NavBeforeLogin'
import '../login/Landing.css'

function Landing() {
  return (
    <div className='landingContainer'>
        <NavBeforeLogin />

        <img className='landingImg' src="https://www.lumascape.com.au/media/cache/2560x/0/5/135/d8d2d2/2-majlis.jpg"  alt="img" style={{width:'100%', height : "95vh"}} />
        <div className='landingOverlay'>
        <marquee id="marquee">Welcome To Apna Party</marquee>
        </div>
    </div>
  )
}

export default Landing