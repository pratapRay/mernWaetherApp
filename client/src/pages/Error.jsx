import React from 'react'
import error2 from '../assets/error.png'
import error  from '../assets/4041.gif'
const Error = () => {
  return (
    // <div className='   h-[100vh] flex justify-center items-center w-[100%] mb-36  sm:mb-36 md:56'>
    <div class="flex flex-col h-screen justify-between sm:mb-80 md:mb-80">
      <div className="  flex flex-col justify-center  items-center  m-auto px-12 py-12  ">
      <img className=' h-56 md:h-80' src={error} alt="" />
      <div className=' flex justify-center items-center flex-col '>
        <img src={error2} alt="" />
        <button className='bg-green-600 text-xs px-6 py-2 md:text-xl md:px-8 md:py-2 uppercase text-white rounded-md -mt-8'> <a href="/">Back </a></button>
       </div>
      
        
     
       
      </div>
     
    </div>
  )
}

export default Error
