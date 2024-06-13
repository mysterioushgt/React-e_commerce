/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Slider({slider}) {
  return (
    
    <>
          {/* <div className="col-lg-8 mb-2">
            <div className="carousel slide carousel-fade" data-bs-ride="carousel" id="cr">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#cr" data-bs-slide-to="0"></button>
                <button type="button" data-bs-target="#cr" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#cr" data-bs-slide-to="2"></button>
              </div> */}
              {/* <div className="carousel-inner"> */}
                <div className="carousel-item active" style={{ height: '430px' }} data-bs-interval="2000">
                  <img className="w-100 h-100" src={slider.image.url} alt="1" />
                  <div className="carousel-caption">
                    <h1 className="animate__animated animate__backInDown">{slider.title}</h1>
                    <button className="animate__animated animate__backInUp btn btn-outline-light p-2">Shop Now</button>


                  </div>
                </div>
                <div className="carousel-item active" style={{ height: '430px' }} data-bs-interval="2000">
                  <img className="w-100 h-100" src={slider.image.url} alt="1" />
                  <div className="carousel-caption">
                    <h1 className="animate__animated animate__backInDown">{slider.title}</h1>
                    <button className="animate__animated animate__backInUp btn btn-outline-light p-2">Shop Now</button>


                  </div>
                </div>
                <div className="carousel-item active" style={{ height: '430px' }} data-bs-interval="2000">
                  <img className="w-100 h-100" src={slider.image.url} alt="1" />
                  <div className="carousel-caption">
                    <h1 className="animate__animated animate__backInDown">{slider.title}</h1>
                    <button className="animate__animated animate__backInUp btn btn-outline-light p-2">Shop Now</button>


                  </div>
                </div>
                {/* </div> */}
            {/* </div>
          </div> */}
    </>

  )
}

export default Slider