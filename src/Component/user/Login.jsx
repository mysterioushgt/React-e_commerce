/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <>
     <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h1 className=" mb-4">Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="btn btn-warning mt-3">Login</button>
            </form>
            <div className="mt-3">
              <Link to="/forgot-password">Forgot password?</Link>
            </div>
            <div className="mt-3">
              <p>Already have an account? <Link to="/register">Register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login