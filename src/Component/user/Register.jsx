/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
function Register() {

  const [name ,setName] = useState()
  const [email ,setEmail] = useState()
  const [password ,setPassword] = useState()
  const [confirmPassword ,setconfirmPassword] = useState()
  const [image ,setImage] = useState()
  return (
    <>
     <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className=" mb-4">Register</h1>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="name" placeholder="Enter your name" required/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Enter your email" required/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Enter your password" required/>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}type="password" className="form-control" id="confirmPassword" placeholder="Confirm your password" required/>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Image:</label>
                <input value={image} onChange={(e) => setImage(e.target.files[0])} type="file" className="form-control" id="image" placeholder="Confirm your password" required/>
              </div>
              <button type="submit" className="btn btn-warning mt-3">Register</button>
            </form>
            <div className="mt-3">
              <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register