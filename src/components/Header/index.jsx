import React, { useRef } from 'react'
import { paths } from '../../data'
import styles from './style.module.scss'
import logo from '../../assets/imgs/logo.png'

function Header({ handleSlide, setOpenMenu }) {
   const menuModalRef = useRef(null)
   const menuBtnRef = useRef(null)
   const modalNav = useRef(null)

   const url = new URL(window.location.href)
   const curPath = url.hash

   const handleShowMenu = () => {
      setOpenMenu(true)
      menuModalRef.current.classList.remove(styles.close)
      menuModalRef.current.style.display = 'flex'
      menuModalRef.current.classList.add(styles.open)

      modalNav.current.classList.remove(styles.close)
      modalNav.current.classList.add(styles.open)

      menuBtnRef.current.classList.add(styles.open)
   }

   const handleHideMenu = value => {
      // animation: overlay and body
      menuModalRef.current.classList.remove(styles.open)
      menuModalRef.current.classList.add(styles.close)
      setTimeout(() => {
         menuModalRef.current.style.display = 'none'
      }, 299) // duration: 0.3s

      modalNav.current.classList.remove(styles.open)
      modalNav.current.classList.add(styles.close)

      menuBtnRef.current.classList.remove(styles.open)

      // change slide
      value && handleSlide(value)
      setOpenMenu(false)
   }

   return (
      <header className={styles.header}>
         {/* Nomal Header */}
         <div className={styles.logo}>
            <img src={logo} alt='logo' />
         </div>
         <button className={styles.menuBtn} onClick={handleShowMenu} ref={menuBtnRef}>
            <div />
            <div />
            <div />
         </button>

         <div className={styles.menuModal} ref={menuModalRef} style={{ display: 'none' }}>
            {/* Overlay Header */}
            <header className={styles.header}>
               <div className={styles.logo}>
                  <img src={logo} alt='logo' />
               </div>
               <button className={styles.closeBtn} onClick={() => handleHideMenu()}>
                  <div />
                  <div />
               </button>
            </header>

            <div className={styles.menuBody}>
               <ul ref={modalNav}>
                  {paths.map((path, index) => (
                     <li key={path.path}>
                        <a
                           href={path.path}
                           className={curPath === path.path ? styles.active : ''}
                           onClick={() => handleHideMenu(index + 1)}
                        >
                           {path.label}
                        </a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </header>
   )
}

export default Header
