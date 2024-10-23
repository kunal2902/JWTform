import React from 'react'
import LoginPage from '../components/LoginPage'
import { Box } from '@mui/material'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <>
    <Navbar/>
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw" sx={{backgroundColor:"#cecece"}}>
        <LoginPage/>
    </Box>
    </>
  )
}

export default Login