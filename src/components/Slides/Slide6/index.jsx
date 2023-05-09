import React, { useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Slide6({ active, seenSlides, setSeenSlides }) {
   const mainRef = useRef(null)

   useEffect(() => {
      if (active && !seenSlides?.includes(6)) {
         mainRef.current.classList.add(styles.active)

         setTimeout(() => {
            mainRef.current.classList.remove(styles.active)
            setSeenSlides(prev => (!prev.includes(6) ? [...prev, 6] : prev))
         }, 2010) // max duration: 1s + delayAll: 0.8s = 1.8s;
      }
   }, [active, seenSlides, setSeenSlides])

   return (
      <section className={`${styles.section} ${styles.section6}`}>
         <div className={styles.main} ref={mainRef}>
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
