import React from 'react'
import './Cart.css'
import NoItem from '../components/NoItem'
import { FaArrowRightLong } from "react-icons/fa6";
import ToLogin from '../components/ToLogin';
import toast from 'react-hot-toast';


const Cart = ({ menuItems, setNumber, number , isLoggedIn}) => {
  let price = 0;
  const p = menuItems.filter((item) => {
    if (item.cart === true) {
      price += parseFloat(item.price.replace("$", ""));
      return item;
    }
    else {
      return null;
    }
  })
  function clickHandler() {
    menuItems.map((item)=>{
      if (item.cart===true) {
        item.cart=false;
        
        console.log(number);
      } 

  })
    setNumber(0);
    toast.success("Order Placed");
  }

  // console.log(p);
  return (
    isLoggedIn?
    p.length === 0 ? <NoItem /> :
      <div className='w-full h-full flex flex-col  items-center mt-[150px] '>
        <div className='mb-10'>
          <h1 className='text-3xl font-bold '>My Cart <span>({number})</span></h1>
        </div>
        <div className='w-[80%]  flex flex-col items-center justify-center gap-10 bg-gradient-to-r from-[#09203F] to-[#537895] rounded-3xl text-white'>
          <div className='flex justify-around w-full mt-12 '>
            <p className='text-xl font-bold'>Product</p>
            {/* <p className='text-xl font-bold'>Quantity</p> */}
            <p className='text-xl font-bold'>Subtotal</p>
          </div>

          {/* All Cards */}
          <div className='flex flex-wrap justify-around items-center gap-10 w-full h-full  mb-10'>
            {
              p.map((item) => (
                <div key={item.id} className='flex justify-around items-center w-full ml-[60px]'>

                  <div className='flex w-[60%]  items-center gap-8 ' key={item.id}>
                    <img className="w-[150px] h-[150px] rounded-xl" src={item.image} alt='img' />
                    <div className='flex flex-col gap-2'>
                      <h1 className='text-lg font-medium'>{item.name}</h1>
                      <p className='text-lg font-medium'>Price : <span className='text-[#fc03f8]'>{item.price}</span></p>
                      <button onClick={() => { item.cart = false; setNumber(number-1); }} className="remove-button" >Remove Item</button>
                    </div>
                  </div>

                  {/* <div className='w-[10%] flex gap-5 justify-center items-center border-[1px]  bg-white text-black px-4 py-3 rounded-lg'>

                    <p  className='font-bold text-3xl text-black'>1</p>
                  </div> */}

                  <div className='w-[22%] font-medium text-xl text-[#78fa58]'>
                    {item.price}
                  </div>
                </div>


              ))



            }
          </div>

          <div className='flex justify-around items-center w-full mt-[-30px] mb-10'>
            <p className='text-2xl '>Total Amount :</p>
            <p className='text-lg text-[#78fa58]'>$ {price}</p>
          </div>


          <button onClick={clickHandler} id="bottone1" className='flex items-center gap-4 mb-5 ml-[700px] mt-[-50px]'>
          <strong>Place Order  </strong>
          <FaArrowRightLong />
          </button>


        </div>




      </div>:
      <ToLogin login="Cart"/>
  )
}

export default Cart