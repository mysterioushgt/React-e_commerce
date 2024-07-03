/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
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
import Checkout from './Component/checkout/Checkout'
import { useDispatch } from 'react-redux'
import { loadUser } from './redux/actions/UserAction'
import Profile from './Component/user/Profile'
import CheckoutStep from './Component/cart/CheckoutStep'
import Shipping from './Component/cart/Shipping'
import ConfirmOrder from './Component/cart/ConfirmOrder'


function App() {
  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(loadUser())
  })
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
        <Route path="/checkout" element={<Checkout/> } />
        <Route path="/profile" element={<Profile/> } />
        <Route path="/shipping" element={<Shipping/> } />
        <Route path="/checkoutStep" element={<CheckoutStep/> } />
        <Route path="/order/confirm" element={<ConfirmOrder/> } />
        </Routes>
    <Footer/>
    </>
  )
}

export default App