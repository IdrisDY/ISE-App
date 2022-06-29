import React from 'react'
import styles from './thumbs.module.css'
import img from './assets/100.png'
const Blow = () => {
  return (
   
        <section className={styles.container}>
<div className={styles.txtContent}> 
<h1 className={styles.h1}> Making  <span className={styles.spanBlow}> job hunting
</span> way too easier!
</h1>
<p  className={styles.p}> One place with the best jobs companies in tech.
Apply to all of them with a single profile 
and get in touch with hiring managers. </p>
</div>

<div className={styles.imgDivblow}> 
<img src={img} alt='img'className={styles.img}/>
</div>



    </section>
  )


  
}

export default Blow