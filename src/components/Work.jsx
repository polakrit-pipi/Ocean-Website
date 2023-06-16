import React from 'react'
import { BsFillArrowLeftCircleFill , BsFillArrowRightCircleFill } from 'react-icons/bs'
import Image1 from '../assets/Image1.png'
const Work = () => {
  return (
   <div id='work' className="w-full h-screen" style={{backgroundColor: '#142738'}}>  
        <div className="flexCenter md:flex-col"> 
            <div className=' border-4 w-[90%] h-[70vh] self-center rounded-[80px] my-[15vh] 'style={{backgroundColor: "#dee1e3"}} >


            <div className="img-container flex flex-col md:flex-row justify-between mx-[5%] my-[3%]">
                <h1 className='primaryText my-[10%]'>HomePage</h1>
             <img className='w-[20%] rounded-2xl' src={Image1} alt="" />
            </div>


            <div className=" flex flex-row justify-between my-[50vh]">

                <a href="#slide4">
                <BsFillArrowLeftCircleFill size={40} />
                </a>
               
             <a href="#slide2">
             <BsFillArrowRightCircleFill size={40}/>
             </a>
    
                </div>            



                </div>

        </div>

   </div>
  )
}

export default Work