import React from 'react'
import './Header.css'
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { useState } from 'react'
const Header = () => {
  const mobile = window.innerWidth<=768?true:false
  const[menuOpened, setMenuOpened] = useState(false)
  return (
    <div className="header">
        <img src={Logo} alt="" className='logo' />
        {
          (!menuOpened&&mobile)
          ?<div onClick={()=>setMenuOpened(!menuOpened)} style={{backgroundColor:'var(--appColor)', padding:'.56rem', borderRadius:'5px', cursor:'pointer'}} >
            <img src={Bars} alt="" style={{width:'1.5rem', height:'1.3rem'}} />
          </div>
          :
          <ul className='header-menu' >
              <li onClick={()=>setMenuOpened(!menuOpened)}>Home</li>
              <li onClick={()=>setMenuOpened(!menuOpened)}>Programs</li>
              <li onClick={()=>setMenuOpened(!menuOpened)}>Why us</li>
              <li onClick={()=>setMenuOpened(!menuOpened)}>Plans</li>
              <li onClick={()=>setMenuOpened(!menuOpened)}>Testimonials</li>
          </ul>
        }
    </div>
  )
}

export default Header
