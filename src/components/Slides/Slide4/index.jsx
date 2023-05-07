import React, { useState } from 'react'
import styles from './style.module.scss'
import video from '../../../assets/videos/background4.mp4'

function Slide4() {
   const [active] = useState(false)

   return (
      <section className={`${styles.section} ${styles.section4}`}>
         <div className={styles.videoBackground}>
            <video autoPlay muted loop>
               <source src={video} type='video/mp4' />
            </video>
         </div>

         <div className={`${styles.main} ${active ? styles.active : ''}`}>
            <p>active lifestyle</p>
            <p>WE ARE FOR AN</p>
         </div>
      </section>
   )
}

export default Slide4
