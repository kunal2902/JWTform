import React, { useState } from "react";
import { Box, Button, InputBase, Typography } from "@mui/material";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import cookies from "js-cookie"

const RegistrationForm = () => {
  const [formVal, setFormVal] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate=useNavigate()

  const changable = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormVal({ ...formVal, [name]: value });
  };

  const Submission =async (e) => {
    e.preventDefault()

    const {name,email,password}=formVal

    const formData={
        name,
        email,
        password,
    }

    try {
        const data=await axios.post('http://localhost:5001/api/auth/register',formData)
        const token = data.data.token;

        cookies.set('token', token, { expires: 1, sameSite: 'Strict' });
            navigate("/home")
        console.log(data.data)
    } catch (error) {
        console.error("there encoutered an error",error)
        alert("Registrtion failed")
    }
  };

  return (
    <Box
      height="40vh"
      width="20vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap="2rem"
      sx={{backgroundColor:"white"}}
      boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
    >
      <Typography variant="h6" textAlign="center">
        Registration Form
      </Typography>
      <InputBase
        type="text"
        name="name"
        placeholder="Name"
        value={formVal.name}
        onChange={changable}
      />

      <InputBase
        type="email"
        name="email"
        placeholder="Email"
        value={formVal.email}
        onChange={changable}
      />
      <InputBase
        type="password"
        name="password"
        placeholder="Password"
        value={formVal.password}
        onChange={changable}
      />
      <Button type="submit" onClick={Submission} sx={{borderRadius:"1rem", padding:"1rem",color:"black"}}>Register</Button>
    </Box>
  );
};

export default RegistrationForm;
