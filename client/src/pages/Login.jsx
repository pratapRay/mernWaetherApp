import React, { useContext, useState } from "react";
import women from "../assets/women-laptop.gif";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {

  const {state,dispatch} = useContext(UserContext);

  const navigate = useNavigate();
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const loginUser = async (e)=>{
      e.preventDefault();

      const res = await fetch('/login',{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })

      });

      const data = await res.json();

      if(res.status === 400 || !data){
        window.alert('Invalid Login')
        console.log('login Invalid');
      }else{
        dispatch({type:'USER', payload:true});
        window.alert('Successfull Login');
        console.log('Login Successfull');
        navigate('/');
      }
  }

  return (

    <>
      <div className="main flex flex-col justify-center items-center h-[100vh] md:flex-row xl:w-[100%] md:px-32 ">
        <div className="first flex justify-around items-center p-3 flex-col md:min-h-[70%] rounded-t-lg w-[80%]   bg-[rgba(241,245,254,255)] md:rounded-r-none md:rounded-l-lg  border-2 border-b-0 shadow-md md:border-r-0">
          <h1 className=" font-piazzolla text-2xl text-blue-950 mx-4">
            Welcome In{" "}
            <span className=" font-piazzolla text-green-600">Weather</span> App{" "}
          </h1>
          <img
            className="h-48 w-[100%] md:h-[100%] md:w-[100%] rounded-t-lg xl:h-[90%] xl:w-[100%] 2xl:h-[80%] 2xl:w-[60%]"
            src={women}
            alt=""
          />
        </div>
        <div className="second md:min-h-[70%]  flex flex-col items-start justify-around border-1 bg-white p-3 w-[80%] rounded-b-lg md:rounded-l-none md:rounded-r-lg border-2 border-t-0 shadow-md md:border-l-0 md:border-t-2 ">
          <div>
            <h2 className="  text-3xl  font-extrabold text-blue-950 ">Login</h2>
            <p className=" font-piazzolla py-2 px-1 text-green-300">
              Please login to continue
            </p>
          </div>
          <div className="flex flex-col space-y-2 w-[100%] items-center my-4 mx-auto ">
            <form method="POST" className="w-[100%]">
              <input
                className="w-[100%] px-2 py-3 my-2 border-2 border-gray-200 rounded-md placeholder:text-gray-300 outline-none"
                type="text"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="email"
              />
              <input
                className="w-[100%] px-2 py-3 my-2 border-2 border-gray-200 placeholder:text-gray-300 rounded-md outline-none"
                type="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="password"
              />
              <button className="bg-blue-600 border-none hover:bg-blue-400 rounded-md text-white font-poppins px-12 py-2 w-[100%] mt-10" onClick={loginUser}>
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
