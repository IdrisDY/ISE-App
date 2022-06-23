import React from 'react'
import logo from './assets/Logo.svg'
const LoginPage = () => {
  return (
    <div className='Login-content'>
    <div className='Login-div'>
   
       <img src={logo} alt='#' className='logo-bg-resize'/>
       <div className='Loginpage-btn-div'> 
       <button className='Loginpage-btn' >Login </button>
       <button  className='Loginpage-btn btn-orange'>Register </button>
       <p className='p-w-center'> By Love from ...</p>

       </div>
    </div>
    </div>
  )
}

export default LoginPage