import React from 'react'

// images
import MainBannerImage from './assets/fleabag.jpg';
// eslint-disable-next-line no-unused-vars
import fightCImage from './assets/fightC.jpg'

const App = () => {
  return (
    <div className='bg-black-1 flex flex-col justify-center items-center md:max-h-screen min-h-screen gap-5 py-5'>
      <p className='text-image-color-1 font-medium'>Coming soon.</p>
      <div className='flex justify-center items-center overflow-hidden'>
        <img src={MainBannerImage} alt='' />
      </div>
      <div className='flex flex-col items-center gap-1'>
        <p className='text-image-color-2 font-medium opacity-60'>Saumya Dubey</p>
        <div className='h-[2px] w-5 bg-image-color-2 opacity-60'></div>
      </div>
    </div>
  )
}

export default App