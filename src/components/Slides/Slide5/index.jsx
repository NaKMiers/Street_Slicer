import React, { useState } from 'react'
import styles from './style.module.scss'
import skateboard1 from '../../../assets/imgs/skateboard1.webp'
import skateboard2 from '../../../assets/imgs/skateboard2.webp'
import skateboard3 from '../../../assets/imgs/skateboard3.webp'

function Slide5() {
   const [active] = useState(true)

   return (
      <section className={`${styles.section} ${styles.section5}`}>
         <div className={`${styles.main} ${active ? styles.active : ''}`}>
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
