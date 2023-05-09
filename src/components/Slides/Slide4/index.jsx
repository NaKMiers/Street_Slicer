import React, { useEffect, useRef } from 'react'
import video from '../../../assets/videos/background4.mp4'
import styles from './style.module.scss'

function Slide4({ active, seenSlides, setSeenSlides }) {
   const mainRef = useRef(null)

   useEffect(() => {
      if (active && !seenSlides?.includes(4)) {
         mainRef.current.classList.add(styles.active)

         setTimeout(() => {
            mainRef.current.classList.remove(styles.active)
            setSeenSlides(prev => (!prev.includes(4) ? [...prev, 4] : prev))
         }, 2010) // max duration: 1s + delayAll: 0.8s = 1.8s;
      }
   }, [active, seenSlides, setSeenSlides])

   return (
      <section className={`${styles.section} ${styles.section4}`}>
         <div className={styles.videoBackground}>
            <video autoPlay muted loop>
               <source src={video} type='video/mp4' />
            </video>
         </div>

         <div className={styles.main} ref={mainRef}>
            <p>active lifestyle</p>
            <p>WE ARE FOR AN</p>
         </div>
      </section>
   )
}

export default Slide4
