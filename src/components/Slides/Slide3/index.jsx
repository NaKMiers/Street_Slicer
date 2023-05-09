import React, { useEffect, useRef } from 'react'
import wheels from '../../../assets/imgs/wheels.webp'
import styles from './style.module.scss'

function Slide3({ active, seenSlides, setSeenSlides }) {
   const mainRef = useRef(null)

   useEffect(() => {
      if (active && !seenSlides?.includes(3)) {
         mainRef.current.classList.add(styles.active)

         setTimeout(() => {
            mainRef.current.classList.remove(styles.active)
            setSeenSlides(prev => (!prev.includes(3) ? [...prev, 3] : prev))
         }, 2010) // max duration: 1.2s + delayAll: 0.8s = 2s;
      }
   }, [active, seenSlides, setSeenSlides])

   return (
      <section className={`${styles.section} ${styles.section3}`}>
         <div className={styles.main} ref={mainRef}>
            <p>Wheels</p>

            <div className={styles.content}>
               <div className={`${styles.contentBlock} ${styles.contentBlock1}`}>
                  <p>CUSTOM FORMULA</p>
                  <p>
                     Our custom formula is specifically designed to enhance the performance and
                     durability of our skateboard products.
                  </p>
               </div>
               <img src={wheels} alt='wheels' />
               <div className={`${styles.contentBlock} ${styles.contentBlock2}`}>
                  <p>ULTRA-WIDE CONTACT</p>
                  <p>
                     Our skateboard decks feature ultra-wide contact for enhanced stability and control,
                     allowing for a smoother ride on any surface.
                  </p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Slide3
