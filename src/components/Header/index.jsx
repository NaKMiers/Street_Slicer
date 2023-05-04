import React, { useRef } from 'react'
import styles from './style.module.scss'

function Header() {
   const menuModalRef = useRef(null)
   const menuBtnRef = useRef(null)
   const modalNav = useRef(null)

   const handleShowMenu = () => {
      menuModalRef.current.classList.remove(styles.close)
      menuModalRef.current.style.display = 'flex'
      menuModalRef.current.classList.add(styles.open)

      modalNav.current.classList.remove(styles.close)
      modalNav.current.classList.add(styles.open)

      menuBtnRef.current.classList.add(styles.open)
   }

   const handleHideMenu = () => {
      menuModalRef.current.classList.remove(styles.open)
      menuModalRef.current.classList.add(styles.close)
      setTimeout(() => {
         menuModalRef.current.style.display = 'none'
      }, 299) // duration: 0.3s

      modalNav.current.classList.remove(styles.open)
      modalNav.current.classList.add(styles.close)

      menuBtnRef.current.classList.remove(styles.open)
   }

   return (
      <header className={styles.header}>
         <div className={styles.logo}>
            <img src='/imgs/logo.png' alt='logo' />
         </div>
         <button className={styles.menuBtn} onClick={handleShowMenu} ref={menuBtnRef}>
            <div />
            <div />
            <div />
         </button>

         <div className={styles.menuModal} ref={menuModalRef} style={{ display: 'none' }}>
            <header className={styles.header}>
               <div className={styles.logo}>
                  <img src='/imgs/logo.png' alt='logo' />
               </div>
               <button className={styles.closeBtn} onClick={handleHideMenu}>
                  <div />
                  <div />
               </button>
            </header>

            <div className={styles.menuBody}>
               <ul ref={modalNav}>
                  <li>
                     <a onClick={handleHideMenu} href='#specs'>
                        SPECS
                     </a>
                  </li>
                  <li>
                     <a onClick={handleHideMenu} href='#wheels'>
                        WHEELS
                     </a>
                  </li>
                  <li>
                     <a onClick={handleHideMenu} href='#in-action' className={styles.active}>
                        IN ACTION
                     </a>
                  </li>
                  <li>
                     <a onClick={handleHideMenu} href='#choose-yours'>
                        CHOOSE YOURS
                     </a>
                  </li>
                  <li>
                     <a onClick={handleHideMenu} href='#discount'>
                        DISCOUNT
                     </a>
                  </li>
                  <li>
                     <a onClick={handleHideMenu} href='#reviews'>
                        REVIEWS
                     </a>
                  </li>
                  <li>
                     <a onClick={handleHideMenu} href='#contact'>
                        CONTACT
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </header>
   )
}

export default Header
