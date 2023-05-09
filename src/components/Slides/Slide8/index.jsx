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

            <p>Phu Trung Ward, Tan Phu District, Ho Chi Minh City, Vietnam</p>
            <p>Phone: +84 899-320-427</p>
            <p>
               Email: <span>diwas118151@gmail.com</span>
            </p>

            <div className={styles.socialWrap}>
               <a href='https://facebook.com' target='_blank' rel='noreferrer'>
                  <img src={facebook} alt='social' />
               </a>
               <a href='https://twitter.com' target='_blank' rel='noreferrer'>
                  <img src={twitter} alt='social' />
               </a>
               <a href='https://pinterest.com' target='_blank' rel='noreferrer'>
                  <img src={pinterest} alt='social' />
               </a>
               <a href='https://instagram.com' target='_blank' rel='noreferrer'>
                  <img src={instagram} alt='social' />
               </a>
               <a href='https://youtube.com' target='_blank' rel='noreferrer'>
                  <img src={youtube} alt='social' />
               </a>
            </div>
         </div>
      </section>
   )
}

export default Slide8
