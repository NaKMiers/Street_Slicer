import React, { useCallback } from 'react'
import styles from './style.module.scss'
import { paths, maxSlideIndex } from '../../data'

function NavSlider({ slide, handleSlide }) {
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
         slide === 0
            ? index === paths.length - 1
            : slide === maxSlideIndex
            ? index === 0
            : index === slide - 1,
      [slide]
   )

   return (
      <div className={styles.NavSlider}>
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
   )
}

export default NavSlider
