import React, { useState,useEffect,useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from "../App";

const Navbar = ({isDarkMode,setIsDarkMode}) => {

   const {state, dispatch} = useContext(UserContext);

  const[isMenuOpen,setIsMenuOpen]=useState(false);
  // const[isDarkMode,setIsDarkMode] = useState(false);

  const onToggleMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  const onToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  useEffect(() => {
    // Set dark mode class on the body element based on the isDarkMode prop
    if (isDarkMode) {
      document.body.classList.add('bg-white');
    } else {
      document.body.classList.remove('bg-white');
    }
  }, [isDarkMode]);

 const RenderMenu = ()=>{
  if(state){
    return (
      <>
                  <li className='font-piazzolla hover:text-gray-400'><Link to="/">Home</Link ></li>
                  <li className='font-piazzolla hover:text-gray-400'><Link to="/weather">Weather</Link ></li>
                  <li className='font-piazzolla hover:text-gray-400'><Link to="/profile">Profile</Link ></li>
                  <div className='flex flex-col space-y-6 items-center md:flex-row  md:space-y-0 md:space-x-6'>
                  <li className='font-piazzolla hover:text-gray-400'><Link to="/logout">Logout</Link></li>
                  <li className='font-piazzolla hover:text-gray-400'> <ion-icon class=" hidden md:inline-block cursor-pointer text-1xl z-10 border-2 rounded-full px-1 py-2 text-white  hover:text-gray-400  hover:border-black"  onClick={onToggleDarkMode} name={isDarkMode ?"moon-outline":"sunny-outline"}></ion-icon>
                   </li>
                
                  </div>
      </>
    )
  }else{
    return (
      <>
                  <li className='font-piazzolla hover:text-gray-400'><Link to="/">Home</Link ></li>
                  <li className='font-piazzolla hover:text-gray-400'><Link to="/weather">Weather</Link ></li>
                  <li className='font-piazzolla hover:text-gray-400'><Link to="/profile">Profile</Link ></li>
                  <div className='flex flex-col space-y-6 items-center md:flex-row  md:space-y-0 md:space-x-6'>
                  <li className='font-piazzolla hover:text-gray-400'><Link to="/login">Login</Link></li>
                  <li className='font-piazzolla hover:text-gray-400'><Link to="/signup">Signup</Link></li>
                  <li className='font-piazzolla hover:text-gray-400'> <ion-icon class=" hidden md:inline-block cursor-pointer text-1xl z-10 border-2 rounded-full px-1 py-2 text-white  hover:text-gray-400  hover:border-black"  onClick={onToggleDarkMode} name={isDarkMode ?"moon-outline":"sunny-outline"}></ion-icon>
                   </li>
                
                  </div>
                  
      </>
    )
  }
 }
  return (
    <>
    <header className='bg-sky-950'>
    
        <nav className='flex justify-between px-5 py-2 m-auto w-[92%] md:flex-row md:justify-between items-center'>
            <div className="z-20 cursor-pointer">
                <div className='text-3xl text-white z-10 font-lora py-3 flex items-center gap-2 '>
                <ion-icon class="text-blue-300 animate-spin" name="snow-outline"></ion-icon>
               <Link className='text-white z-10 font-lora' to="/"> Weather</Link >
                <ion-icon class="text-blue-300 animate-spin"  name="snow-outline"></ion-icon>
                </div>
            </div>
            <div className={`nav-links ${isMenuOpen ? 'top-[8.25%]' : '-top-[100%]'}  duration-300 md:static absolute min-h-[60vh] md:min-h-fit -top-[100%] bg-sky-950  left-0 flex  justify-center md:justify-end w-full mx-auto px-12 py-4 z-10`}>
                <ul className='flex flex-col items-center justify-center md:gap-[2vw]  text-1xl text-white  md:flex-row gap-8'>
                  <RenderMenu/>
                </ul>
            </div>
            <div className="md:hidden cursor-pointer space-x-2">
                <ion-icon class="text-1xl z-10 border-2 rounded-full px-1 py-1 text-white  hover:text-gray-400  hover:border-gray-400" onClick={onToggleDarkMode} name={isDarkMode ?"moon-outline":"sunny-outline"}></ion-icon>
                <ion-icon class="text-3xl z-10 text-white hover:text-gray-400" onClick={onToggleMenu} name={isMenuOpen ?"close-outline":"menu-outline"}></ion-icon>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar
