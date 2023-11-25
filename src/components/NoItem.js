import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from 'react-router';

const NoItem = () => {
  const navigator=useNavigate();
  return (
    <div>
      <section className="mt-[200px] flex flex-col justify-center items-center text-xl text-center max-w-4xl mx-auto my-10 py-5 border-[4px] dark:border-slate-700 shadow-2xl shadow-slate-500 rounded">
        <div className="my-5">
          <p className=" flex justify-center text-green-600 text-7xl mb-5">
            <FaCartShopping/>
          </p>
          <p className='font-bold'>Oops! Your cart looks empty!</p>
          <p className='font-bold'>Add Food to your cart from our store collections</p>
        </div>
        <button type="button" className=" flex justify-center gap-5 items-center w-[300px] text-white bg-blue-700 hover:bg-blue-900 
      rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
       focus:outline-none " onClick={()=>{navigator("/menu")}}>Continue Shopping
          <FaCartShopping />
        </button>
      </section>
    </div>
  )
}

export default NoItem