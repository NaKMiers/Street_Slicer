import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import SubSlide from '../SubSlide'
import styles from './style.module.scss'
import { subSlides } from '../../../data'

function Slide7() {
   const [isSliding, setSliding] = useState(false)
   const [slides, setSlides] = useState([...subSlides])
   const [active] = useState(false)
   const slideTrack = useRef(null)
   const slideLength = subSlides.length

   const [slide, setSlide] = useState(1)

   // change slide in interface
   useEffect(() => {
      slideTrack.current.style.marginLeft = `calc(-100% * ${slide - 1})`
   }, [slide])

   const nextSlide = useCallback(() => {
      if (!isSliding) {
         setSliding(true)
         if (slide === slideLength) {
            setSlide(1)
            slideTrack.current.style.transition = 'none'
            slides.unshift(slides.pop())
            setSlides(slides)

            setTimeout(() => {
               slideTrack.current.style.transition = 'all 0.8s ease-in-out 0.2s'
               setSlide(2)
            }, 0)

            setTimeout(() => {
               setSlide(1)
               slideTrack.current.style.transition = 'none'
               slides.push(slides.shift())
               setSlides(slides)

               setTimeout(() => {
                  slideTrack.current.style.transition = 'all 0.8s ease-in-out 0.2s'
               }, 10)
            }, 1010)
         } else {
            setSlide(slide + 1)
         }

         setTimeout(() => {
            setSliding(false)
         }, 1050) // slide duration: 1s
      }
   }, [isSliding, slide, slides, slideLength])

   const prevSlide = useCallback(() => {
      if (!isSliding) {
         setSliding(true)

         if (slide === 1) {
            setSlide(slideLength)
            slideTrack.current.style.transition = 'none'
            slides.push(slides.shift())
            setSlides(slides)

            setTimeout(() => {
               slideTrack.current.style.transition = 'all 0.8s ease-in-out 0.2s'
               setSlide(slideLength - 1)
            }, 0)

            setTimeout(() => {
               setSlide(slideLength)
               slideTrack.current.style.transition = 'none'
               slides.unshift(slides.pop())
               setSlides(slides)

               setTimeout(() => {
                  slideTrack.current.style.transition = 'all 0.8s ease-in-out 0.2s'
               }, 10)
            }, 1010)
         } else {
            setSlide(slide - 1)
         }

         setTimeout(() => {
            setSliding(false)
         }, 1050) // slide duration: 1s
      }
   }, [isSliding, slide, slides, slideLength])

   return (
      <section className={`${styles.section} ${styles.section7}`}>
         <div className={`${styles.main} ${active ? styles.active : ''}`}>
            <button className={`${styles.iconBtn} ${styles.left}`} onClick={prevSlide}>
               <FontAwesomeIcon icon={faAngleLeft} />
            </button>
            <button className={`${styles.iconBtn} ${styles.right}`} onClick={nextSlide}>
               <FontAwesomeIcon icon={faAngleRight} />
            </button>

            <div className={styles.slideTrack} ref={slideTrack}>
               {slides.map((subSlide, index) => (
                  <SubSlide data={subSlide} key={index} blur={slide !== index + 1} />
               ))}
            </div>
         </div>
      </section>
   )
}

export default Slide7
