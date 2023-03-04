import { NavLink, useNavigate } from 'react-router-dom';
import styled from "styled-components";
import React from 'react';
import './Navbar.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';


<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"></link>


function Navbar() {

    const navigate = useNavigate();

    const btnStyles ={
        "&.MuiButton-text":{
            color: '#5e5f62',
            textTransform: 'none',
            padding: "10px 20px",
            borderRadius: '15px',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'center',

            
        },
        "&.MuiButton-text.active":{
            color: '#000000',
            textTransform: 'none',
            padding: "10px 20px",
            borderRadius: '15px',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'center',

            
        },

        "&.MuiButton-outlined":{
            color: '#F0634C',
            border: '2px solid #F0634C',
            borderRadius: '15px',
            textTransform: 'none',
            padding: "10px 30px",
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'center',
            
            
        },
        "&.MuiButton-contained":{
            background: '#F0634C', 
            borderRadius: '15px',
            textTransform: 'none',
            padding: "10px 30px",
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '36px',
            letterSpacing: '0em',
            textAlign: 'center',
        }
    }

    const logo = require('./Images/crawleeimg.png');
    
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo"/>
            <div className="navbar-links">
            
                {/* <Button
                onClick={()=> navigate('/')}
                sx={btnStyles}
                variant="text">Home</Button>
        
                <Button 
                onClick={()=> navigate('/courses')}
                sx={btnStyles}
                variant="text">Courses</Button>

                <Button 
                onClick={()=> navigate('/StudentProfile')}
                sx={btnStyles}
                variant="text">About</Button> */}
                <NavLink to='/'>
                    Home
                </NavLink>
        

                <NavLink to='/courses'>
                    Courses
                </NavLink>

                <NavLink to='/About'>
                    About
                </NavLink>

            </div>
            <div className="navbar-buttons">
            <Stack spacing={2} direction="row">

                <Button 
                onClick={()=> navigate('/login')}
                sx={btnStyles}
                variant="outlined">Login</Button>

                <Button
                onClick={()=> navigate('/sign-up')}
                sx={btnStyles}
                variant="contained">Sign Up</Button>
                
            </Stack>
            </div>
        </nav>
    );
}

export default Navbar;