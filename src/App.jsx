import React, { useCallback, useState } from 'react'
import styles from './App.module.scss'
import Header from './components/Header'
import NavSlider from './components/NavSlider'
import Slider from './components/Slider'
import { maxSlideIndex, paths } from './data'

function App() {
   const [slide, setSlide] = useState(1)

   const handleSlide = useCallback((value, updatePath = true) => {
      // update path url
      if (updatePath) {
         console.log('updatePath')
         let index = value === 0 ? paths.length - 1 : value === maxSlideIndex ? 0 : value - 1
         const previousURL = window.location.href.split('/').slice(0, -1).join('/')
         const nextPath = paths[index].path
         window.location.href = previousURL + '/' + nextPath
      }

      setSlide(value)
   }, [])

   return (
      <div className={styles.App}>
         {/* HEADER */}
         <Header handleSlide={handleSlide} />

         {/* NAV SLIDER */}
         <NavSlider slide={slide} handleSlide={handleSlide} />

         {/* SLIDER */}
         <Slider slide={slide} handleSlide={handleSlide} />
      </div>
   )
}

export default App
