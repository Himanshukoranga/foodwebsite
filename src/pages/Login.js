import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router";
import toast from 'react-hot-toast';

// import { Link, useNavigate } from "react-router-dom";
// import toast from 'react-hot-toast';
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"


const Login = ({setIsLoggedIn}) => {

  const navigator=useNavigate();
  const [formData, setFormData] = useState({
    email: "", password: ""
  })

  function changeHandler(event) {
    setFormData((prev) => (
      {
        ...prev,
        [event.target.name]: event.target.value
      }
    ))
  }

  function submitHandler(event){
        event.preventDefault();
        toast.success("Logged In");
        navigator("/");
        setIsLoggedIn(true);

        
  }

  return (
    <div className="mt-[100px] w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 Login flex justify-center  ">
      <div className="w-[50%] h-[60%] mt-10 bg-white p-10 rounded-xl  shadow-[0_4px_8px_0px_rgba(0,0,0,0.2),0_6px_20px_0px_rgba(0,0,0,0.19)]">
        <div className="text-center text-3xl font-bold">
          <p>Login</p>
        </div>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
          <label>
            <p className="text-[20px] font-medium">
              Email Address
              <sup className="text-blue-500 font-medium">*</sup>
            </p>
            <input
              className="bg-white border-b-[2px] outline-none  w-full p-[12px] text-black  hover:border-b-blue-300"
              required
              type="email"
              value={formData.email}
              onChange={changeHandler}
              name="email"
              placeholder="E-mail"
            />

          </label>

          <label>
            <p className="text-[20px] font-medium">
              Password <sup className="text-blue-500 font-medium">*</sup>
            </p>
            <input
              className="bg-white border-b-[2px] outline-none  w-full p-[12px] text-black hover:border-b-blue-300"
              required
              type="password"
              value={formData.password}
              onChange={changeHandler}
              name="password"
              placeholder="Password"
            />

          </label>

          <button className="w-[90%] rounded-3xl self-center bg-yellow-50 py-[8px] px-[12px]  mt-6 font-medium text-black lognow-btn">
            <span className="text">Login</span>
          </button>

          <div className="self-center font-medium">
            <p >Not A Member? <span onClick={()=>{navigator("/signup")}} className="ml-2 text-blue-600">Signup</span></p>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Login