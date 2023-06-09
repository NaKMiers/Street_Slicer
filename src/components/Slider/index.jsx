import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import { maxSlideIndex, paths, slideLength } from '../../data'
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8 } from '../Slides'

function Slider({ slide, handleSlide, isMenuOpen }) {
   const [curPath, setCurPath] = useState('#welcome')
   const [isSliding, setSliding] = useState(false)
   const [seenSlides, setSeenSlides] = useState([])
   const slideTrackRef = useRef(null)

   // SLIDER functions ------------------

   // set initial current path
   useEffect(() => {
      const url = new URL(window.location.href)
      setCurPath(url.hash)
      const path = paths.find(path => path.path === url.hash)
      if (path) {
         document.title = path.label
      }
   }, [])

   // set initial slide base on current path
   useEffect(() => {
      let index = curPath === '' ? 0 : paths.findIndex(path => path.path === curPath)
      handleSlide(index + 1, false)
   }, [curPath, handleSlide])

   // update slide
   useEffect(() => {
      slideTrackRef.current.style.marginTop = `calc(-100vh * ${slide})`
   }, [slide])

   const nextSlide = useCallback(() => {
      // change to next slide
      // if last slide
      if (slide === slideLength) {
         handleSlide(maxSlideIndex)

         setTimeout(() => {
            slideTrackRef.current.style.transition = 'none'
            handleSlide(1)
         }, 1010)

         setTimeout(() => {
            slideTrackRef.current.style.transition = 'all 1s ease-in-out'
         }, 1050)
      } else {
         handleSlide(slide + 1)
      }
   }, [handleSlide, slide])

   const prevSlide = useCallback(() => {
      // change to prev slide
      // if first slide
      if (slide === 1) {
         handleSlide(0)

         setTimeout(() => {
            slideTrackRef.current.style.transition = 'none'
            handleSlide(slideLength)
         }, 1010)

         setTimeout(() => {
            slideTrackRef.current.style.transition = 'all 1s ease-in-out'
         }, 1050)
      } else {
         handleSlide(slide - 1)
      }
   }, [handleSlide, slide])

   const handleWheel = useCallback(
      e => {
         if (!isSliding && !isMenuOpen) {
            setSliding(true)
            if (e.deltaY > 0) {
               nextSlide()
            } else if (e.deltaY < 0) {
               prevSlide()
            }

            setTimeout(() => {
               setSliding(false)
            }, 1050) // slideTract duration 1s
         }
      },
      [isSliding, isMenuOpen, nextSlide, prevSlide]
   )

   const handleKeyDown = useCallback(
      e => {
         if (!isSliding) {
            setSliding(true)
            if (e.keyCode === 40) {
               nextSlide()
            } else if (e.keyCode === 38) {
               prevSlide()
            }
            setTimeout(() => {
               setSliding(false)
            }, 1050) // slideTract duration 1s
         }
      },
      [isSliding, nextSlide, prevSlide]
   )

   // change slide on wheel
   useEffect(() => {
      // handle slide on wheel and press arrow keys
      window.addEventListener('wheel', handleWheel)
      window.addEventListener('keydown', handleKeyDown)

      return () => {
         window.removeEventListener('wheel', handleWheel)
         window.removeEventListener('keydown', handleKeyDown)
      }
   }, [handleWheel, handleKeyDown])

   return (
      <div className={styles.Slider}>
         <div className={styles.slideTrack} ref={slideTrackRef}>
            {/* first temporary */}
            <Slide8 temp />

            <Slide1 active={slide === 1} seenSlides={seenSlides} setSeenSlides={setSeenSlides} />
            <Slide2 active={slide === 2} seenSlides={seenSlides} setSeenSlides={setSeenSlides} />
            <Slide3 active={slide === 3} seenSlides={seenSlides} setSeenSlides={setSeenSlides} />
            <Slide4 active={slide === 4} seenSlides={seenSlides} setSeenSlides={setSeenSlides} />
            <Slide5 active={slide === 5} seenSlides={seenSlides} setSeenSlides={setSeenSlides} />
            <Slide6 active={slide === 6} seenSlides={seenSlides} setSeenSlides={setSeenSlides} />
            <Slide7 active={slide === 7} seenSlides={seenSlides} setSeenSlides={setSeenSlides} />
            <Slide8 active={slide === 8} seenSlides={seenSlides} setSeenSlides={setSeenSlides} />

            {/* last temporary */}
            <Slide1 temp />
         </div>
      </div>
   )
}

export default Slider
