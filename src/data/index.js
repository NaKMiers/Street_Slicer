import avt1 from '../assets/imgs/avt1.jpg'
import avt2 from '../assets/imgs/avt2.jpg'
import avt3 from '../assets/imgs/avt3.jpg'

export const paths = [
   { path: '#welcome', label: 'Welcome', default: true },
   { path: '#specs', label: 'Specsifications' },
   { path: '#wheels', label: 'Wheels' },
   { path: '#in-action', label: 'In Action' },
   { path: '#choose-yours', label: 'Choose Yours' },
   { path: '#discount', label: 'Discount' },
   { path: '#reviews', label: 'Reviews' },
   { path: '#contact', label: 'Contact' },
]

export const slideLength = paths.length

export const maxSlideIndex = slideLength + 2 - 1

export const subSlides = [
   {
      avatar: avt1,
      name: 'Alex Burns',
      role: 'Creatvive Heads Inc.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
      avatar: avt2,
      name: 'Alex Burns',
      role: 'Creatvive Heads Inc.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
      avatar: avt3,
      name: 'Alex Burns',
      role: 'Creatvive Heads Inc.',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
]
