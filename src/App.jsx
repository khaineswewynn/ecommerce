import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import MasterLayout from './components/MasterLayout'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
const App=()=>{
  return(
    <>
      <Routes>
        <Route path="/" element={<MasterLayout></MasterLayout>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/products/:id" element={<ProductDetail></ProductDetail>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App