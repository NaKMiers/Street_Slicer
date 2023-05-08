import React, { useState } from 'react'
import styles from './style.module.scss'
import wheels from '../../../assets/imgs/wheels.webp'

function Slide3() {
   const [active] = useState(true)

   return (
      <section className={`${styles.section} ${styles.section3}`}>
         <div className={`${styles.main} ${active ? styles.active : ''}`}>
            <p>Wheels</p>

            <div className={styles.content}>
               <div className={`${styles.contentBlock} ${styles.contentBlock1}`}>
                  <p>CUSTOM FORMULA</p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua.
                  </p>
               </div>
               <img src={wheels} alt='wheels' />
               <div className={`${styles.contentBlock} ${styles.contentBlock2}`}>
                  <p>ULTRA-WIDE CONTACT</p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Slide3
