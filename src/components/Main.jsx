import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaFacebookF , FaTwitter , FaInstagram , FaLinkedin } from 'react-icons/fa'
import Logo from '../assets/oceanpal_logo.png'

const Main = () => {
  return (
    <div id="main">
        <img className='flex w-full h-screen bg-cover bg-right bg-fixed bg-tur ' alt="/" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
              <img className='pb-5 pl-14' src={Logo} alt="" />
                {/* <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>OceanPal</h1> */}
                <h2 className='flex  primaryText'>
                    WE WILL
                    <TypeAnimation
      sequence={[
        '"PRESERV"',
        1800, 
        '"CONSERV"',
        1800,
        '"PROTECT"',
        1800,
      ]}
      wrapper="div"  
      speed={50}
      style={{ fontSize: '1em', paddingLeft: '5px' }}
      repeat={Infinity}
    />
                </h2>
                <div className='flex justify-between pt-6 w-full max-w-[200px]'>
                    {/* <FaTwitter className='cursor-pointer'  size={20}/>
                    
                    <FaFacebookF  className='cursor-pointerr' size={20}/>
                    <FaInstagram className='cursor-pointer'  size={20}/>
                    <FaLinkedin  className='cursor-pointer' size={20}/> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main