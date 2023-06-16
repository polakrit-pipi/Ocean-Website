import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col gap-10 pt-10'>
        <h1 className="text-5xl font-bold text-center"> 
    Ocean Pal
  </h1>
  <div className='flex flex-col items-center gap-10'>
  <button className="btn">Hello daisyUI</button>
  <button className="btn">Hello LazyUI</button>

  </div>
  </div>
  )
}

export default Header