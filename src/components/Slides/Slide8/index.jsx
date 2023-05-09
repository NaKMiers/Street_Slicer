import React, { useEffect, useRef } from 'react'
import facebook from '../../../assets/imgs/facebook.png'
import instagram from '../../../assets/imgs/instagram.png'
import pinterest from '../../../assets/imgs/pinterest.png'
import twitter from '../../../assets/imgs/twitter.png'
import youtube from '../../../assets/imgs/youtube.png'
import styles from './style.module.scss'

function Slide8({ active, seenSlides, setSeenSlides }) {
   const mainRef = useRef(null)

   useEffect(() => {
      if (active && !seenSlides?.includes(8)) {
         mainRef.current.classList.add(styles.active)

         setTimeout(() => {
            mainRef.current.classList.remove(styles.active)
            setSeenSlides(prev => (!prev.includes(8) ? [...prev, 8] : prev))
         }, 2010) // max duration: 1s + delayAll: 0.8s = 1.8s;
      }
   }, [active, seenSlides, setSeenSlides])

   return (
      <section className={`${styles.section} ${styles.section8}`}>
         <div className={styles.main} ref={mainRef}>
            <p>CONTACT US</p>
            <p>Visit our store</p>

            <p>08 New Hampshire Avenue #100, New Yourk, DC 20037, United States</p>
            <p>Phone: +1 916-875-2235</p>
            <p>
               Email: <span>info@domain.tld</span>
            </p>

            <div className={styles.socialWrap}>
               <img src={facebook} alt='social' />
               <img src={twitter} alt='social' />
               <img src={pinterest} alt='social' />
               <img src={instagram} alt='social' />
               <img src={youtube} alt='social' />
            </div>
         </div>
      </section>
   )
}

export default Slide8
