/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Category from './category/Category'
import Product from './product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../redux/actions/CategoryAction'
import { getProducts } from '../redux/actions/ProductAction'
import Loading from './layout/Loading'
import MetaData from './layout/MetaData'
import { getSlider } from '../redux/actions/SliderAction'
import Slider from './slider/Slider'

function Home() {
  const dispatch = useDispatch()
  //console.log(dispatch)

  //useSelector is used to get data
  const { categories, loading } = useSelector((state) => state.cat)
  // console.log(categories)

  const { products } = useSelector((state) => state.pro)
  // console.log(products)

  const { sliders } = useSelector((state) => state.Sli)
  // console.log(sliders)
  useEffect(() => {
    dispatch(getCategory())
    dispatch(getProducts())
    dispatch(getSlider())
  }, { dispatch })
  return (
    <>
    <MetaData title ='Home'/>

     {/* carousel start */}
     <div className="container-fluid">
        <div className="row px-xl-5 mb-2">
          <div className="col-lg-8 mb-2">
            <div className="carousel slide carousel-fade" data-bs-ride="carousel" id="cr">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#cr" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#cr" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#cr" data-bs-slide-to="2"></button>
              </div>
              <div className="carousel-inner">
                
              {
            loading ? (<Loading />) : (
              sliders.map((slider) => (
               <Slider slider={slider}/>
              ))
            )
          }
              
              </div>
              
            </div>
          </div>
          <div className="col-lg-4">
            <div className="offers1 mb-3">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h6 className="text-white text-uppercase pt-5">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-warning">Shop Now</a>
              </div>
            </div>
            <div className="offers2 mb-3">
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h6 className="text-white text-uppercase pt-5">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-warning">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature start */}
      <div className="container-fluid my-5">
        <div className="row px-xl-5">
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-flex align-items-center bg-white p-4">
              <h1 className="fa fa-check text-warning m-0 me-3"></h1>
              <h5>Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-flex align-items-center bg-white p-4">
              <h1 className="fa fa-shipping-fast text-warning m-0 me-3"></h1>
              <h5>Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-flex align-items-center bg-white p-4">
              <h1 className="fa fa-exchange text-warning m-0 me-3"></h1>
              <h5>Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-2">
            <div className="d-flex align-items-center bg-white p-4">
              <h1 className="fa fa-phone-volume text-warning m-0 me-3"></h1>
              <h5>Quality Product</h5>
            </div>
          </div>
        </div>

      </div>
      {/* feature end */}

      {/* category start */}

      <div className="container-fluid">
        <div className="row px-xl-5 my-3">
          <h2 className="mb-3">CATEGORIES</h2>
          {
            loading ? (<Loading />) : (
              categories.map((category) => (
                <Category category={category} />
              ))
            )
          }
        </div>
      </div>

      {/* category end */}
      {/* product start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <h2>FEATURED PRODUCTS</h2>
          {
            loading ? (<Loading />) : (
            products.map((product) => (
              <Product product={product} />
            ))
          )
          }
        </div>
      </div>
      {/* product end */}

      {/* offers start */}
      <div className="container-fluid">
        <div className="row px-xl-5 my-3">
          <div className="col-md-6 mb-2">
            <div className="offers1 mb-3" style={{ height: '260px !important' }}>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h6 className="text-white text-uppercase pt-5">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-warning">Shop Now</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-2">
            <div className="offers2 mb-3" style={{ height: ' 260px !important' }}>
              <div className="d-flex align-items-center justify-content-center flex-column">
                <h6 className="text-white text-uppercase pt-5">Save 20%</h6>
                <h3 className="text-white mb-3">Special Offer</h3>
                <a href="" className="btn btn-warning">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home