/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from './Component/layout/Header'
import Home from './Component/Home'
import Footer from './Component/layout/Footer'
import { Routes, Route } from "react-router-dom"
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
import Payment from './Component/payment/Payment'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from './Component/payment/Success'


function App() {

  const [stripeApiKey, setStripeApiKey] = useState("");
  async function getStripeApiKey() {
    const { data } = await axios.get("/api/stripeapiKey");
    setStripeApiKey(data.stripeApiKey);
  }
  // console.log(stripeApiKey)
  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(loadUser())
    getStripeApiKey()
  })
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="productDetail/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/checkoutStep" element={<CheckoutStep />} />
        <Route path="/order/confirm" element={<ConfirmOrder />} />
        <Route path="/success" element={<Success />} />

        {
          stripeApiKey && (
            <Route
              path="/payment"
             element={
               <Elements stripe={loadStripe(stripeApiKey)}>
                 <Payment />
               </Elements>
             }
            />
          )
        }
      </Routes>
      <Footer />
    </>
  )
}

export default App