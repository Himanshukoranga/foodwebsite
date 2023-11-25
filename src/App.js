
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Menu from './pages/Menu'
import { useState } from 'react';
import Login from './pages/Login';
import Signup from './pages/Signup'
import Cart from './pages/Cart'
import menuItems from './dataitem'

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const [number,setNumber]=useState(0);

  
  return (
     <div className='w-screen h-screen bg-white overflow-x-hidden'>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  number={ number}  />
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='menu' element={<Menu  menuItems={menuItems} number={number} setNumber={setNumber} isLoggedIn={isLoggedIn}/>}/>
            <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn} />}/>
            <Route path='signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
            <Route path='cart'  element={<Cart menuItems={menuItems} number={number} setNumber={setNumber} isLoggedIn={isLoggedIn}/>}/>
        </Routes>
     </div>
  );
}

export default App;
