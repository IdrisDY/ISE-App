import React from 'react'
import styles from './register.module.css'
import { TextContent } from './homepage'
import closeImg from './assets/Union.svg'
import LogoBlack from './assets/LogoBlack.svg'
import  logo from './assets/Logo.svg'

export const Register = () => {
  return (
    
      <section className={styles.container}> 
      <div className={styles.bgbrown} >
      <img src={logo} alt='logo' className={styles.logoWhite}/> 
      <TextContent/>
      </div>
      <div className={styles.regDiv}>
      
      <div className={styles.closeBtndiv}> 
      <img src={LogoBlack} alt='logo' className={styles.logoWhiteMobile}/> 

      <button><img src={closeImg} alt='close' className={styles.imgResize}/> </button>
      </div>
      <div className={ styles.txtLogo}>
         <p className={styles.pReg}> Register to </p>
      <img src={LogoBlack} alt='logo' className={styles.logo}/>
      </div>
      <div className={styles.registerDetails}>

         <div>
         <h2> Name</h2>
         <h6> Disu Ade </h6>
         </div>

         
         <div>
         <h2> Email Address</h2>
         <h6> idrisadekunle726@gmail.com</h6>
         </div>

         
         <div>
         <h2>Password</h2>
         <h6> ******</h6>
         </div>



      </div>
      <div className={styles.btndiv}>
         <button className={styles.btnBlack}> Register</button>
      </div>
       </div>
      </section>

  )
}
 