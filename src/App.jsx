import React, { useState } from 'react'
import styles from './App.module.scss'
import Header from './components/Header'

function App() {
   const [curPath, setCurPath] = useState('#welcome')

   const paths = [
      { path: '#welcome', label: 'Welcome', default: true },
      { path: '#specs', label: 'Specsifications' },
      { path: '#wheels', label: 'Wheels' },
      { path: '#in-action', label: 'In Action' },
      { path: '#choose-yours', label: 'Choose Yours' },
      { path: '#discount', label: 'Discount' },
      { path: '#reviews', label: 'Reviews' },
      { path: '#contact', label: 'Contact' },
   ]

   const handleShowSlideTitle = e => {
      const elements = [...e.currentTarget.children]
      const div = elements[elements.length - 1]

      div.classList.remove(styles.hide)
      div.style.display = 'block'
      div.classList.add(styles.show)
   }

   const handleHideSlideTitle = e => {
      const elements = [...e.currentTarget.children]
      const div = elements[elements.length - 1]

      div.classList.remove(styles.show)
      div.classList.add(styles.hide)
      setTimeout(() => {
         div.style.display = 'none'
      }, 190) // duration: 0.2s
   }

   return (
      <div className={styles.App}>
         {/* HEADER */}
         <Header />

         <div className={styles.navSlider}>
            <ul>
               {paths.map(path => (
                  <li
                     key={path.path}
                     className={styles.slideNavItem}
                     onMouseOver={handleShowSlideTitle}
                     onMouseLeave={handleHideSlideTitle}
                  >
                     <a
                        href={path.path}
                        className={path.path === curPath ? styles.active : ''}
                        onClick={() => setCurPath(path.path)}
                     >
                        <span />
                     </a>
                     <div style={{ display: 'none' }}>{path.label}</div>
                  </li>
               ))}
            </ul>
         </div>

         <div className={styles.container}>
            <section className={`${styles.section} ${styles.section1}`} id='welcome'>
               <h1>Section 1</h1>
            </section>
            <section className={`${styles.section} ${styles.section2}`} id='specs'>
               <h1>Section 2</h1>
            </section>
            <section className={`${styles.section} ${styles.section3}`} id='wheels'>
               <h1>Section 3</h1>
            </section>
            <section className={`${styles.section} ${styles.section4}`} id='in-action'>
               <h1>Section 4</h1>
            </section>
            <section className={`${styles.section} ${styles.section5}`} id='choose-yours'>
               <h1>Section 5</h1>
            </section>
            <section className={`${styles.section} ${styles.section6}`} id='discount'>
               <h1>Section 6</h1>
            </section>
            <section className={`${styles.section} ${styles.section7}`} id='reviews'>
               <h1>Section 7</h1>
            </section>
            <section className={`${styles.section} ${styles.section8}`} id='contact'>
               <h1>Section 8</h1>
            </section>
         </div>
      </div>
   )
}

export default App
