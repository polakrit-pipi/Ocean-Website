import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'

const Model = (props) => {
    const { scene } = useGLTF('/assets/Turtle.glb')
    
}

const Project = () => {
  return (
    <div id='projects' className='w-full h-screen'>
        <div className='flexCenter'>
            <div className='flexCenter w-full h-screen bg-cover bg-fixed bg-gradient-to-r from-cyan-500 to-blue-500' >
                <div className='flex flex-row border-4 w-[140vh] h-[70vh] rounded-[80px] my-[15vh] mx-auto bg-white'>
                    
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Project