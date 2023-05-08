import React, { useState } from 'react'
import styles from './style.module.scss'
import facebook from '../../../assets/imgs/facebook.png'
import twitter from '../../../assets/imgs/twitter.png'
import pinterest from '../../../assets/imgs/pinterest.png'
import instagram from '../../../assets/imgs/instagram.png'
import youtube from '../../../assets/imgs/youtube.png'

function Slide8() {
   const [active] = useState(false)

   return (
      <section className={`${styles.section} ${styles.section8}`}>
         <div className={`${styles.main} ${active ? styles.active : ''}`}>
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
