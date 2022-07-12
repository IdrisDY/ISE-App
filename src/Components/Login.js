import React from 'react'
import {TextContent} from './homepage'
import styles from './register.module.css'
import  logo from './assets/Logo.svg'
import close from './assets/closeWhite.svg'
import { Link } from 'react-router-dom'
import  {useState} from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [errMessage, seterrMessage]= useState('')

  const [error, setError] =  useState(false)
  const navigate = useNavigate()
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

const getPassword=(event)=>{
  setPassword(event.target.value)
  setError(false)
}
const getEmail=(event)=>{
  setEmail(event.target.value)
  setError(false)
}

const Login = async(e) =>{
  e.preventDefault()
  try{
    const user = await signInWithEmailAndPassword(auth,email,password)
    console.log(user)
    navigate('/dashboard')
 }
 catch(error){
    console.error(error)  
      console.log('true')
      setError(true)
      seterrMessage(error.message)
 }
 }
 error?console.log('Sorry,wrong email or password'):console.log('')
const ErrorBox =()=>{
  return(
    <p className={styles.error}> Authentication Error, Please Input Valid Email and Password</p>

  )
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
      {error?<ErrorBox/>:null}
      <div className={styles.LogintxtWhite}>
         <label> Email Address</label>
         <input type='email' className={styles.h6white} onChange={(event)=> getEmail(event)} />
         </div>

         
         <div className={styles.LogintxtWhite}>
         <label>Password</label>
         <input className={styles.h6white} type='password'onChange={(event)=>getPassword(event)} />
         </div>

<div  className={styles.btndiv}>
 <button onClick={Login} disabled={error} className={styles.loginBtn}>  
 Login
</button>

</div>
</div>

     </section>


  )
}

export default LoginPage