import React, { useState } from 'react'
import styles from './style.module.scss'

function Slide2() {
   const [active] = useState(false)

   return (
      <section className={`${styles.section} ${styles.section2}`}>
         <div className={`${styles.main} ${active ? styles.active : ''}`}>
            <p className={styles.title}>Specifications</p>
            <div className={`${styles.contentBlock} ${styles.contentBlock1}`}>
               <p>POLYURETHANE WHEELS</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <div className={styles.pulse}>
                  <div />
                  <div />
                  <div />
                  <div />
               </div>
            </div>
            <div className={`${styles.contentBlock} ${styles.contentBlock2}`}>
               <p>TRIAXIAL FIBERGLASS</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <div className={styles.pulse}>
                  <div />
                  <div />
                  <div />
                  <div />
               </div>
            </div>
            <div className={`${styles.contentBlock} ${styles.contentBlock3}`}>
               <p>THREE COLOR STYLES</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
               <div className={styles.pulse}>
                  <div />
                  <div />
                  <div />
                  <div />
               </div>
            </div>
         </div>
         <div className={styles.main2}>
            <p className={styles.title}>Specifications</p>

            <div className={`${styles.contentBlock} ${styles.contentBlock1}`}>
               <p>POLYURETHANE WHEELS</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className={`${styles.contentBlock} ${styles.contentBlock3}`}>
               <p>THREE COLOR STYLES</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className={`${styles.contentBlock} ${styles.contentBlock2}`}>
               <p>TRIAXIAL FIBERGLASS</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
         </div>
      </section>
   )
}

export default Slide2
