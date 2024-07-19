import './App.css'
import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import Header from './Component/layout/Header'
import Footer from './Component/layout/Footer'
import Home from './Component/Home'

import Login from './Component/user/Login'
import Registation from './Component/user/Register'
import Dashboard from './Component/admin/Dashboard'
import Profile from './Component/user/Profile'
import Contact from './Component/Contact'
import Cart from './Component/cart/Cart'

import { useDispatch,useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { loadUser } from './redux/actions/UserAction'

import Shipping from './Component/cart/Shipping'
import ConfirmOrder from './Component/cart/ConfirmOrder'
import Payment from './Component/payment/Payment'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Success from './Component/payment/Success'
import OrderDetails from './Component/order/OrderDetails'
import MyOrder from './Component/order/MyOrder'
import ProtectedRoute from './Component/protectedRoute/ProtectedRoute'
import ProductDetail from './Component/product/ProductDetail'



function App() {

  const {isAuthenticated } = useSelector((state) => state.auth);

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
  }, [dispatch])
  return (
    <>
      <Header />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='productdetail/:id' element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        {/* <Route path='/checkout' element={<CHeckOut />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Registation />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/checkoutstep' element={<CheckoutStep />} /> */}

         {/* secure */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>} >
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />       
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/order/confirm' element={<ConfirmOrder />} />
        <Route path='/success' element={<Success />} />
        <Route path='/orders/me' element={<MyOrder/>} />
        <Route path='/order/:id' element={<OrderDetails/>} />
        </Route>

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