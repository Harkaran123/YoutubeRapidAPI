import React from 'react';
import { Stack } from '@mui/material';
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from './SearchBar';

const Navbar = () => {
  return (
    <Stack direction="row" 
    justifyContent="space-between"
    alignItems="center"
    p={2}
    sx={{position: "sticky", top: 0, background: "#000", }}>

      <Link to="/" style={{display: "flex", alignItems: "center"}}>
      <img src={logo} alt='logo' className='logo'/>
      </Link>
      
      <SearchBar />
    </Stack>
  )
}

export default Navbar
