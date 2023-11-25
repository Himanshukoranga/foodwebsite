import React from 'react'
import { SiVisa } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import './BuyItem.css'
import toast from 'react-hot-toast';

const BuyItem = ({ selectedItem, closeModal }) => {
  
  return (
    <div className='fixed left-[35%] top-[25%] w-[30%] h-[60%] flex justify-center items-center z-[14] bg-transparent overflow-hidden'>
      <div className=' w-full h-full rounded-xl p-5 pt-10 flex flex-col  items-center gap-6 bg-gradient-to-br from-[#9600ff] to-[#aebaf8] z-30   mx-auto '>

        <p className='text-2xl font-bold '>Buy Now</p>
        <div className='flex  flex-wrap  justify-between items-center w-[60%] gap-4 text-white'>
          <p className='text-xl font-medium text-black '>Item : </p>
          <span className=' text-lg '>{selectedItem.name}</span>
          <p className='text-xl font-medium text-black'>Price (1 item) : </p>
          <span className='text-lg  '>{selectedItem.price}</span>
          <p className='text-xl font-medium text-black '>Delivery Charges : </p>
          <span className='text-lg font-medium text-green-500'>Free</span>
        </div>
        <div className='text-yellow-300'>
          <p className='text-xl text-center'>Payment Methods</p>
          <div className='flex justify-around w-[300px] mt-2'>
            <SiVisa className='font-bold text-blue-700 text-5xl' />
            <div className='text-2xl font-bold text-gray-700 flex items-center justify-center'>
              <FcGoogle className='font-bold text-4xl'></FcGoogle>
              <p>Pay</p>
            </div>
            <RiMastercardFill className='font-bold text-yellow-400 text-5xl' />
          </div>

        </div>

        <div onClick={()=>{toast.success("Purchase successful"); closeModal();}} data-tooltip={`Price:${selectedItem.price}`} className="buy-button">
          <div className="button-wrapper">
            <div className="buy-text">Buy Now</div>
            <span className="buy-icon">
              <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
              </svg>
            </span>
          </div>
        </div>




      </div>


    </div>
  )
}

export default BuyItem


