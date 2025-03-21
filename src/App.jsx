import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
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

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Luôn bật dark mode
  }, []);
  return (
    <>
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
    </>
  )
}

export default App
