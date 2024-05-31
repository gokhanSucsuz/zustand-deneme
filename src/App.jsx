import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductDetail from './Product'

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <ProductDetail productId={count} />
    </>
  )
}

export default App
