import React from 'react'
import styles from './modal.module.css'
import logo from './assets/Logo.svg'
import closeImg from './assets/Union.svg'


const Modal = () => {
  return (
    <div className={styles.container}>
<div className={styles.modalContent}> 
<div className={styles.bigGrid}> 
<div className={styles.txtlogo}>
<img src={logo} className={styles.logoRepo} alt='logo' />
<div className={styles.reduce}>
<h2> FrontEnd Developer</h2>
<p> Oga Ise - FullTime</p>
</div>
</div>
<div>
<h3 className={styles.h3}> Job Description</h3>
<article className={styles.article}>
We believe that being a kind person who elevates the rest of the team is just as 
valuable as writing great code. We look for strong problem-solving skills and
 experience working on important functionality for a cloud-based product. 
We need people who are humble, eager to learn, and always willing to help 
others learn as well. We want to work with people who enjoy picking up a 
problem and solving it, regardless of the technologies and techniques involved.
<br/>
<br/>
The Aha! security team is part of the engineering team and is product focused.
 As a Senior Security Engineer, you can expect to spend the majority of your time
 working with Ruby on Rails and JavaScript code for security reviews, 
investigations, updates, and implementing security features.

</article>

</div>

</div>
<div className={styles.smallGrid} >
<img src={closeImg} alt='close' className={styles.logoResize}/>
<div className={styles.txtOrange}>
  <p> 1 week ago</p>
  <p> Job Type: Full Time</p>
  <p> Hiring from : North America</p>
</div>
<div><button className={styles.btn}> Apply for this role</button>
</div>
</div>
</div>

    </div>
  )
}

export default Modal