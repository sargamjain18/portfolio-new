import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='py-16 bg-[#0f0715]'>
      <div>
        <Image src="/images/logo.png" alt='logo' width={180} height={180} className='mx-auto'/>
      </div>
      <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold'>
        <div>Home.</div>
        <div>About.</div>
        <div>Project.</div>
        <div>Contact.</div>
      </div>
      <p className='mt-6 text-center text-gray-400'>@ 2025 All right reserved</p>
    </div>
  )
}

export default Footer
