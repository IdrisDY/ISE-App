import React from 'react'
import logo from './assets/Logo.svg'
import close from './assets/closeWhite.svg'


const Menu = () => {
  return (
    <div className='Login-content'>
    <img src={close} alt='close' className='logo-resize'/>
    <div className='Login-div'>
       <img src={logo} alt='#' className='logo-bg-resize'/>
       
       <div className='mainLogin'> 
       <div className='Loginpage-btn-div'>    
          <button className='Loginpage-btn' >Login </button>
       <button  className='Loginpage-btn btn-orange'>Register </button>

</div>
       <p className='p-w-center'> By Love from ...</p>
       </div>

    </div>
    </div>
  )
}

export default Menu