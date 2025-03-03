import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { useEffect } from "react";
import Navbar from './page/Navbar/Navbar'
import Home from './page/Home/Home'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.documentElement.classList.add("dark"); // Luôn bật dark mode
  }, []);
  return (
    <>
      <Navbar/>
      <Home/>
    </>
  )
}

export default App
