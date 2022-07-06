import React from 'react'
import {TextContent} from './homepage'
import styles from './register.module.css'
import  logo from './assets/Logo.svg'
import close from './assets/closeWhite.svg'
import { Link } from 'react-router-dom'
import  {useState} from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase'

const LoginPage = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

//   const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });
const Login = async() =>{
  try{
    const user = await signInWithEmailAndPassword(auth,email,password)
    console.log(user)
 }
 catch(error){
    console.log(error)
 }
 

}
  return (
    <section className={styles.container}>

      <div className={styles.bgbrown} >
      <img src={logo} alt='logo' className={styles.logoWhite}/> 
      <TextContent/>
      </div>

      <div className={styles.logDiv}>
      <div className={styles.closeBtndiv}>
      <img src={logo} alt='logo' className={styles.logoLoginMobile}/> 
      <Link to='/menu'>      <button ><img src={close} alt='close' className={styles.imgResize}/> </button>
</Link>
      </div>


      <div className={ styles.txtLogoLogin}>
         <p className={styles.pReg}> Login to </p>
      <img src={logo} alt='logo' className={styles.logo}/>
      </div>
      <div className={styles.LogintxtWhite}>
         <label> Email Address</label>
         <input type='email' className={styles.h6white} onChange={(event)=>setEmail(event.target.value)} />
         </div>

         
         <div className={styles.LogintxtWhite}>
         <label>Password</label>
         <input className={styles.h6white} type='password'onChange={(event)=>setPassword(event.target.value)} />
         </div>

<div  className={styles.btndiv}>
<Link to='/dashboard' className={styles.loginBtn}>
  <button onClick={Login}> Login</button>
 </Link>
</div>
</div>

     </section>


  )
}

export default LoginPage