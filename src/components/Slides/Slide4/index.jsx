import React from 'react'
import styles from './style.module.scss'
import video from '../../../assets/videos/background4.mp4'

function Slide4() {
   return (
      <section className={`${styles.section} ${styles.section4}`}>
         <h1>Section 4</h1>
         <div className={styles.videoBackground}>
            <video autoPlay muted loop>
               <source src={video} type='video/mp4' />
            </video>
         </div>
      </section>
   )
}

export default Slide4
