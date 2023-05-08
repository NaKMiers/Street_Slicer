import React, { useState } from 'react'
import styles from './style.module.scss'

function Slide6() {
   const [active] = useState(true)

   return (
      <section className={`${styles.section} ${styles.section6}`}>
         <div className={`${styles.main} ${active ? styles.active : ''}`}>
            <p>GET A 10$</p>
            <p>Discount</p>
            <p>Leave your email bown below and get 10$ discoiunt on delivery</p>

            <input className={styles.input} type='email' placeholder='Enter your email...*' />
            <button className={styles.submitBtn}>GET NOW</button>
         </div>
      </section>
   )
}

export default Slide6
