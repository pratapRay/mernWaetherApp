import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../assets/ccc.json'
import { Link } from 'react-router-dom';

const Home = ({isDarkMode}) => {
  
  return (
    <>
    
<div className="container mx-auto overflow-hidden px-3">
    
      <div className=" text-white md:grid md:grid-cols-2 md:content-center md:place-content-around md:gap-0 h-[100vh] w-[100%] mx-auto overflow-y-hidden flex flex-col justify-center items-center  ">
        <div className="first-col flex flex-col justify-center items-start w-[80%] mx-10 my-9">
       <p className={`text-xl font-lora mb-5 ${isDarkMode?'text-gray-800':'text-white'}`}>Welcome to weather App</p>
       <h1 className={`text-5xl font-lora my-2 ${isDarkMode?'text-black':'text-white'}`}>Get The Latest <span className=' text-green-400 font-lora font-bold'>Weather</span> In Your City </h1>
       <button className='bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-1 mt-6 px-3 rounded-lg  hover:text-black font-lora '><Link to="/weather">check now</Link></button>
        </div>
        <div className="second-col  w-[80%] mx-auto ">
        <Lottie animationData={animationData}/>
        </div>
      </div>
   
</div>
    </>
  )
}

export default Home
