/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute({ isAuthenticated, adminRoute, isAdmin }) {

    if (!isAuthenticated) {
        return <Navigate to={"/login"} />
    }
    if (adminRoute && !isAdmin) {
        return <Navigate to={"/"} />
    }

    return (
    <Outlet/>
  )
}

export default ProtectedRoute