import React, { useState } from 'react'
import './Menu.css'
import BuyItem from '../components/BuyItem';
import toast from 'react-hot-toast';
import ToLogin from '../components/ToLogin'


const Menu = ({ menuItems, setNumber, number,isLoggedIn }) => {
  const [selectedItem, setSelectedItem] = useState({ id: "", name: "", price: "", image: "", cart: "" });
  let [modal, setModel] = useState(false);
  let [overlay,setOverlay]=useState(false);
  function clickHandler(item) {
    setSelectedItem(item);
    setModel(true);
    setOverlay(true);
  }
  function closeModal(){
    setModel(false);
    setOverlay(false);
  }

  return (
    isLoggedIn?
    <div className='relative left-0 -top-1'>
      <div className='flex flex-col justify-center items-center mt-10 z-0'>
      <p className='text-4xl mb-5 font-bold'>Menu</p>

      <div className='flex justify-around flex-wrap '>
        {
          menuItems.map((item) => (
            <div key={item.id} className='w-[400px] h-[400px] flex flex-col justify-center items-center mt-10 rounded-2xl shadow-[0px_8px_16px_rgba(0,0,0,0.2)] p-5 hover:scale-105'>
              <p className='font-bold text-lg'>{item.name}</p>
              <img className='w-[80%] h-[60%] flex rounded-xl mt-4' src={item.image} alt='img' />
              <p className='font-medium my-4 text-xl text-green-500'>Price : {item.price}</p>
              <div className='flex gap-6'>
                <button onClick={() => clickHandler(item)} className="btn">
                  Shop now
                  <svg className="cartIcon" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                </button>

                <button type="button" className="button" onClick={() => { if(item.cart){ setNumber(number)}else{setNumber(number+1);item.cart = true; toast.success("item added");} }}>
                  <span className="button__text">Add To Cart</span>
                  <span className="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                </button>
              </div>

            </div>
          ))
        }
      </div>

      

    </div>

    <div className={` w-full h-[105%] absolute left-0 top-[-35px] bottom-0   ${modal ? "" : "deactive"}`}>
        <BuyItem selectedItem={selectedItem} closeModal={closeModal} className="z-[13px]"/>
        <div className={` fixed left-0 right-0 top-0 bottom-0 bg-[#0c0c0c83] z-[11px] transition-all duration-200 ${overlay ? "" : "deoverlay"}`}
          onClick={closeModal}></div>
      </div>
    </div>:<ToLogin login="Menu"/>
     
    
  )
}

export default Menu