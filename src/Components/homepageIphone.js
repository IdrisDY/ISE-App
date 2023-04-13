import React from 'react'
import iphoneImg from './assets/Dashboard_iphonexspacegrey_portrait.png'
import Menu from './Menu'
import logo from './assets/Logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const HomepageIphone = () => {
   const [MenuClicked , setMenuClicked] = useState(false)
   function handleMenuClick(){
      setMenuClicked(true)
   }
   function closeMenuClick(){
      setMenuClicked(false)
   }

  return (
    
        <div className='home-container'>
       <nav className='nav' >
       <div className='logo-div'>
<img src={logo} alt='' className='homeLogo' />
       </div>
 
       <div className='menu-line' onClick={()=>handleMenuClick()}> 
       <span id='span1'></span>
       <span id='span2'></span>
       </div>

      
        </nav>

<section className='home-main'>
<div className='intro-text-content'>
<h1  className='home-text-h1'> Making  <span className='home-span-text'> job hunting
</span> way too easier!
</h1>
<p className='intro-p'> One place with the best jobs companies in tech.
Apply to all of them with a single profile 
and get in touch with hiring managers. </p>
<Link to='/homepage' ><button className='start-btn'> Get Started</button> </Link>
</div>
   <div className='intro-content-img'>
<img src={iphoneImg} alt='' className= 'iphoneImg'/>


</div>
</section>
    {MenuClicked?<Menu closeClick={closeMenuClick}/>:null}

    </div>

    
  )
}

export default HomepageIphone