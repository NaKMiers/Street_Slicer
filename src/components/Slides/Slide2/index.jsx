import React, { useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Slide2({ active, seenSlides, setSeenSlides }) {
   const mainRef1 = useRef(null)
   const mainRef2 = useRef(null)

   useEffect(() => {
      if (active && !seenSlides?.includes(2)) {
         mainRef1.current.classList.add(styles.active)
         mainRef2.current.classList.add(styles.active)

         setTimeout(() => {
            mainRef1.current.classList.remove(styles.active)
            mainRef2.current.classList.remove(styles.active)
            setSeenSlides(prev => (!prev.includes(2) ? [...prev, 2] : prev))
         }, 2010) // max duration: 1s + delayAll: 0.8s = 1.8s;
      }
   }, [active, seenSlides, setSeenSlides])

   return (
      <section className={`${styles.section} ${styles.section2}`}>
         <div className={styles.main} ref={mainRef1}>
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

         <div className={styles.main2} ref={mainRef2}>
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
