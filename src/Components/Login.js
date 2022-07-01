import React from 'react'
import {TextContent} from './homepage'
import styles from './register.module.css'
import  logo from './assets/Logo.svg'
import close from './assets/closeWhite.svg'

const LoginPage = () => {
  return (
    <section className={styles.container}>

      <div className={styles.bgbrown} >
      <img src={logo} alt='logo' className={styles.logoWhite}/> 
      <TextContent/>
      </div>

      <div className={styles.logDiv}>
      <div className={styles.closeBtndiv}>
      <img src={logo} alt='logo' className={styles.logo}/> 
      <button><img src={close} alt='close' className={styles.imgResize}/> </button>
      </div>


      <div className={ styles.txtLogoLogin}>
         <p className={styles.pReg}> Login to </p>
      <img src={logo} alt='logo' className={styles.logo}/>
      </div>
      <div className={styles.txtWhite}>
         <h2> Email Address</h2>
         <h6 className={styles.h6white} > idrisadekunle726@gmail.com</h6>
         </div>

         
         <div className={styles.txtWhite}>
         <h2>Password</h2>
         <h6 className={styles.h6white} > ******</h6>
         </div>

<div  className={styles.btndiv}>
  <button className={styles.loginBtn}> Login</button>
</div>
</div>

     </section>


  )
}

export default LoginPage