import React, { useState } from "react";
import './Login.css'
import { useNavigate } from "react-router";
import toast from "react-hot-toast";


const Signup = ({setIsLoggedIn}) => {
  const navigator=useNavigate();
  const [formData, setFormData] = useState({
    email: "", password: "",name:""
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
    <div className="mt-[100px] w-full h-full bg-[#803adc] Login flex justify-center  ">
      <div className="w-[50%] h-[75%] mt-10 bg-white p-10 rounded-xl shadow-2xl shadow-[#0C3E89]">
        <div className="text-center text-3xl font-bold mb-3">
          <p>Signup</p>
        </div>
        <form onSubmit={submitHandler} className="flex flex-col gap-5">
        <label>
            <p className="text-[20px] font-medium">
              Name 
              <sup className="text-blue-500 font-medium">*</sup>
            </p>
            <input
              className="bg-white border-b-[2px] outline-none  w-full p-[12px] text-black  hover:border-b-blue-300"
              required
              type="text"
              value={formData.name}
              onChange={changeHandler}
              name="name"
              placeholder="Name"
            />

          </label>

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
              Create Password <sup className="text-blue-500 font-medium">*</sup>
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
            <span className="text">Signup</span>
          </button>

          <div className="self-center font-medium">
            <p >Already A Member? <button onClick={()=>{navigator("/login")}} className="ml-2 text-blue-600">Login</button></p>
          </div>

        </form>
      </div>

    </div>
  )
}

export default Signup