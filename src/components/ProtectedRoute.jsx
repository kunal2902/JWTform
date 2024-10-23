import React from 'react'
import cookies from "js-cookie"
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
   const token=cookies.get("token")

   if(!token) return <Navigate to="/login"/>

   return children;
}

export default ProtectedRoute