import React from 'react'
import Image from 'next/image'
import img1 from "@/public/assets/download (1).jpeg"
import img2 from "@/public/assets/download (2).jpeg"
import img3 from "@/public/assets/download (3).jpeg"
const LandingPage = () => {
  return (
    <div>
      <div className='columns-2 sm:columns-3 px-3 gap-3'>
        <Image className='aspect-square' src={img1} alt="aspext"/>
        <Image className='aspect-auto' src={img2} alt="aspext"/>
        <Image className='aspect-auto' src={img3} alt="aspext"/>
        <Image className='aspect-auto' src={img2} alt="aspext"/>
        <Image className='aspect-auto' src={img3} alt="aspext"/>
        
      </div>
    </div>
  )
}

export default LandingPage