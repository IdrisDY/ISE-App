import React from 'react'
import dashStyles from './dashboard.module.css'
import logo from './assets/Logo.svg'
import avatar from './assets/Vector.png'
import  search from './assets/Search.svg'
import filter from './assets/FilterIcon.svg'
import LogoBlack from './assets/LogoBlack.svg'
import Modal from './Modal'
import { useState } from 'react'
const Dashboard = () => {
  const [btnclick, setbtnClick] = useState(false)



  function openModalClick (){
    setbtnClick(true)
  }
  function closeModalClick (){
    setbtnClick(false)
  }


const JobDescription = ()=>{
   return(
      <div onClick={openModalClick} className={dashStyles.jobDesc}>
<div className={dashStyles.subjobDesc}> 
<img src={logo} className={dashStyles.logoRepo} alt='logo' />
<div className={dashStyles.reduce}>
<h2> FrontEnd Developer</h2>
<p className={dashStyles.pJob}> Oga Ise - FullTime</p>
</div>
</div>

<button ><span>...</span> </button>

      </div>
   )
}
  return (
   
<div className= {dashStyles.container}>
 <nav className= {dashStyles.nav}>
   <img src={LogoBlack} alt='logo' />
   <img src={avatar} className={`${dashStyles.imgResize} ${dashStyles.avatar}`} alt='avatar-img'/>
 </nav> 

 <section className={dashStyles.searchContent}>
   <div  className={dashStyles.h1Div} >
   <h1> Hello, Adekunle</h1>
    <p className={dashStyles.pBlack}> Find your Dream Job </p>
    </div>
   <div  className={dashStyles.searchDiv}>
    <img src={search} alt='search' className={dashStyles.imgResize}/>
   <input type='text' placeholder='Search for job title'  />
         <img src={filter} alt='search' className={dashStyles.imgResize} />


    </div>
 </section> 
 <p className={dashStyles.recent}> Recent Jobs</p>
 <section className={dashStyles.jobGrid}>
 <div>

  <JobDescription/>
  <JobDescription/>
  </div>
 <div> 
 <JobDescription/>
 <JobDescription/>
 </div>
 
 </section> 

 <section className={dashStyles.btnSection}>
  <button className={dashStyles.saveBtn}  > Saved Jobs</button>
 </section> 
 {btnclick?<Modal closeModalClick={closeModalClick}/>:null}
</div>
 
  )
}

export default Dashboard