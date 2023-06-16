import React from 'react'
import { BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill } from 'react-icons/bs'

const Work = () => {
  return (
   <div id='work' className="w-full h-screen ">
        <div className="flexCenter  md:flex-col">
            <div className=' border-4 w-[140vh] h-[70vh] self-center rounded-[80px] my-[15vh] ' >

            <div className=" flex flex-row justify-between my-[50vh]">
           
                <a href="#slide4">
                <BsFillArrowLeftCircleFill size={30} />
                </a>
               
             <a href="#slide2">
             <BsFillArrowRightCircleFill size={30}/>
             </a>
    
                </div>            



                </div>

        </div>

   </div>
  )
}

export default Work