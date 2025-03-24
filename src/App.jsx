import { useState } from 'react'
import './App.css'
import { useEffect } from "react";
import Navbar from './page/Navbar/Navbar'
import Home from './page/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Portfolio from './page/Portfolio/Portfolio'
import Activity from './page/Activity/Activity'
import Watchlist from './page/Watchlist/Watchlist'
import Wallet from './page/Wallet/Wallet'
import PaymentDetail from './page/PaymentDetail/PaymentDetail'
import Withdrawal from './page/Withdrawal/Withdrawal'
import Profile from './page/Profile/Profile'
import StockDetail from './page/Stock Details/StockDetail'
import Authentication from './page/Auth/Authentication';
import LoginForm from './page/Auth/LoginForm';
import RegisterForm from './page/Auth/RegisterForm';
import ForgotPassWordForm from './page/Auth/ForgotPasswordForm';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './State/Authentication/Action';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Luôn bật dark mode
  }, []);

  const {auth} = useSelector(store => store);
  const dispatch = useDispatch()
  console.log("Auth --- ", auth)

  useEffect(() => {
    dispatch(getUser(auth.jwt || localStorage.getItem("token")))
  }, [auth.jwt])

  return (
    <>
      {auth.user ? 
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/activity' element={<Activity/>}/>
            <Route path='/watchlist' element={<Watchlist/>}/>
            <Route path='/wallet' element={<Wallet/>}/>
            <Route path='/payment-detail' element={<PaymentDetail/>}/>
            <Route path='/withdrawal' element={<Withdrawal/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route element={<StockDetail />} path="/market/bitcoin" />
          </Routes>
        </div> : <Authentication/>
      }
    </>
  )
}

export default App
