import avt1 from '../assets/imgs/avt1.jpg'
import avt2 from '../assets/imgs/avt2.jpg'
import avt3 from '../assets/imgs/avt3.jpg'
import avt4 from '../assets/imgs/avt4.jpg'

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
      name: 'Oliver Martinez',
      role: 'Creative Heads Inc.',
      text: 'Creativity is breaking down the box and creating a new world.',
   },
   {
      avatar: avt2,
      name: 'Grace Kim',
      role: 'Creative Heads Inc.',
      text: 'Design is not just what it looks like and feels like. Design is how it works.',
   },
   {
      avatar: avt3,
      name: 'Ethan Baker',
      role: 'Creative Heads Inc.',
      text: 'The best way to predict the future is to create it.',
   },
   {
      avatar: avt4,
      name: 'Anh Khoa Nguyen',
      role: 'Full Stack Developer',
      text: "I'm Possible!",
   },
]
