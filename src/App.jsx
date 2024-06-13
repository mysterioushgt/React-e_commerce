import React from 'react'
import Header from './Component/layout/Header'
import Home from './Component/Home'
import Footer from './Component/layout/Footer'
import {Routes , Route} from "react-router-dom"
import ProductDetail from './Component/product/ProductDetail'
import Login from './Component/user/Login'
import Register from './Component/user/Register'
import Dashboard from './Component/admin/Dashboard'
import Contact from './Component/Contact'
import Cart from './Component/cart/Cart'



function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="productDetail/:id" element={<ProductDetail/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/register" element={<Register/> } />
        <Route path="/dashboard" element={<Dashboard/> } />
        <Route path="/contact" element={<Contact/> } />
        <Route path="/cart" element={<Cart/> } />
        </Routes>
    <Footer/>
    </>
  )
}

export default App