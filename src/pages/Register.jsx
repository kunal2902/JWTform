import React from 'react'
import {Box} from "@mui/material"
import RegistrationForm from '../components/RegistrationForm'

const Register = () => {
  return (
    <>
    
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" width="100vw" sx={{backgroundColor:"#cecece"}}>
        <RegistrationForm/>
    </Box>
    </>
  )
}

export default Register