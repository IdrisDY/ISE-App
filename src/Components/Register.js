import React from 'react'
import styles from './register.module.css'
import { TextContent } from './homepage'
import closeImg from './assets/Union.svg'
import LogoBlack from './assets/LogoBlack.svg'
import  logo from './assets/Logo.svg'
import { Link } from 'react-router-dom'


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

      <Link to='/menu' >      <button><img src={closeImg} alt='close' className={styles.imgResize}/> </button>
</Link>
      </div>
      <div className={ styles.txtLogo}>
         <p className={styles.pReg}> Register to </p>
      <img src={LogoBlack} alt='logo' className={styles.logo}/>
      </div>
      <div className={styles.registerDetails}>

         <div className={styles.regtxtWhite} >
         <label> Name</label>
         <input type='text'  className={styles.inputVisible} />
         </div>

         
         <div className={styles.regtxtWhite}>
         <label> Email Address</label>
         <input type='email' className={styles.inputVisible} />
         </div>

         
         <div className={styles.regtxtWhite}>
         <h2>Password</h2>
         <input type='password' className={styles.inputVisible} />
         </div>



      </div>
      <div className={styles.btndiv}>
      <Link to='/login' >
      <button className={styles.btnBlack}> Register</button>
      </Link>
      </div>
       </div>
      </section>

  )
}
 