import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../Asserts/icon.png'
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import './Navbar.css'
import toast from 'react-hot-toast';

const Navbar = ({ isLoggedIn, setIsLoggedIn ,number}) => {
  let navigator=useNavigate();
  function clickHandler() {
    toast.success("Successfully Logout!");
    setIsLoggedIn(false);
    navigator("/");
  }

  return (
    <div className='fixed z-[100] flex justify-around w-full h-[100px] items-center bg-[#000042]'>
      <div className='w-[80px] h-[80px] rounded-full'>
        <Link to='/' className='rounded-lg'>
          <img src={logo} className='rounded-full' alt='logo' />

        </Link>
      </div>
      <nav>
        <ul className='flex gap-[120px] items-center justify-center text-white'>

          <Link to='/' className='flex gap-3 h-[30px] w-[30px] mt-[-20px]'>
            <button className="home-btn">
              <svg className='mt-[-15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">    <path d="M 25 1.0507812 C 24.7825 1.0507812 24.565859 1.1197656 24.380859 1.2597656 L 1.3808594 19.210938 C 0.95085938 19.550938 0.8709375 20.179141 1.2109375 20.619141 C 1.5509375 21.049141 2.1791406 21.129062 2.6191406 20.789062 L 4 19.710938 L 4 46 C 4 46.55 4.45 47 5 47 L 19 47 L 19 29 L 31 29 L 31 47 L 45 47 C 45.55 47 46 46.55 46 46 L 46 19.710938 L 47.380859 20.789062 C 47.570859 20.929063 47.78 21 48 21 C 48.3 21 48.589063 20.869141 48.789062 20.619141 C 49.129063 20.179141 49.049141 19.550938 48.619141 19.210938 L 25.619141 1.2597656 C 25.434141 1.1197656 25.2175 1.0507812 25 1.0507812 z M 35 5 L 35 6.0507812 L 41 10.730469 L 41 5 L 35 5 z" /></svg>
            </button>
          </Link>


          <Link to='/menu' className='flex gap-3'>
            <button className="menu-btn">
              <span className="icon">
                <svg viewBox="0 0 175 80" width="40" height="40">
                  <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                  <rect y="30" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                  <rect y="60" width="80" height="15" fill="#f0f0f0" rx="10"></rect>
                </svg>
              </span>
              <span className="text">MENU</span>
            </button>
          </Link>


        </ul>

      </nav>



      <div className='relative flex gap-6 items-center justify-center'>

        <Link to='/cart' className='relative'>
        <FaCartShopping className='text-white text-4xl' />
        {isLoggedIn && 
        <div className='absolute bg-red-500 w-5 h-5 rounded-full right-[-1px] top-[-2px] text-white text-center'>
        {number}
        </div>
        }
        </Link>


        {
          !isLoggedIn &&
          <Link to='/login'>
            <button className="login-button">
              <span className="login-button-content">login </span>
            </button>
          </Link>

        }

        {
          !isLoggedIn &&
          <Link to='/signup'>
            <button className="login-button">
              <span className="login-button-content">signup </span>
            </button>
          </Link>

        }

        {
          isLoggedIn &&
            <button onClick={clickHandler} className="login-button ">
              <span className="login-button-content text-yellow-400">Logout </span>
            </button>
         

        }
        {
          isLoggedIn && 
          
          (<CgProfile className='text-white text-4xl'/>)
           
        }
        




      </div>

    </div>
  )
}

export default Navbar