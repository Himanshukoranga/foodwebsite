import React from 'react'
import { useNavigate } from 'react-router'

const ToLogin = ({login}) => {
  const navigator=useNavigate();
  return (
    <div className='w-full h-full flex justify-center items-center'>
      <div className={`rounded-xl w-[50%] h-[30%] mx-auto flex flex-col gap-6 justify-center items-center ${login==="Cart"?'bg-violet-500':' bg-blue-600'}`}>
         <p className='text-white font-medium text-2xl'>Please Login to access {login}</p>
         <button onClick={()=>{navigator('/login')}} type="button" className=" flex justify-center gap-5 items-center w-[200px] text-white bg-pink-500 hover:bg-pink-600 
      rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 
       focus:outline-none " href="/menu">Login <span className='font-black text-2xl'> &rarr;</span>
          
        </button>

      </div>
    </div>
  )
}

export default ToLogin