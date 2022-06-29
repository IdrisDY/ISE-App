import React from 'react'
import img from './assets/8.png'
import styles from './thumbs.module.css'
export const ThumbsUp = () => {
  return (
    <section className={styles.container}>
<div className={styles.imgDiv}> 
<img src={img} alt='img'className={styles.img}/>
</div>

<div className={styles.txtContent}> 
<h1 className={styles.h1}> Making  <span className={styles.span}> job hunting
</span> way too easier!
</h1>
<p  className={styles.p}> One place with the best jobs companies in tech.
Apply to all of them with a single profile 
and get in touch with hiring managers. </p>
</div>
    </section>
  )
}
