import React, { useState } from "react";
import women from "../assets/women-laptop.gif";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    work: "",
    phone: "",
    password: "",
    cpassword: ""
  });

  let name, value;

  const handelInputs = (e)=>{
  console.log(e)
  name= e.target.name;
  value= e.target.value;

  setUser({...user,[name]:value})
  }

  const PostData = async(e)=>{
    e.preventDefault();

    const { name, email, work, phone, password, cpassword} = user;
    const res = await fetch('/register',{
      method:"POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name, email, work, phone, password, cpassword
      })
    });

    const data = await res.json();

    if(res.status === 422 || !data){
    window.alert('Invalid Registration');
    console.log('Invalid Registration');
    }else{
      window.alert('Registration Successfull');
      console.log('Successfull Registration');
      navigate('/login')
    }

  }


  return (
    <>
      <div className="main flex flex-col justify-center items-center h-[100vh] md:flex-row xl:w-[100%] md:px-32 my-14 sm:my-0">
        <div className="first flex justify-around items-center p-3 flex-col md:min-h-[70%] rounded-t-lg w-[80%]   bg-[rgba(241,245,254,255)] md:rounded-r-none md:rounded-l-lg  border-2 border-b-0 shadow-md md:border-r-0">
          <h1 className=" font-piazzolla text-xl text-blue-950 mx-4">
            Welcome In{" "}
            <span className=" font-piazzolla text-green-600">Weather</span> App{" "}
          </h1>
          <img
            className="h-48 w-[100%] md:h-[100%] md:w-[100%] rounded-t-lg xl:h-[90%] xl:w-[100%] 2xl:h-[80%] 2xl:w-[60%]"
            src={women}
            alt=""
          />
        </div>
        <div className=" md:min-h-[70%]  flex flex-col items-start justify-around border-1 bg-white p-3 w-[80%] rounded-b-lg md:rounded-l-none md:rounded-r-lg border-2 border-t-0 shadow-md md:border-l-0 md:border-t-2 ">
          <div>
            <h2 className="  text-3xl  font-extrabold text-blue-950 ">
              Sign Up
            </h2>
            <p className=" font-piazzolla py-2 px-1 text-green-300">
              Please Sign Up to continue
            </p>
          </div>
          <div className="flex flex-col space-y-2 w-[100%]  items-center my-4 mx-auto ">
            <form method="POST">
            <input
              className="w-[100%] px-2 py-1 my-2 border-2 border-gray-200 rounded-md placeholder:text-gray-300 outline-none"
              type="text"
              name="name"
              value={user.name}
              onChange={handelInputs}
              placeholder="Name"
            />
            <input
              className="w-[100%] px-2 py-1 my-2 border-2 border-gray-200 placeholder:text-gray-300 rounded-md outline-none"
              type="email"
              name="email"
              value={user.email}
              onChange={handelInputs}
              placeholder="email"
            />
            <input
              className="w-[100%] px-2 py-1 my-2 border-2 border-gray-200 rounded-md placeholder:text-gray-300 outline-none"
              type="text"
              name="work"
              value={user.work}
              onChange={handelInputs}
              placeholder="work"
            />
            <input
              className="w-[100%] px-2 py-1 my-2 border-2 border-gray-200 rounded-md placeholder:text-gray-300 outline-none"
              type="number"
              name="phone"
              value={user.phone}
              onChange={handelInputs}
              placeholder="phone"
            />
            <input
              className="w-[100%] px-2 py-1 my-2 border-2 border-gray-200 rounded-md placeholder:text-gray-300 outline-none"
              type="password"
              name="password"
              value={user.password}
              onChange={handelInputs}
              placeholder="password"
            />
            <input
              className="w-[100%] px-2 py-1 my-2 border-2 border-gray-200 rounded-md placeholder:text-gray-300 outline-none"
              type="password"
              name="cpassword"
              value={user.cpassword}
              onChange={handelInputs}
              placeholder="confirm-password"
            />
             <button className=" bg-blue-600 border-none hover:bg-blue-400 rounded-md text-white font-poppins px-12 py-2 w-[100%] mt-4" onClick={PostData}>
            Register
          </button>
            </form>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Signup;
