/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function Category({category}) {
  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
        <a href="#" className="text-decoration-none ">
          <div className="cat d-flex align-items-center cl">
            <div className=" overflow-hidden  wh ">
              <img className="img-fluid rd " src={category.image.url} alt=""/>
            </div>
            <div className="ps-3 text-dark">
              <h6>{category.name}</h6>
              <small>100 Products</small>
            </div>
          </div>
        </a>
      </div>
     
    
    </>
  )
}

export default Category