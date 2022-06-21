import React from 'react'
import logo from './assets/Logo.svg'
import mainImg from './assets/93.png'
const Homepage = () => {
  return (
    <div className='home-container'>
       <nav>
       <div className='logo-div'>
<img src={logo} alt='' />
       </div>
       <div className='menu-line'> 
       <span id='span1'></span>
       <span id='span2'></span>
       </div>
        </nav>

<section className='home-main'>
<div className='intro-text-content'>
<h1> Making  <span> job hunting
</span> way too easier!
</h1>
<p className='intro-p'> One place with the best jobs compnaies in tech.
Apply to all of them with a single profile 
and get in touh with hiring managers. </p>
<button className='start-btn'> Get Started</button>
</div>
   <div className='intro-content-img'>
<img src={mainImg} alt='' className='mainImg'/>


</div>
</section>

    </div>
  )
}

export default Homepage