import React, { useState } from 'react'
import logo from './assets/Logo.svg'
import mainImg from './assets/93.png'
import { Link } from 'react-router-dom'
import { ThumbsUp } from './ThumbsUp';
import Blow from './Blow';



export function TextContent() {
  return(
<div className='txtContentContainer'>
<h1 className='txtContentWhite'> Making  <span className='txtContentOrange'> job hunting
</span> way too easier!
</h1>
<p className='intro-p' > One place with the best jobs companies in tech.
Apply to all of them with a single profile 
and get in touh with hiring managers. </p>
<button className='start-btn'> Get Started</button>
</div>
)
}

export function Homepage({homeImg}) {
const [menuClick, setMenuClick] = useState(false)
  return (
    <div className='home-container'>
       <nav className='nav' >
       <div className='logo-div'>
<img src={logo} alt='' className='homeLogo' />
       </div>
 
       <div className='menu-line'> 
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
and get in touh with hiring managers. </p>
<Link to='/homepage' ><button className='start-btn'> Get Started</button> </Link>
</div>
   <div className='intro-content-img'>
<img src={homeImg} alt='' className= 'mainImg'/>


</div>
</section>
    

    </div>
  )
}

