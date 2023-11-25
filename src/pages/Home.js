import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router'

const Home = () => {
  const navigator=useNavigate();
  return (
    <div className="Home flex flex-col justify-center items-center overflow-y-hidden">
      <p className='font-[700] text-[30px] text-white'>Always Great Food</p>
      <div className="scene">
  <div onClick={()=>{navigator('/menu')}} className="cube mt-[80px]">
    <span className="side top">Shop Now !</span>
    <span className="side front" > Go to Menu </span>
  </div>
</div>

    </div>
  )
}

export default Home