import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Slider/>
     <ProductionHouse/>
    </>
  )
}

export default App
