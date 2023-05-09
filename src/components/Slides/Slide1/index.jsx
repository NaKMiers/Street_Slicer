import React, { useEffect, useRef } from 'react'
import styles from './style.module.scss'

function Slide1({ active, seenSlides, setSeenSlides }) {
   const mainRef = useRef(null)

   useEffect(() => {
      console.log('seenSlides: ', seenSlides)
      if (active && !seenSlides?.includes(1)) {
         mainRef.current.classList.add(styles.active)

         setTimeout(() => {
            mainRef.current.classList.remove(styles.active)
            setSeenSlides(prev => (!prev.includes(1) ? [...prev, 1] : prev))
         }, 2010) // max duration: 1.2s + delayAll: 0.8s = 2s;
      }
   }, [active, seenSlides, setSeenSlides])

   return (
      <section className={`${styles.section} ${styles.section1}`}>
         <div className={styles.main} ref={mainRef}>
            <p>We believe in</p>
            <p>FUN, FAST, SIMPLE TRANSPORTATION</p>
            <p>FOR EVERYONE</p>
            <button>
               <a href='/'>DISCOVER MORE</a>
            </button>
         </div>
      </section>
   )
}

export default Slide1
