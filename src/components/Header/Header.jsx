import React from 'react'
import './Header.css'
import Logo from "../../assets/logo.png"
import Bars from "../../assets/bars.png"
import { useState } from 'react'
import {Link} from 'react-scroll'
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
              <li>
                <Link
                  to='home'
                  span={true}
                  smooth={true}
                  onClick={()=>setMenuOpened(!menuOpened)}
                >Home</Link>
              </li>
              <li>
                <Link
                  to='programs'
                  span={true}
                  smooth={true}
                  onClick={()=>setMenuOpened(!menuOpened)}
                >Programs</Link>
              </li>
              <li>
                <Link
                  to='Join-us'
                  span={true}
                  smooth={true}
                  onClick={()=>setMenuOpened(!menuOpened)}
                >Why us</Link>
              </li>
              <li>
                <Link
                  to='plans'
                  span={true}
                  smooth={true}
                  onClick={()=>setMenuOpened(!menuOpened)}
                >Plans</Link>
              </li>
              <li>
                <Link
                  onClick={()=>setMenuOpened(!menuOpened)}
                  to='testimonials'
                  span={true}
                  smooth={true}
                >Testimonials</Link>
              </li>
          </ul>
        }
    </div>
  )
}

export default Header
