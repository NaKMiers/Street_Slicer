import { faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './style.module.scss'

function SubSlide({ data, blur }) {
   return (
      <div className={`${styles.slide} ${blur ? styles.blur : ''}`}>
         <div className={styles.avatar}>
            <img src={data.avatar} alt='avatar' />
         </div>

         <p className={styles.name}>{data.name}</p>
         <p className={styles.role}>{data.role}</p>

         <p className={styles.content}>{data.text}</p>

         <div className={styles.quote}>
            <FontAwesomeIcon icon={faQuoteRight} />
         </div>
      </div>
   )
}

export default SubSlide
