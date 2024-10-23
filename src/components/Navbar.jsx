import { AppBar, Button, ButtonBase, Toolbar } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const params = useLocation();
  const navigate = useNavigate();
  return (
    <AppBar position="relative">
      <Toolbar sx={{ position: "absolute", right: "2rem",top:"2rem" }}>
         <Button sx={{backgroundColor:"black",color:"white"}} onClick={()=> navigate("/register")}>Register</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
