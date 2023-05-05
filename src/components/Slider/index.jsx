import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './style.module.scss'
import { maxSlideIndex, paths, slideLength } from '../../data'
import { Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8 } from '../Slides'

function Slider({ slide, handleSlide }) {
   const [curPath, setCurPath] = useState('#welcome')
   const [isSliding, setSliding] = useState(false)
   const slideTrackRef = useRef(null)
   console.log('slide: ', slide)

   // SLIDER functions ------------------

   // set initial current path
   useEffect(() => {
      const url = new URL(window.location.href)
      setCurPath(url.hash)
   }, [])

   // set initial slide base on current path
   useEffect(() => {
      let index = curPath === '' ? 0 : paths.findIndex(path => path.path === curPath)
      handleSlide(index + 1, false)
   }, [curPath, handleSlide])

   useEffect(() => {
      slideTrackRef.current.style.marginTop = `calc(-100vh * ${slide})`
   }, [slide])

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

   return (
      <div className={styles.Slider}>
         <div className={styles.slideTrack} ref={slideTrackRef}>
            {/* first temporary */}
            <Slide8 temp />

            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
            <Slide5 />
            <Slide6 />
            <Slide7 />
            <Slide8 />

            {/* last temporary */}
            <Slide1 temp />
         </div>
      </div>
   )
}

export default Slider
