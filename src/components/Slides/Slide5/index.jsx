import React, { useEffect, useRef } from 'react'
import skateboard1 from '../../../assets/imgs/skateboard1.webp'
import skateboard2 from '../../../assets/imgs/skateboard2.webp'
import skateboard3 from '../../../assets/imgs/skateboard3.webp'
import styles from './style.module.scss'

function Slide5({ active, seenSlides, setSeenSlides }) {
   const mainRef = useRef(null)

   useEffect(() => {
      if (active && !seenSlides?.includes(5)) {
         mainRef.current.classList.add(styles.active)

         setTimeout(() => {
            mainRef.current.classList.remove(styles.active)
            setSeenSlides(prev => (!prev.includes(5) ? [...prev, 5] : prev))
         }, 2010) // max duration: 0.8s + delayAll: 0.8s = 1.6s;
      }
   }, [active, seenSlides, setSeenSlides])

   return (
      <section className={`${styles.section} ${styles.section5}`}>
         <div className={styles.main} ref={mainRef}>
            <h2 className={styles.title}>CHOOSE ONE OF THE 3 STYLES THAT EXPRESS YOURSELF:</h2>

            <div className={styles.productWrap}>
               <div className={`${styles.product} ${styles.product1}`}>
                  <div className={styles.image}>
                     <img src={skateboard1} alt='skateboard1' />
                  </div>
                  <span>$89.99</span>
                  <span>BLUE SKATEBOARD</span>

                  <button>ORDER</button>
               </div>

               <div className={`${styles.product} ${styles.product2}`}>
                  <div className={styles.image}>
                     <img src={skateboard2} alt='skateboard2' />
                  </div>
                  <span>
                     $59.99 <del>$89.99</del>
                  </span>
                  <span>GREENE SKATEBOARD</span>

                  <button>ORDER</button>
               </div>

               <div className={`${styles.product} ${styles.product3}`}>
                  <div className={styles.image}>
                     <img src={skateboard3} alt='skateboard3' />
                  </div>
                  <span>$89.99</span>
                  <span>YELLOW SKATEBOARD</span>

                  <button>ORDER</button>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Slide5
