import React, { useState } from 'react'
import profileImg from '../assets/profil3.gif'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Profile = ({isDarkMode}) => {
  const navigate = useNavigate()
  const [userData,setUserData] = useState(" ");

  const callProfilePage = async ()=>{
    try {
      const res = await fetch('/api/getData',{
          method:'GET',
          headers:{
            Accept: 'application/json',
            'Content-Type':'application/json'
          },
          credentials:'include'
      })

      const data = await res.json();
      // console.log(data);
      setUserData(data);

      if(!res.status === 200){
        const error = new Error(res.error);
        throw error;
      }
    }catch (error) {
      console.log(error);
      navigate('/login')
    }
  }

  useEffect(() =>{
    callProfilePage();
  },[])
  
  return (
    <>
  <form method='GET'>
<div className="container mx-auto overflow-hidden px-3">

      <div className=" text-white md:grid md:grid-cols-2 md:content-center md:place-content-around md:gap-0 h-[100vh] w-[100%] mx-auto overflow-y-hidden flex flex-col justify-center items-center  ">
    
      <div className="  w-[80%] mx-auto ">
      
      <img  src={profileImg} alt="" />

        </div>
        <div className="first-col flex flex-col justify-center items-start w-[80%] mx-10 my-9">
       <p className={` font-piazzolla mb-5 text-3xl ${isDarkMode?'text-gray-800':'text-white'}`}>Welcome to <span className=' text-green-400 text-4xl font-piazzolla'>Weather</span> App</p>
       <p className={`text-xl md:text-2xl my-2 ${isDarkMode?'text-black':'text-white'}`}><ion-icon name="person-outline"></ion-icon> <span className={`font-piazzolla uppercase px-2 ${isDarkMode?'text-black':'text-white'}`}>{userData.name}</span></p>
       <p className={`text-xl md:text-2xl my-2 ${isDarkMode?'text-black':'text-white'}`}><ion-icon name="construct-outline"></ion-icon> <span className={`font-piazzolla uppercase px-2 ${isDarkMode?'text-black':'text-white'}`}>{userData.work}</span></p>
       <p className={`text-xl md:text-2xl my-2 ${isDarkMode?'text-black':'text-white'}`}><ion-icon name="mail-outline"></ion-icon> <span className={` font-piazzolla px-2 ${isDarkMode?'text-black':'text-white'}`}>{userData.email}</span></p>
       <p className={`text-xl md:text-2xl my-2 ${isDarkMode?'text-black':'text-white'}`}><ion-icon name="call-outline"></ion-icon> <span className={`font-piazzolla uppercase px-2 ${isDarkMode?'text-black':'text-white'}`}>{userData.phone}</span></p>
       <button className='bg-gradient-to-r from-cyan-500 to-blue-500 uppercase p-1 mt-6 px-3 rounded-lg  hover:text-black font-lora '><Link to="/weather"> check now </Link></button>
        </div>
        
      </div>
      </div>
      </form>

 
    </>
  )
}

export default Profile

