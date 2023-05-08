import React, { useState } from 'react'
import styles from './style.module.scss'

function Slide1() {
   const [active] = useState(true)

   return (
      <section className={`${styles.section} ${styles.section1}`}>
         <div className={`${styles.main} ${active ? styles.active : ''}`}>
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
