import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './App.module.scss'
import Header from './components/Header'
import { maxSlideIndex, paths, slideLength } from './data'

function App() {
   const [curPath, setCurPath] = useState('#welcome')
   const [slide, setSlide] = useState(0)
   const [isSliding, setSliding] = useState(false)
   const slideTrackRef = useRef()
   console.log('slide: ', slide)

   // SLIDER functions ------------------

   // set initial current path
   useEffect(() => {
      const url = new URL(window.location.href)
      setCurPath(url.hash)
   }, [])

   // set initial slide base on current path
   useEffect(() => {
      let index = curPath === '' ? 1 : paths.findIndex(path => path.path === curPath)
      setSlide(index + 1)
   }, [curPath])

   const handleSlide = useCallback(value => {
      // update path url
      let index = value === 0 ? paths.length - 1 : value === maxSlideIndex ? 0 : value - 1
      const previousURL = window.location.href.split('/').slice(0, -1).join('/')
      const nextPath = paths[index].path
      window.location.href = previousURL + '/' + nextPath

      setSlide(value)
   }, [])

   const handleWheel = useCallback(
      e => {
         if (!isSliding) {
            setSliding(true)
            if (e.deltaY > 0) {
               // change to next slide
               // if last slide
               if (slide === slideLength) {
                  handleSlide(maxSlideIndex)
                  console.log(11111)

                  setTimeout(() => {
                     console.log(121321)
                     slideTrackRef.current.style.transition = 'none'
                     handleSlide(1)
                  }, 1010)

                  setTimeout(() => {
                     slideTrackRef.current.style.transition = 'all 1s ease-in-out'
                  }, 1050)
               } else {
                  handleSlide(slide + 1)
               }
            } else if (e.deltaY < 0) {
               // change to prev slide
               // if first slide
               if (slide === 1) {
                  handleSlide(0)
                  console.log(22222)

                  setTimeout(() => {
                     console.log(121321)
                     slideTrackRef.current.style.transition = 'none'
                     handleSlide(slideLength)
                  }, 1010)

                  setTimeout(() => {
                     slideTrackRef.current.style.transition = 'all 1s ease-in-out'
                  }, 1050)
               } else {
                  handleSlide(slide - 1)
               }
            }

            setTimeout(() => {
               setSliding(false)
            }, 1050) // slideTract duration 1s
         }
      },
      [handleSlide, isSliding, slide]
   )

   // change slide on wheel
   useEffect(() => {
      window.addEventListener('wheel', handleWheel)
      return () => {
         window.removeEventListener('wheel', handleWheel)
      }
   }, [handleWheel])

   // NAV SLIDER functions ------------------

   const handleShowSlideTitle = useCallback(e => {
      const elements = [...e.currentTarget.children]
      const div = elements[elements.length - 1]

      div.classList.remove(styles.hide)
      div.style.display = 'block'
      div.classList.add(styles.show)
   }, [])

   const handleHideSlideTitle = useCallback(e => {
      const elements = [...e.currentTarget.children]
      const div = elements[elements.length - 1]

      div.classList.remove(styles.show)
      div.classList.add(styles.hide)
      setTimeout(() => {
         div.style.display = 'none'
      }, 190) // duration: 0.2s
   }, [])

   const handleActiveNavSlider = useCallback(
      index =>
         slide === 0 ? index === paths.length - 1 : slide === 9 ? index === 0 : index === slide - 1,
      [slide]
   )

   return (
      <div className={styles.App}>
         {/* HEADER */}
         <Header handleSlide={handleSlide} />

         <div className={styles.navSlider}>
            <ul>
               {paths.map((path, index) => (
                  <li
                     key={path.path}
                     className={styles.slideNavItem}
                     onMouseOver={handleShowSlideTitle}
                     onMouseLeave={handleHideSlideTitle}
                     onClick={() => handleSlide(index + 1)}
                  >
                     <a href={path.path} className={handleActiveNavSlider(index) ? styles.active : ''}>
                        <span />
                     </a>
                     <div style={{ display: 'none' }}>{path.label}</div>
                  </li>
               ))}
            </ul>
         </div>

         <div className={styles.container}>
            <div
               className={styles.slideTrack}
               style={{ marginTop: `calc(-100vh * ${slide})` }}
               ref={slideTrackRef}
            >
               {/* 8 o */}
               <section className={`${styles.section} ${styles.section8}`}>
                  <h1>Section 8</h1>
               </section>

               <section className={`${styles.section} ${styles.section1}`}>
                  <h1>Section 1</h1>
               </section>
               <section className={`${styles.section} ${styles.section2}`}>
                  <h1>Section 2</h1>
               </section>
               <section className={`${styles.section} ${styles.section3}`}>
                  <h1>Section 3</h1>
               </section>
               <section className={`${styles.section} ${styles.section4}`}>
                  <h1>Section 4</h1>
               </section>
               <section className={`${styles.section} ${styles.section5}`}>
                  <h1>Section 5</h1>
               </section>
               <section className={`${styles.section} ${styles.section6}`}>
                  <h1>Section 6</h1>
               </section>
               <section className={`${styles.section} ${styles.section7}`}>
                  <h1>Section 7</h1>
               </section>
               <section className={`${styles.section} ${styles.section8}`}>
                  <h1>Section 8</h1>
               </section>

               {/* 1 x */}
               <section className={`${styles.section} ${styles.section1}`}>
                  <h1>Section 1</h1>
               </section>
            </div>
         </div>
      </div>
   )
}

export default App
