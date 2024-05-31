import { useState } from 'react'
import './App.css'
import Product from './Product'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from './ProductDetail'
import Show from "./Show"

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product-detail' element={<ProductDetail />} />
        <Route path='/product' element={<Product />} />
        <Route path='/show/:id' element={<Show />} />
      </Routes>

    </>
  )
}

export default App
