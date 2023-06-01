import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className={`text-sm text-center py-3 w-[100%] ${isDarkMode?'text-white bg-black':'text-black bg-white'}`}>
      <h1 className=' font-lora'>Created with ❤️ By pratap </h1>
    </div>
  )
}

export default Footer
