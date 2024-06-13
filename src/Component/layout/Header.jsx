/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from "react-router-dom"
function Header() {
  return (
    <>
    <div>
    {/* topBar start */}
<div className="container-fluid">
<div className="row py-1 px-xl-5 text-secondary" style={{backgroundColor:'#f5f5f5'}}>
<div className="col-lg-6 d-none d-lg-block">
<div className="d-inline-flex align-items-center h-100">
<a href="#" className="nav-link aa ms-3">Home</a>
<a href="#" className="nav-link aa ms-3">contact</a>
<a href="#" className="nav-link aa ms-3">Help</a>
<a href="#" className="nav-link aa ms-3">FAQs</a>
</div>
</div>
<div className="col-lg-6 ts lg-center">
<div className="d-inline-flex align-items-center ">
<div className="dropdown mx-2">
<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">My Account</button>
<ul className="dropdown-menu dropdown-menu-right">
<Link to="/login" className="dropdown-item">Login</Link>
    <Link to="/register" className="dropdown-item">Register</Link>
    <Link to="/profile" className="dropdown-item">Profile</Link>
</ul>
</div>
<div className="dropdown mx-2">
<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">USD</button>
<ul className="dropdown-menu dropdown-menu-right">
  <li><a href="#" className="dropdown-item">GBP</a></li>
  <li><a href="#" className="dropdown-item">CAD</a></li>
  <li><a href="#" className="dropdown-item">EUR</a></li>
</ul>
</div>
<div className="dropdown">
<button type="button" className="btn btn-warning dropdown-toggle" data-bs-toggle="dropdown">EN</button>
<ul className="dropdown-menu dropdown-menu-right">
  <li><a href="#" className="dropdown-item">FR</a></li>
  <li><a href="#" className="dropdown-item">AR</a></li>
  <li><a href="#" className="dropdown-item">RU</a></li>
</ul>
</div>
</div>
<div className="d-inline-flex align-items-center d-block d-lg-none">
<a href="#" className="btn px-0">
<i className="fas fa-heart text-warning"></i>
<span className="rounded-circle border px-2 pb-1 ms-1 text-dark">0</span>
</a>
<a href="#" className="btn px-0 ms-2">
<i className="fas fa-shopping-cart text-warning"></i>
<span className="rounded-circle border px-2 pb-1 text-dark ms-1">0</span>
</a>
</div>
</div>
</div>
<div className="row align-items-center bg-white py-3 px-xl-5 d-none d-lg-flex ">
<div className="col-lg-4">
<a href="" className="text-decoration-none">
        <span className="h1 text-uppercase text-warning bg-dark px-2">Multi</span>
        <span className="h1 text-uppercase text-dark bg-warning px-2 ml-0">Shop</span>
    </a>
</div>
<div className="col-lg-4">
<div className="input-group">
<input type="text" placeholder="search for product" className="form-control rounded-0"/>
<span className="input-group-text text-warning rounded-0">
<i className="fa fa-search"></i>
</span>
</div>
</div>
<div className="col-lg-4 ts">
<p className="mb-0">Customer Service</p>
<h5 className="mb-0">+913 127 8917</h5>
</div>
</div>
</div>
{/*Navbar start */}
<div className="container-fluid mb-5 bg-secondary">
<div className="row px-xl-5">
<div className="col-lg-3 d-none d-lg-block" style={{height:'65px'}}>
<div className="dropdown">
<button href="#" className="btn btn-warning rounded-0 px-4 w-100 d-flex align-items-center justify-content-between dropdown-toggle" style={{height:'72px'}} data-bs-toggle="dropdown">
<h6 className="text-dark"><i className="fa fa-bars me-2"></i>
  Categories
</h6>

</button>
<ul className="dropdown-menu">
<li><a href="#" className="dropdown-item text-dark px-4 btn aa">Dresses</a></li>
<li><a href="#" className="dropdown-item text-dark px-4 btn aa">Shirt</a></li>
<li><a href="#" className="dropdown-item text-dark px-4 btn aa">Jeans</a></li>
<li><a href="#" className="dropdown-item text-dark px-4 btn aa"> Jacket</a></li>
<li><a href="#" className="dropdown-item text-dark px-4 btn aa">Blazer</a></li>
<li><a href="#" className="dropdown-item text-dark px-4 btn aa">Shirt</a></li>
<li><a href="#" className="dropdown-item text-dark px-4 btn aa">Jeans</a></li>
<li><a href="#" className="dropdown-item text-dark px-4 btn aa"> Jacket</a></li>
<li><a href="#" className="dropdown-item text-dark px-4 btn aa">Blazer</a></li>
</ul>
</div>
</div>
<div className="col-lg-9">
<nav className="navbar py-3 navbar-dark bg-secondary navbar-expand-lg">
<a href="" className="text-decoration-none d-lg-none d-block">
<span className="h1 text-uppercase bg-light text-dark px-2">Multi</span>
<span className="h1 text-uppercase bg-warning text-light px-2 ml-0">Shop</span>
</a>
<button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarhome">
<span className="navbar-toggler-icon"></span>
</button>
<div className="navbar-collapse collapse justify-content-between" id="navbarhome">
<ul className="navbar-nav">
  <li><Link to="/" className=" nav-link">Home</Link></li>
  <li><Link to="/shop" className="nav-link">Shop</Link></li>
  <li><Link to="productDetail/:id" className="nav-link">Shop Details</Link></li>
  <div className="dropdown">
    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
    <ul className="dropdown-menu">
      <li><Link to="/cart" className="dropdown-item aa">shoppingcart</Link></li>
      <li><Link to="/check" className="dropdown-item aa">Cheakout</Link></li>
    </ul>
  </div>
  <li><Link to="/contact" className="nav-link">Contact</Link></li>
</ul>
<div className="d-none d-lg-block">
  <a href="#" className="btn px-0">
    <i className="fas fa-heart text-warning"></i>
    <span className="rounded-circle border px-2 pb-1 ms-1 text-light">0</span>
  </a>
  <a href="#" className="btn px-0 ms-2">
    <i className="fas fa-shopping-cart text-warning"></i>
    <span className="rounded-circle border px-2 pb-1 text-light ms-1">0</span>
  </a>
</div>
</div>
</nav>
</div>
</div>
</div>
</div>
</>
  )
}

export default Header