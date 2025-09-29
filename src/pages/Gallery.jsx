// import { useState } from 'react'
// import bg from '/backgroundImage.png'
// // import trinity_logo from '../assets/trinity_logo.png'
// import DomeGallery from '../components/DomeGallery'

// const SHORTLISTED_IMPORTS = import.meta.glob(
//   '../assets/Shortlisted pics/**/*.{jpg,JPG,png,PNG,jpeg,JPEG}',
//   { eager: true, import: 'default' }
// )

// // shuffle the images randomly
// const shuffleArray = (array) => {
//   const shuffled = [...array]
//   for (let i = shuffled.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
//   }
//   return shuffled
// }

// const SHORTLISTED_IMAGES = shuffleArray(
//     Object.values(SHORTLISTED_IMPORTS).map((src) => ({ src, alt: '' }))
// )

// console.log(`Total images loaded: ${SHORTLISTED_IMAGES.length}`)


// const Gallery = () => {
//     return (
//         <div className='relative w-full min-h-screen flex flex-col items-center'>
//             <div className='fixed inset-0 bg-cover bg-center' style={{ backgroundImage: `url(${bg})`}}></div>

//             {/* <div className='relative z-10 flex flex-col items-center pt-5 '>
//                 {/* <img src={trinity_logo} alt='Trinity Logo' className='w-24 h-auto'></img> */}
//             {/* </div> */} */
            
//             <div className="relative z-10 mt-20 sm:mt-24  w-full">
//                 <div className='w-full h-[85vh] flex justify-center items-start'>
//                     <DomeGallery
//                       images={SHORTLISTED_IMAGES}
//                       fit={1.8}
//                       fitBasis="width"
//                       padFactor={0.1}
//                       minRadius={500}
//                       maxRadius={1600}
//                       overlayBlurColor="rgba(0,0,0,0.4)"
//                       showVignette={false}
//                       grayscale={false}
//                       verticalSpan={6}
//                       segments={25}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Gallery

import { useState, useEffect } from 'react'
import bg from '/backgroundImage.png'
import DomeGallery from '../components/DomeGallery'

const SHORTLISTED_IMPORTS = import.meta.glob(
  '../assets/Shortlisted pics/**/*.{jpg,JPG,png,PNG,jpeg,JPEG}',
  { eager: true, import: 'default' }
)

// shuffle the images randomly
const shuffleArray = (array) => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const SHORTLISTED_IMAGES = shuffleArray(
  Object.values(SHORTLISTED_IMPORTS).map((src) => ({ src, alt: '' }))
)

console.log(`Total images loaded: ${SHORTLISTED_IMAGES.length}`)

const Gallery = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // 2 sec loader
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center">
      <div
        className="fixed inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>

      {loading ? (
        // Loader screen
        <div className="flex items-center justify-center min-h-screen relative z-20">
          <div className="w-16 h-16 border-4 border-[#DBAB6A] border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        // Gallery content
        <div className="relative z-10 mt-20 sm:mt-24 w-full">
          <div className="w-full h-[85vh] flex justify-center items-start">
            <DomeGallery
              images={SHORTLISTED_IMAGES}
              fit={1.8}
              fitBasis="width"
              padFactor={0.1}
              minRadius={500}
              maxRadius={1600}
              overlayBlurColor="rgba(0,0,0,0.4)"
              showVignette={false}
              grayscale={false}
              verticalSpan={6}
              segments={25}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery