import React from 'react'
import logo from './assets/Logo.svg'
import close from './assets/closeWhite.svg'
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'
import LoginPage from './Login'
import { Register } from './Register'
import { useState } from 'react'

const Menu = ({closeClick}) => {
  const [btnClick, setbtnClick] = useState(false)
  const handleBtnclick = ()=>{
    setbtnClick(true)}

    if(btnClick){
      return null
    }
    else{
  
  return (
    <div className='Login-content'>
    <nav className='login-nav'>
    <img src={close} alt='close' className='logo-resize' onClick={closeClick}/>
    </nav>
    <div className='Login-div'>
       <img src={logo} alt='#' className='logo-bg-resize'/>
       
       <div className='mainLogin'> 
       <div className='Loginpage-btn-div'>    
       <Link to='/login'>          
    <button className='Loginpage-btn' onClick={()=>handleBtnclick()} >Login </button>
</Link>
 <Link to='/register'>       
 <button  className='Loginpage-btn btn-orange'   onClick={()=>handleBtnclick()} >Register </button>
</Link>

</div>
       <p className='p-w-center'> By Love from ...</p>
       </div>

    </div>
    </div>
  )
}
}

export default Menu